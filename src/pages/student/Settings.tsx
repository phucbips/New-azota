import React from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { SettingsContent } from '../../components/shared/SettingsContent';
import { useTranslation } from 'react-i18next';

export const StudentSettings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={t('sidebar.settings')}
        subtitle="Adjust your learning preferences."
      />
      <SettingsContent />
    </div>
  );
};
