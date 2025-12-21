import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudentHome: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Welcome back, ${user?.displayName?.split(' ')[0] || 'Student'}!`}
        description="Here is an overview of your learning progress."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Grade Level"
          value={`Grade ${user?.grade || '--'}`}
          icon={<GraduationCap className="w-6 h-6 text-blue-600" />}
          trend="Current"
        />
        <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Ready to start learning?</h3>
                <p className="text-blue-100 mb-6 max-w-lg">
                    Check your assignments list to see pending tasks and coursework for Grade {user?.grade}.
                </p>
                <Link
                    to="/student/assignments"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors"
                >
                    <BookOpen className="w-4 h-4" />
                    Go to Assignments
                </Link>
            </div>
            {/* Decoration */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                <GraduationCap className="w-64 h-64" />
            </div>
        </div>
      </div>
    </div>
  );
};
