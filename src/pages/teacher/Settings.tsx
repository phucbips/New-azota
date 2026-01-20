import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { SettingsContent } from '../../components/shared/SettingsContent';
import { useTranslation } from 'react-i18next';

export const TeacherSettings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={t('sidebar.settings')}
        subtitle="Manage your teaching preferences."
      />
      <SettingsContent />
    </div>
  );
};
