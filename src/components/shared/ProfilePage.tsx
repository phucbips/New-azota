import React from 'react';
import { BadgeCheck, Mail, Shield, UserCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="relative">
          <img
            src={user?.photoURL}
            alt={user?.displayName || 'Profile'}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md bg-slate-100"
          />
          {user?.isWhitelisted && (
            <span className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1.5 shadow">
              <BadgeCheck className="w-4 h-4" />
            </span>
          )}
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900">{user?.displayName || 'User'}</h2>
          <p className="text-slate-500 mt-1">{user?.email}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
              <Shield className="w-4 h-4" />
              {user?.role || 'student'}
            </span>
            {user?.grade && (
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                <UserCircle className="w-4 h-4" />
                Grade {user.grade}
              </span>
            )}
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
              <BadgeCheck className="w-4 h-4" />
              {user?.isWhitelisted ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Mail className="w-4 h-4 text-blue-600" />
            Email
          </div>
          <p className="text-sm text-slate-600 mt-2">{user?.email}</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Shield className="w-4 h-4 text-blue-600" />
            Account Status
          </div>
          <p className="text-sm text-slate-600 mt-2">
            {user?.isWhitelisted
              ? 'Tài khoản đã được kích hoạt.'
              : 'Tài khoản đang chờ kích hoạt.'}
          </p>
        </div>
      </div>
    </div>
  );
};
