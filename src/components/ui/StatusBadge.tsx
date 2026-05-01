import React from 'react';
import { Badge } from './badge';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  switch (status) {
    case 'active':
    case 'published':
    case 'paid':
      return <Badge variant="success">Active</Badge>;
    case 'pending':
      return <Badge variant="warning">Pending</Badge>;
    case 'inactive':
    case 'cancelled':
    case 'rejected':
      return <Badge variant="error">Inactive</Badge>;
    default:
      return <Badge variant="default">{status}</Badge>;
  }
};
