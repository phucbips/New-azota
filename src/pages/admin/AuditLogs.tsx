import React, { useEffect, useState } from 'react';
import { auditService, AuditLog } from '../../services/audit.service';
import { DataTable } from '../../components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { PageHeader } from '../../components/ui/PageHeader';
import { ShieldAlert, User, FileText } from 'lucide-react';

export const AuditLogs: React.FC = () => {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auditService.subscribeToLogs((data) => {
      setLogs(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const columns: ColumnDef<AuditLog>[] = [
    {
      accessorKey: 'action',
      header: 'Hành động',
      cell: ({ row }) => (
        <span className="font-medium text-foreground uppercase text-xs tracking-wider bg-muted px-2 py-1 rounded">
          {row.original.action.replace('_', ' ')}
        </span>
      )
    },
    {
      accessorKey: 'target',
      header: 'Đối tượng',
      cell: ({ row }) => <span className="text-foreground">{row.original.target}</span>
    },
    {
      accessorKey: 'performedByEmail',
      header: 'Thực hiện bởi',
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
            <div className="p-1 bg-primary/10 rounded-full">
                <User className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{row.original.performedByEmail}</span>
        </div>
      )
    },
    {
        accessorKey: 'details',
        header: 'Chi tiết',
        cell: ({ row }) => (
            <span className="text-xs text-muted-foreground font-mono truncate max-w-[200px] block" title={JSON.stringify(row.original.details)}>
                {JSON.stringify(row.original.details)}
            </span>
        )
    },
    {
      accessorKey: 'createdAt',
      header: 'Thời gian',
      cell: ({ row }) => {
          const date = row.original.createdAt?.toDate();
          return (
            <span className="text-sm text-muted-foreground">
                {date ? format(date, 'dd/MM/yyyy HH:mm:ss', { locale: vi }) : '...'}
            </span>
          );
      }
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Nhật ký hoạt động"
        description="Theo dõi các hành động quan trọng của quản trị viên."
      />

      <DataTable
        columns={columns}
        data={logs}
        isLoading={loading}
        searchColumn="target"
        searchPlaceholder="Tìm kiếm theo đối tượng..."
      />
    </div>
  );
};
