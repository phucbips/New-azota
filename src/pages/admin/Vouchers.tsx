import React from 'react';
import { VoucherManagement } from '../../components/admin/VoucherManagement';
import { PageHeader } from '../../components/ui/PageHeader';

export const AdminVouchers: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <PageHeader
        title="Quản lý Voucher"
        subtitle="Tạo, sửa và quản lý các mã giảm giá cho khóa học."
      />

      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden p-6">
          <VoucherManagement />
      </div>
    </div>
  );
};
export default AdminVouchers;
