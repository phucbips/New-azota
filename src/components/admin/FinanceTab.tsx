import React, { useState, useMemo, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  Plus,
  Trash2,
  Loader2,
  FolderKanban,
  CheckCircle2,
  Lock,
  RotateCcw,
  Calendar,
  AlertCircle,
  X,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {
  financeService,
  FinancialTransaction,
  TransactionType,
  SalesBatch,
  PRE_NOV_BATCH_ID,
  resolveTransactionBatchId,
  getTransactionDateMs,
} from '../../services/finance.service';
import { orderService, Order } from '../../services/order.service';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';

export const FinanceTab: React.FC = () => {
  const { user } = useAuth();
  const [batches, setBatches] = useState<SalesBatch[]>([]);
  const [selectedBatchId, setSelectedBatchId] = useState<string>('');
  const [hasInitializedSelection, setHasInitializedSelection] = useState(false);

  const [timePeriod, setTimePeriod] = useState<'today' | 'week' | 'month' | 'all'>('all');
  const [transactions, setTransactions] = useState<FinancialTransaction[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Transaction form state
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<{
    type: TransactionType;
    category: string;
    amount: number;
    description: string;
  }>({
    type: 'expense',
    category: 'server_cost',
    amount: 0,
    description: '',
  });
  const [saving, setSaving] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');

  // Batch modals state
  const [showCreateBatchModal, setShowCreateBatchModal] = useState(false);
  const [newBatchName, setNewBatchName] = useState('');
  const [newBatchDesc, setNewBatchDesc] = useState('');
  const [includeUnassigned, setIncludeUnassigned] = useState(true);
  const [batchSaving, setBatchSaving] = useState(false);

  const [confirmCloseBatch, setConfirmCloseBatch] = useState<SalesBatch | null>(null);

  useEffect(() => {
    const unsubTx = financeService.subscribeToTransactions((data) => {
      setTransactions(data);
      setLoading(false);
    });
    const unsubBatches = financeService.subscribeToBatches((data) => {
      setBatches(data);
    });
    const unsubOrders = orderService.subscribeToOrders((data) => {
      setOrders(data);
    });
    return () => {
      unsubTx();
      unsubBatches();
      unsubOrders();
    };
  }, []);

  // Automatically sync any paid orders (e.g. from PayOS QR or Orders page) into financial_transactions & active batch
  useEffect(() => {
    if (!loading && orders.length > 0 && batches.length > 0) {
      financeService.syncPaidOrdersToTransactions(orders, transactions, batches);
    }
  }, [loading, orders, transactions, batches]);

  const activeBatch = useMemo(
    () => batches.find((b) => b.status === 'active') || null,
    [batches]
  );

  // Set initial selected batch once batches load: prefer active batch, else newest batch
  useEffect(() => {
    if (!hasInitializedSelection && batches.length > 0) {
      if (activeBatch) {
        setSelectedBatchId(activeBatch.id);
      } else {
        setSelectedBatchId(batches[0].id);
      }
      setHasInitializedSelection(true);
    }
  }, [batches, activeBatch, hasInitializedSelection]);

  // Group transactions by resolved batchId
  const transactionsByBatch = useMemo(() => {
    const map: Record<string, FinancialTransaction[]> = {
      all_batches: transactions,
      unassigned: [],
    };
    for (const b of batches) {
      map[b.id] = [];
    }
    for (const tx of transactions) {
      const bid = resolveTransactionBatchId(tx, batches);
      if (!map[bid]) map[bid] = [];
      map[bid].push(tx);
    }
    return map;
  }, [transactions, batches]);

  const unassignedTransactions = transactionsByBatch['unassigned'] || [];

  // Summary metrics per batch
  const batchSummaries = useMemo(() => {
    const summaries: Record<
      string,
      { income: number; expense: number; net: number; count: number }
    > = {};
    for (const b of batches) {
      const list = transactionsByBatch[b.id] || [];
      const income = list
        .filter((t) => t.type === 'income')
        .reduce((s, t) => s + Number(t.amount || 0), 0);
      const expense = list
        .filter((t) => t.type === 'expense')
        .reduce((s, t) => s + Number(t.amount || 0), 0);
      summaries[b.id] = {
        income,
        expense,
        net: income - expense,
        count: list.length,
      };
    }
    return summaries;
  }, [batches, transactionsByBatch]);

  const currentBatch = useMemo(
    () => batches.find((b) => b.id === selectedBatchId) || null,
    [batches, selectedBatchId]
  );

  // Filter transactions by selected batch first, then by timePeriod
  const batchFilteredTransactions = useMemo(() => {
    if (!selectedBatchId || selectedBatchId === 'all_batches') {
      return transactions;
    }
    return transactionsByBatch[selectedBatchId] || [];
  }, [transactions, transactionsByBatch, selectedBatchId]);

  const timeFiltered = useMemo(() => {
    if (timePeriod === 'all') return batchFilteredTransactions;
    const now = new Date();
    const start = new Date();
    if (timePeriod === 'today') {
      start.setHours(0, 0, 0, 0);
    } else if (timePeriod === 'week') {
      start.setDate(now.getDate() - now.getDay());
      start.setHours(0, 0, 0, 0);
    } else if (timePeriod === 'month') {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
    }
    const startMs = start.getTime();
    return batchFilteredTransactions.filter((t) => getTransactionDateMs(t) >= startMs);
  }, [batchFilteredTransactions, timePeriod]);

  const totalIncome = timeFiltered
    .filter((t) => t.type === 'income')
    .reduce((s, t) => s + Number(t.amount || 0), 0);
  const totalExpense = timeFiltered
    .filter((t) => t.type === 'expense')
    .reduce((s, t) => s + Number(t.amount || 0), 0);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  const formatDateTime = (iso?: string | null) => {
    if (!iso) return 'Hiện tại';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const chartData = useMemo(() => {
    const map: Record<string, number> = {};
    const sortedAsc = [...timeFiltered]
      .filter((t) => t.type === 'income')
      .sort((a, b) => getTransactionDateMs(a) - getTransactionDateMs(b));

    sortedAsc.forEach((t) => {
      const d = new Date(getTransactionDateMs(t));
      const day = d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
      map[day] = (map[day] || 0) + Number(t.amount || 0);
    });
    return Object.entries(map).map(([date, revenue]) => ({ date, revenue }));
  }, [timeFiltered]);

  const listFiltered =
    filterType === 'all' ? timeFiltered : timeFiltered.filter((t) => t.type === filterType);

  const handleOpenCreateBatch = () => {
    const novBatchesCount = batches.filter((b) => b.id !== PRE_NOV_BATCH_ID).length;
    setNewBatchName(`Đợt bán hàng #${novBatchesCount + 1} (Tháng 11/2026)`);
    setNewBatchDesc('');
    setIncludeUnassigned(unassignedTransactions.length > 0);
    setShowCreateBatchModal(true);
  };

  const handleCreateBatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBatchName.trim()) {
      toast.error('Vui lòng nhập tên đợt bán hàng');
      return;
    }
    setBatchSaving(true);
    try {
      const created = await financeService.createBatch({
        name: newBatchName.trim(),
        description: newBatchDesc.trim(),
        createdBy: user?.uid || 'admin',
        includeUnassignedSinceNov: includeUnassigned,
        unassignedTransactionIds: unassignedTransactions.map((t) => t.id),
      });
      setSelectedBatchId(created.id);
      setTimePeriod('all');
      setShowCreateBatchModal(false);
      toast.success(`Đã mở "${created.name}" thành công!`);
    } catch (err) {
      console.error(err);
      toast.error('Không thể tạo đợt bán hàng mới');
    } finally {
      setBatchSaving(false);
    }
  };

  const handleCloseBatch = async () => {
    if (!confirmCloseBatch) return;
    setBatchSaving(true);
    try {
      const txIds = (transactionsByBatch[confirmCloseBatch.id] || []).map((t) => t.id);
      await financeService.closeBatch(confirmCloseBatch.id, txIds);
      toast.success(`Đã kết thúc và chốt sổ "${confirmCloseBatch.name}"`);
      setConfirmCloseBatch(null);
    } catch (err) {
      console.error(err);
      toast.error('Có lỗi khi kết thúc đợt bán hàng');
    } finally {
      setBatchSaving(false);
    }
  };

  const handleReopenBatch = async (batch: SalesBatch) => {
    if (batch.id === PRE_NOV_BATCH_ID) return;
    if (
      !window.confirm(
        `Mở lại "${batch.name}" để tiếp tục ghi nhận giao dịch mới vào đợt này?`
      )
    ) {
      return;
    }
    try {
      await financeService.reopenBatch(batch.id);
      setSelectedBatchId(batch.id);
      toast.success(`Đã mở lại "${batch.name}"`);
    } catch (err) {
      toast.error('Không thể mở lại đợt bán hàng');
    }
  };

  const handleMergeUnassignedToActive = async () => {
    if (!activeBatch || unassignedTransactions.length === 0) return;
    try {
      await financeService.assignTransactionsToBatch(
        unassignedTransactions.map((t) => t.id),
        activeBatch.id
      );
      setSelectedBatchId(activeBatch.id);
      toast.success(
        `Đã gộp ${unassignedTransactions.length} giao dịch vào "${activeBatch.name}"`
      );
    } catch (err) {
      toast.error('Không thể gộp giao dịch');
    }
  };

  const addTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.amount || !form.description.trim()) {
      toast.error('Vui lòng điền đầy đủ số tiền và mô tả');
      return;
    }
    setSaving(true);
    try {
      // Determine target batch: if viewing a specific open/closed batch (except all_batches/unassigned), allow recording into activeBatch or selectedBatch
      const targetBatchId =
        selectedBatchId &&
        selectedBatchId !== 'all_batches' &&
        selectedBatchId !== 'unassigned'
          ? selectedBatchId
          : activeBatch?.id || null;

      await financeService.addTransaction({
        ...form,
        batchId: targetBatchId,
        createdBy: user!.uid,
      });
      setForm({ type: 'expense', category: 'server_cost', amount: 0, description: '' });
      setShowForm(false);
      toast.success('Thêm giao dịch thành công');
    } catch (err) {
      toast.error('Có lỗi xảy ra');
    } finally {
      setSaving(false);
    }
  };

  const deleteTransaction = async (id: string) => {
    if (window.confirm('Xóa giao dịch này?')) {
      await financeService.deleteTransaction(id);
      toast.success('Đã xóa giao dịch');
    }
  };

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Sales Batch Management Panel */}
      <div className="bg-card rounded-xl border border-border p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <FolderKanban className="w-5 h-5 text-primary" />
              <h3 className="text-base font-semibold text-foreground">
                Quản lý Đợt bán hàng
              </h3>
              {activeBatch ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                  Đang mở: {activeBatch.name}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning border border-warning/20">
                  Chưa có đợt đang mở (Đã chốt sổ)
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Dữ liệu trước 01/11/2026 đã được gom vào <strong>Đợt trước Tháng 11/2026</strong>. Bạn có thể tạo đợt bán hàng mới và bấm kết thúc khi bán xong để chốt sổ từng đợt độc lập.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {activeBatch && (
              <button
                type="button"
                onClick={() => setConfirmCloseBatch(activeBatch)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-destructive/10 text-destructive hover:bg-destructive/15 border border-destructive/20 transition-colors"
              >
                <Lock className="w-3.5 h-3.5" />
                Kết thúc đợt hiện tại
              </button>
            )}
            <button
              type="button"
              onClick={handleOpenCreateBatch}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Tạo đợt bán hàng mới
            </button>
          </div>
        </div>

        {/* Batch Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {batches.map((b) => {
            const sum = batchSummaries[b.id] || {
              income: 0,
              expense: 0,
              net: 0,
              count: 0,
            };
            const isSelected = selectedBatchId === b.id;
            const isActive = b.status === 'active';

            return (
              <div
                key={b.id}
                onClick={() => setSelectedBatchId(b.id)}
                className={`cursor-pointer rounded-lg border p-3.5 transition-all flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                    : 'border-border bg-background hover:bg-muted/40'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-semibold text-foreground line-clamp-1">
                      {b.name}
                    </span>
                    {isActive ? (
                      <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold bg-success/10 text-success">
                        Đang mở
                      </span>
                    ) : (
                      <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground">
                        Đã kết thúc
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {b.id === PRE_NOV_BATCH_ID
                        ? 'Trước 01/11/2026'
                        : `${formatDateTime(b.startedAt)} → ${formatDateTime(b.endedAt)}`}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-muted-foreground">Lợi nhuận: </span>
                    <span
                      className={`font-semibold font-mono ${
                        sum.net >= 0 ? 'text-success' : 'text-destructive'
                      }`}
                    >
                      {formatPrice(sum.net)}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    {sum.count} GD
                  </span>
                </div>
              </div>
            );
          })}

          {/* Unassigned Post-Nov Transactions Card (if any) */}
          {unassignedTransactions.length > 0 && (
            <div
              onClick={() => setSelectedBatchId('unassigned')}
              className={`cursor-pointer rounded-lg border p-3.5 transition-all flex flex-col justify-between gap-2 ${
                selectedBatchId === 'unassigned'
                  ? 'border-warning bg-warning/5 ring-1 ring-warning'
                  : 'border-warning/40 bg-warning/5 hover:bg-warning/10'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    Chưa phân đợt (Từ T11)
                  </span>
                  <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold bg-warning/20 text-warning">
                    Chờ gộp
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Các giao dịch phát sinh khi chưa mở đợt mới
                </p>
              </div>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-medium text-warning">
                  {unassignedTransactions.length} giao dịch
                </span>
                {activeBatch && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMergeUnassignedToActive();
                    }}
                    className="text-[11px] font-semibold text-primary hover:underline"
                  >
                    + Gộp vào đợt đang mở
                  </button>
                )}
              </div>
            </div>
          )}

          {/* All Batches Card */}
          <div
            onClick={() => setSelectedBatchId('all_batches')}
            className={`cursor-pointer rounded-lg border p-3.5 transition-all flex flex-col justify-between gap-2 ${
              selectedBatchId === 'all_batches'
                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                : 'border-border bg-background hover:bg-muted/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Tất cả các đợt
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground">
                  Tổng hợp
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Xem toàn bộ lịch sử từ trước đến nay
              </p>
            </div>
            <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Tổng số:</span>
              <span className="font-semibold text-foreground">
                {transactions.length} GD
              </span>
            </div>
          </div>
        </div>

        {/* Selected Batch Info Bar */}
        {currentBatch && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs text-muted-foreground bg-muted/30 px-3.5 py-2.5 rounded-lg border border-border/60">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-foreground">
                Đang xem: {currentBatch.name}
              </span>
              {currentBatch.description && (
                <span>• {currentBatch.description}</span>
              )}
            </div>
            {currentBatch.status === 'closed' &&
              currentBatch.id !== PRE_NOV_BATCH_ID && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleReopenBatch(currentBatch)}
                    className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Mở lại đợt này
                  </button>
                </div>
              )}
          </div>
        )}
      </div>

      {/* Sub-filter by time within selected batch + Add Transaction */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {(['all', 'today', 'week', 'month'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setTimePeriod(p)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                timePeriod === p
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {p === 'all'
                ? 'Toàn bộ đợt đang chọn'
                : p === 'today'
                  ? 'Hôm nay'
                  : p === 'week'
                    ? 'Tuần này'
                    : 'Tháng này'}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
        >
          <Plus className="w-4 h-4" /> Thêm Giao dịch
        </button>
      </div>

      {/* Add Transaction Form */}
      {showForm && (
        <div className="bg-card rounded-xl p-5 border border-border space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Ghi nhận Giao dịch mới</h3>
            <span className="text-xs text-muted-foreground">
              Ghi vào:{' '}
              <strong className="text-foreground">
                {currentBatch?.name || activeBatch?.name || 'Chưa phân đợt'}
              </strong>
            </span>
          </div>
          <form
            onSubmit={addTransaction}
            className="flex flex-col md:flex-row gap-4 items-end"
          >
            <div className="flex-1 w-full">
              <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Loại
              </label>
              <select
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value as TransactionType })
                }
                className="w-full p-2.5 rounded-lg border border-input bg-background text-sm font-medium"
              >
                <option value="expense">Chi tiêu</option>
                <option value="income">Thu nhập</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Hạng mục
              </label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full p-2.5 rounded-lg border border-input bg-background text-sm font-medium"
              >
                {form.type === 'expense' ? (
                  <>
                    <option value="server_cost">Chi phí Máy chủ/Domain</option>
                    <option value="marketing">Marketing/Quảng cáo</option>
                    <option value="salary">Lương thưởng</option>
                    <option value="other_expense">Khác</option>
                  </>
                ) : (
                  <>
                    <option value="course_revenue">Doanh thu Khóa học</option>
                    <option value="other_income">Khác</option>
                  </>
                )}
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Số tiền (VNĐ)
              </label>
              <input
                type="number"
                min={0}
                value={form.amount}
                onChange={(e) =>
                  setForm({ ...form, amount: Number(e.target.value) })
                }
                className="w-full p-2.5 rounded-lg border border-input bg-background text-sm font-medium font-mono"
                placeholder="0"
              />
            </div>
            <div className="flex-[2] w-full">
              <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                Mô tả chi tiết
              </label>
              <input
                type="text"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full p-2.5 rounded-lg border border-input bg-background text-sm font-medium"
                placeholder="Ghi chú về giao dịch..."
              />
            </div>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
              {saving ? '...' : 'Lưu'}
            </button>
          </form>
        </div>
      )}

      {/* KPI Summary Cards for Selected Batch */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-success/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Tổng thu ({currentBatch ? currentBatch.name : 'Đang chọn'})
            </span>
          </div>
          <p className="text-2xl font-semibold text-success">
            {formatPrice(totalIncome)}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <TrendingDown className="h-5 w-5 text-destructive" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Tổng chi ({currentBatch ? currentBatch.name : 'Đang chọn'})
            </span>
          </div>
          <p className="text-2xl font-semibold text-destructive">
            {formatPrice(totalExpense)}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Wallet className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Lợi nhuận ròng
            </span>
          </div>
          <p
            className={`text-2xl font-semibold ${
              totalIncome - totalExpense >= 0 ? 'text-primary' : 'text-destructive'
            }`}
          >
            {formatPrice(totalIncome - totalExpense)}
          </p>
        </div>
      </div>

      {/* Chart + Transaction List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 flex flex-col">
          <h3 className="text-base font-semibold mb-4">
            Biểu đồ Doanh thu — {currentBatch ? currentBatch.name : 'Tất cả'}
          </h3>
          <div className="h-[300px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000000}M`}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: '1px solid hsl(var(--border))',
                    backgroundColor: 'hsl(var(--card))',
                  }}
                  formatter={(value: number) => [formatPrice(value), 'Doanh thu']}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card flex flex-col max-h-[400px]">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="text-base font-semibold">
              Giao dịch ({listFiltered.length})
            </h3>
            <div className="flex gap-1 bg-muted p-1 rounded-lg">
              {(['all', 'income', 'expense'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    filterType === t
                      ? 'bg-background text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {t === 'all' ? 'Tất cả' : t === 'income' ? 'Thu' : 'Chi'}
                </button>
              ))}
            </div>
          </div>
          <div className="p-2 overflow-y-auto flex-1 space-y-1">
            {listFiltered.length === 0 ? (
              <div className="p-6 text-center text-sm text-muted-foreground">
                Chưa có giao dịch nào trong đợt này.
              </div>
            ) : (
              listFiltered.map((t) => {
                const d = new Date(getTransactionDateMs(t));
                return (
                  <div
                    key={t.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="min-w-0 pr-2">
                      <p className="text-sm font-medium text-foreground truncate">
                        {t.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {d.toLocaleDateString('vi-VN')} • {t.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`font-semibold font-mono text-sm ${
                          t.type === 'income' ? 'text-success' : 'text-destructive'
                        }`}
                      >
                        {t.type === 'income' ? '+' : '-'}
                        {formatPrice(t.amount)}
                      </span>
                      <button
                        onClick={() => deleteTransaction(t.id)}
                        className="p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive rounded-md opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Modal: Create New Sales Batch */}
      {showCreateBatchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-semibold text-foreground">
                Tạo Đợt Bán Hàng Mới
              </h3>
              <button
                type="button"
                onClick={() => setShowCreateBatchModal(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateBatch} className="space-y-4">
              {activeBatch && (
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-warning/10 border border-warning/20 text-xs text-foreground">
                  <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                  <span>
                    Đợt đang mở <strong>"{activeBatch.name}"</strong> sẽ tự động được chốt sổ và chuyển sang trạng thái <strong>Đã kết thúc</strong> khi bạn mở đợt mới.
                  </span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5">
                  Tên đợt bán hàng *
                </label>
                <input
                  type="text"
                  required
                  value={newBatchName}
                  onChange={(e) => setNewBatchName(e.target.value)}
                  placeholder="VD: Đợt 1 - Tháng 11/2026"
                  className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5">
                  Ghi chú / Mô tả (tùy chọn)
                </label>
                <input
                  type="text"
                  value={newBatchDesc}
                  onChange={(e) => setNewBatchDesc(e.target.value)}
                  placeholder="VD: Mở bán khóa luyện đề học kỳ 1..."
                  className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                />
              </div>

              {unassignedTransactions.length > 0 && (
                <label className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-muted/30 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeUnassigned}
                    onChange={(e) => setIncludeUnassigned(e.target.checked)}
                    className="mt-0.5 rounded border-input text-primary"
                  />
                  <span>
                    Gộp luôn <strong>{unassignedTransactions.length} giao dịch</strong> phát sinh từ 01/11 chưa phân đợt vào đợt mới này
                  </span>
                </label>
              )}

              <div className="flex justify-end gap-2 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setShowCreateBatchModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:bg-muted"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={batchSaving}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  {batchSaving ? 'Đang tạo...' : 'Bắt đầu đợt bán hàng'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Confirm Close Active Batch */}
      {confirmCloseBatch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="text-base font-semibold text-foreground">
                Kết thúc & Chốt sổ Đợt bán hàng
              </h3>
              <button
                type="button"
                onClick={() => setConfirmCloseBatch(null)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground">
              Bạn có chắc chắn muốn kết thúc đợt{' '}
              <strong className="text-foreground">"{confirmCloseBatch.name}"</strong>?
            </p>

            {(() => {
              const s = batchSummaries[confirmCloseBatch.id] || {
                income: 0,
                expense: 0,
                net: 0,
                count: 0,
              };
              return (
                <div className="rounded-lg border border-border bg-muted/30 p-3.5 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Số giao dịch:</span>
                    <span className="font-semibold">{s.count} giao dịch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tổng thu:</span>
                    <span className="font-semibold text-success">
                      {formatPrice(s.income)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tổng chi:</span>
                    <span className="font-semibold text-destructive">
                      {formatPrice(s.expense)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-semibold">Lợi nhuận chốt sổ:</span>
                    <span className="font-semibold text-primary">
                      {formatPrice(s.net)}
                    </span>
                  </div>
                </div>
              );
            })()}

            <div className="flex justify-end gap-2 pt-2 border-t border-border">
              <button
                type="button"
                onClick={() => setConfirmCloseBatch(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:bg-muted"
              >
                Hủy
              </button>
              <button
                type="button"
                disabled={batchSaving}
                onClick={handleCloseBatch}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:opacity-50"
              >
                {batchSaving ? 'Đang xử lý...' : 'Xác nhận kết thúc đợt'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
