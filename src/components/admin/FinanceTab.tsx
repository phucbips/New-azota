import React, { useState, useMemo, useEffect } from 'react';
import { TrendingUp, TrendingDown, Wallet, Plus, Trash2, Loader2, Filter } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { financeService, FinancialTransaction, TransactionType } from '../../services/finance.service';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';

export const FinanceTab: React.FC = () => {
  const { user } = useAuth();
  const [timePeriod, setTimePeriod] = useState<"today" | "week" | "month" | "all">("all");
  const [transactions, setTransactions] = useState<FinancialTransaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<{type: TransactionType, category: string, amount: number, description: string}>({
      type: 'expense', category: 'server_cost', amount: 0, description: ''
  });
  const [saving, setSaving] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "income" | "expense">("all");

  useEffect(() => {
      const unsub = financeService.subscribeToTransactions((data) => {
          setTransactions(data);
          setLoading(false);
      });
      return () => unsub();
  }, []);

  const addTransaction = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.amount || !form.description.trim()) {
          toast.error("Vui lòng điền đầy đủ số tiền và mô tả");
          return;
      }
      setSaving(true);
      try {
          await financeService.addTransaction({
              ...form,
              createdBy: user!.uid
          });
          setForm({ type: 'expense', category: 'server_cost', amount: 0, description: '' });
          setShowForm(false);
          toast.success("Thêm giao dịch thành công");
      } catch (err) {
          toast.error("Có lỗi xảy ra");
      } finally {
          setSaving(false);
      }
  };

  const deleteTransaction = async (id: string) => {
      if (confirm("Xóa giao dịch này?")) {
          await financeService.deleteTransaction(id);
          toast.success("Đã xóa giao dịch");
      }
  };

  const timeFiltered = useMemo(() => {
    if (timePeriod === "all") return transactions;
    const now = new Date();
    const start = new Date();
    if (timePeriod === "today") {
      start.setHours(0, 0, 0, 0);
    } else if (timePeriod === "week") {
      start.setDate(now.getDate() - now.getDay());
      start.setHours(0, 0, 0, 0);
    } else if (timePeriod === "month") {
      start.setDate(1);
      start.setHours(0, 0, 0, 0);
    }
    return transactions.filter((t) => {
        const d = t.createdAt?.toDate ? t.createdAt.toDate() : new Date();
        return d >= start;
    });
  }, [transactions, timePeriod]);

  const totalIncome = timeFiltered.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpense = timeFiltered.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);

  // Format to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const chartData = useMemo(() => {
    const map: Record<string, number> = {};
    timeFiltered.filter((t) => t.type === "income").forEach((t) => {
      const d = t.createdAt?.toDate ? t.createdAt.toDate() : new Date();
      const day = d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" });
      map[day] = (map[day] || 0) + t.amount;
    });
    // Sort by date naive
    return Object.entries(map).reverse().map(([date, revenue]) => ({ date, revenue }));
  }, [timeFiltered]);

  const listFiltered = filterType === 'all' ? timeFiltered : timeFiltered.filter(t => t.type === filterType);

  if (loading) {
      return <div className="h-64 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">

      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex gap-2">
            {["today", "week", "month", "all"].map((p) => (
            <button
                key={p}
                onClick={() => setTimePeriod(p as any)}
                className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${
                timePeriod === p
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
                {p === "today" ? "Hôm nay" : p === "week" ? "Tuần này" : p === "month" ? "Tháng này" : "Tất cả"}
            </button>
            ))}
        </div>
        <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
        >
            <Plus className="w-4 h-4" /> Thêm Giao dịch
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
          <div className="bg-card rounded-2xl p-6 border border-border shadow-md animate-in fade-in slide-in-from-top-4">
              <h3 className="font-display text-xl font-bold mb-4">Ghi nhận Giao dịch mới</h3>
              <form onSubmit={addTransaction} className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1 w-full">
                      <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">Loại</label>
                      <select
                          value={form.type}
                          onChange={e => setForm({...form, type: e.target.value as TransactionType})}
                          className="w-full p-2.5 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 font-medium"
                      >
                          <option value="expense">Chi tiêu</option>
                          <option value="income">Thu nhập</option>
                      </select>
                  </div>
                  <div className="flex-1 w-full">
                      <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">Hạng mục</label>
                      <select
                          value={form.category}
                          onChange={e => setForm({...form, category: e.target.value})}
                          className="w-full p-2.5 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 font-medium"
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
                      <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">Số tiền (VNĐ)</label>
                      <input
                          type="number"
                          min={0}
                          value={form.amount}
                          onChange={e => setForm({...form, amount: Number(e.target.value)})}
                          className="w-full p-2.5 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 font-medium font-mono"
                          placeholder="0"
                      />
                  </div>
                  <div className="flex-[2] w-full">
                      <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">Mô tả chi tiết</label>
                      <input
                          type="text"
                          value={form.description}
                          onChange={e => setForm({...form, description: e.target.value})}
                          className="w-full p-2.5 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 font-medium"
                          placeholder="Ghi chú về giao dịch..."
                      />
                  </div>
                  <button
                      type="submit"
                      disabled={saving}
                      className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-sm hover:shadow-md transition-all disabled:opacity-50"
                  >
                      {saving ? '...' : 'Lưu'}
                  </button>
              </form>
          </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
               <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tổng thu</span>
          </div>
          <p className="font-display text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{formatPrice(totalIncome)}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-red-500/10 rounded-xl">
              <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Tổng chi</span>
          </div>
          <p className="font-display text-3xl font-extrabold text-red-600 dark:text-red-400">{formatPrice(totalExpense)}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Lợi nhuận ròng</span>
          </div>
          <p className={`font-display text-3xl font-extrabold ${totalIncome - totalExpense >= 0 ? "text-primary" : "text-destructive"}`}>
            {formatPrice(totalIncome - totalExpense)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col">
            <h3 className="font-display text-xl font-bold mb-6">Biểu đồ Doanh thu</h3>
            <div className="h-[300px] w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
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
                    contentStyle={{ borderRadius: '12px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))' }}
                    formatter={(value: number) => [formatPrice(value), "Doanh thu"]}
                />
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-sm flex flex-col max-h-[400px]">
            <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">Lịch sử Giao dịch</h3>
                <div className="flex gap-1 bg-muted p-1 rounded-lg">
                    {['all', 'income', 'expense'].map(t => (
                        <button
                            key={t}
                            onClick={() => setFilterType(t as any)}
                            className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${filterType === t ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'}`}
                        >
                            {t === 'all' ? 'Tất cả' : t === 'income' ? 'Thu' : 'Chi'}
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-2 overflow-y-auto flex-1 space-y-1">
                {listFiltered.length === 0 ? (
                    <div className="p-4 text-center text-sm text-muted-foreground">Không có dữ liệu.</div>
                ) : (
                    listFiltered.map(t => (
                        <div key={t.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors group">
                            <div>
                                <p className="text-sm font-bold text-foreground truncate max-w-[150px]">{t.description}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    {t.createdAt?.toDate ? t.createdAt.toDate().toLocaleDateString('vi-VN') : ''} • {t.category}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`font-bold font-mono text-sm ${t.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                                    {t.type === 'income' ? '+' : '-'}{formatPrice(t.amount)}
                                </span>
                                <button onClick={() => deleteTransaction(t.id)} className="p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
      </div>

    </div>
  );
};
