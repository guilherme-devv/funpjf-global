import React from 'react';
import AdminDashboard from './sections/AdminDashboard';
import AdminHero from './sections/AdminHero';
import AdminNews from './sections/AdminNews';
import AdminInformativos from './sections/AdminInformativos';
import AdminTransparencia from './sections/AdminTransparencia';
import AdminCRPs from './sections/AdminCRPs';
import AdminContabilidade from './sections/AdminContabilidade';
import AdminInvestimentos from './sections/AdminInvestimentos';
import AdminCertificacoes from './sections/AdminCertificacoes';
import AdminConfiguracoes from './sections/AdminConfiguracoes';

interface AdminContentProps {
  activeSection: string;
}

const AdminContent: React.FC<AdminContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'hero':
        return <AdminHero />;
      case 'news':
        return <AdminNews />;
      case 'informativos':
        return <AdminInformativos />;
      case 'transparencia':
        return <AdminTransparencia />;
      case 'crps':
        return <AdminCRPs />;
      case 'contabilidade':
        return <AdminContabilidade />;
      case 'investimentos':
        return <AdminInvestimentos />;
      case 'certificacoes':
        return <AdminCertificacoes />;
      case 'configuracoes':
        return <AdminConfiguracoes />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <main className="admin-content">
      {renderContent()}
    </main>
  );
};

export default AdminContent;