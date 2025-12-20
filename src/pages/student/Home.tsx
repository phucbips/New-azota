import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { BookOpen, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudentHome: React.FC = () => {
  const { user } = useAuth();

  return (
    // Viewport Fix: min-h-dvh and Padding Bottom
    <div className="w-full min-h-dvh pb-24">
      <PageHeader
        title={`Welcome back, ${user?.displayName?.split(' ')[0] || 'Student'}!`}
        description="Here is an overview of your learning progress."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <StatCard
          title="Grade Level"
          value={`Grade ${user?.grade || '--'}`}
          icon={<GraduationCap className="w-6 h-6 text-blue-600" />}
          trend="Current"
        />

        {/* Interaction Fix: Overlay Link Pattern */}
        <div className="md:col-span-2 relative group transform transition-all duration-200 active:scale-95 shadow-xl rounded-xl">
            {/* The Click Target - Absolute Overlay */}
            <Link
                to="/student/assignments"
                className="absolute inset-0 z-30 w-full h-full cursor-pointer"
                aria-label="Go to Assignments"
            />

            {/* Visual Content (Layout) */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white relative overflow-hidden h-full flex flex-col justify-center z-10 pointer-events-none">
                <div className="relative z-20">
                    <h3 className="text-xl font-bold mb-2">Ready to start learning?</h3>
                    <p className="text-blue-100 mb-6 max-w-lg">
                        Check your assignments list to see pending tasks and coursework for Grade {user?.grade}.
                    </p>
                    {/* Visual Button */}
                    <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-2.5 rounded-lg font-bold text-sm group-hover:bg-blue-50 transition-colors">
                        <BookOpen className="w-4 h-4" />
                        Go to Assignments
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 z-0">
                    <GraduationCap className="w-64 h-64" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
