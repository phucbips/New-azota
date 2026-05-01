import React, { useState, useEffect } from 'react';
import { Voucher, voucherService } from '../../services/voucher.service';
import { Trash2, Edit2, Plus, Percent, DollarSign, Calendar, Save, X } from 'lucide-react';
import { toast } from 'sonner';
import { Timestamp } from 'firebase/firestore';

export const VoucherManagement: React.FC = () => {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingVoucher, setEditingVoucher] = useState<Partial<Voucher> | null>(null);

  useEffect(() => {
    loadVouchers();
  }, []);

  const loadVouchers = async () => {
    setLoading(true);
    try {
      const data = await voucherService.getVouchers();
      setVouchers(data.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis()));
    } catch (err) {
      toast.error('Failed to load vouchers');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingVoucher?.code || !editingVoucher?.value) {
      return toast.error("Vui lòng nhập mã và giá trị");
    }

    const payload = {
      code: editingVoucher.code,
      type: editingVoucher.type || 'percent',
      value: Number(editingVoucher.value),
      minOrderValue: Number(editingVoucher.minOrderValue) || 0,
      maxDiscount: Number(editingVoucher.maxDiscount) || 0,
      isActive: editingVoucher.isActive !== false,
      expiresAt: editingVoucher.expiresAt || null,
      usageLimit: Number(editingVoucher.usageLimit) || 0,
    };

    try {
      if (editingVoucher.id) {
        await voucherService.updateVoucher(editingVoucher.id, payload);
        toast.success("Cập nhật thành công");
      } else {
        await voucherService.createVoucher(payload);
        toast.success("Tạo thành công");
      }
      setEditingVoucher(null);
      loadVouchers();
    } catch (err) {
      toast.error("Đã xảy ra lỗi");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa voucher này?")) {
      try {
        await voucherService.deleteVoucher(id);
        toast.success("Đã xóa voucher");
        loadVouchers();
      } catch (err) {
        toast.error("Lỗi xóa voucher");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Quản lý Voucher</h2>
        <button
          onClick={() => setEditingVoucher({ type: 'percent', isActive: true })}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-[6px] font-bold hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" /> Tạo Voucher Mới
        </button>
      </div>

      {editingVoucher && (
        <div className="bg-surface border border-border p-6 rounded-[12px] shadow-sm mb-6 space-y-4">
          <h3 className="font-bold text-lg mb-4">{editingVoucher.id ? 'Sửa Voucher' : 'Tạo Voucher'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Mã Voucher</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-[6px] bg-background uppercase"
                value={editingVoucher.code || ''}
                onChange={e => setEditingVoucher({ ...editingVoucher, code: e.target.value })}
                placeholder="VD: GIAM10K"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Loại</label>
              <select
                className="w-full px-3 py-2 border border-border rounded-[6px] bg-background"
                value={editingVoucher.type || 'percent'}
                onChange={e => setEditingVoucher({ ...editingVoucher, type: e.target.value as 'percent' | 'fixed' })}
              >
                <option value="percent">Giảm theo %</option>
                <option value="fixed">Giảm số tiền cố định (VNĐ)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Giá trị ({editingVoucher.type === 'percent' ? '%' : 'VNĐ'})</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-border rounded-[6px] bg-background"
                value={editingVoucher.value || ''}
                onChange={e => setEditingVoucher({ ...editingVoucher, value: Number(e.target.value) })}
              />
            </div>
            {editingVoucher.type === 'percent' && (
              <div>
                <label className="block text-sm font-medium mb-1">Giảm tối đa (VNĐ)</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-border rounded-[6px] bg-background"
                  value={editingVoucher.maxDiscount || ''}
                  onChange={e => setEditingVoucher({ ...editingVoucher, maxDiscount: Number(e.target.value) })}
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-1">Đơn tối thiểu (VNĐ)</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-border rounded-[6px] bg-background"
                value={editingVoucher.minOrderValue || ''}
                onChange={e => setEditingVoucher({ ...editingVoucher, minOrderValue: Number(e.target.value) })}
              />
            </div>
             <div>
              <label className="block text-sm font-medium mb-1">Giới hạn số lần dùng</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-border rounded-[6px] bg-background"
                value={editingVoucher.usageLimit || ''}
                onChange={e => setEditingVoucher({ ...editingVoucher, usageLimit: Number(e.target.value) })}
                placeholder="0 = Không giới hạn"
              />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="isActive"
                checked={editingVoucher.isActive}
                onChange={e => setEditingVoucher({ ...editingVoucher, isActive: e.target.checked })}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="isActive" className="text-sm font-medium">Hoạt động</label>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button onClick={() => setEditingVoucher(null)} className="px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-[6px] font-medium">Hủy</button>
            <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-[6px] font-bold hover:bg-primary/90"><Save className="w-4 h-4"/> Lưu lại</button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center p-8"><span className="animate-spin text-primary">Cập nhật...</span></div>
      ) : (
        <div className="bg-surface border border-border rounded-[12px] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground text-sm border-b border-border">
                <th className="p-4 font-semibold">Mã</th>
                <th className="p-4 font-semibold">Loại / Giá trị</th>
                <th className="p-4 font-semibold">Đã dùng / Giới hạn</th>
                <th className="p-4 font-semibold">Trạng thái</th>
                <th className="p-4 font-semibold text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {vouchers.map(v => (
                <tr key={v.id} className="hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary font-mono font-bold rounded">{v.code}</span>
                  </td>
                  <td className="p-4 font-medium text-sm">
                    {v.type === 'percent' ? (
                        <span className="flex items-center gap-1 text-emerald-600"><Percent className="w-3.5 h-3.5"/> Giảm {v.value}%</span>
                    ) : (
                        <span className="flex items-center gap-1 text-emerald-600"><DollarSign className="w-3.5 h-3.5"/> Giảm {new Intl.NumberFormat('vi-VN').format(v.value)}đ</span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {v.usageCount} / {v.usageLimit ? v.usageLimit : '∞'}
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${v.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                      {v.isActive ? 'Đang bật' : 'Đã tắt'}
                    </span>
                  </td>
                  <td className="p-4 flex items-center justify-end gap-2">
                    <button onClick={() => setEditingVoucher(v)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-[6px] transition-colors"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(v.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-[6px] transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
              {vouchers.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">Chưa có mã giảm giá nào.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
