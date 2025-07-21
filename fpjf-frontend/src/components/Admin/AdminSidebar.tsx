import React from 'react';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'hero', label: 'Seção Principal', icon: '🏠' },
    { id: 'news', label: 'Notícias', icon: '📰' },
    { id: 'informativos', label: 'Informativos', icon: '📄' },
    { id: 'transparencia', label: 'Transparência', icon: '🔍' },
    { id: 'crps', label: 'CRPs', icon: '📋' },
    { id: 'contabilidade', label: 'Contabilidade', icon: '💰' },
    { id: 'investimentos', label: 'Investimentos', icon: '📈' },
    { id: 'certificacoes', label: 'Certificações', icon: '🏆' },
    { id: 'configuracoes', label: 'Configurações', icon: '⚙️' }
  ];

  return (
    <aside className="admin-sidebar">
      <nav className="admin-nav">
        <ul className="admin-nav-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`admin-nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onSectionChange(item.id)}
              >
                <span className="admin-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;