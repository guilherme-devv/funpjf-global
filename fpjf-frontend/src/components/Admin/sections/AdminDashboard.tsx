import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Dashboard</h2>
      
      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Notícias Publicadas</h3>
          <span className="admin-stat-number">12</span>
        </div>
        <div className="admin-stat-card">
          <h3>Informativos</h3>
          <span className="admin-stat-number">8</span>
        </div>
        <div className="admin-stat-card">
          <h3>PDFs Disponíveis</h3>
          <span className="admin-stat-number">45</span>
        </div>
        <div className="admin-stat-card">
          <h3>Acessos este Mês</h3>
          <span className="admin-stat-number">1,234</span>
        </div>
      </div>

      <div className="admin-recent">
        <h3>Atividades Recentes</h3>
        <ul className="admin-activity-list">
          <li>Nova notícia adicionada: "Sistema de Atendimento Digital"</li>
          <li>Informativo de Janeiro 2024 publicado</li>
          <li>PDF de Transparência atualizado</li>
          <li>Certificação ISO renovada</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;