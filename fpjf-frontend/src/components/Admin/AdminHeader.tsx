import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';

const AdminHeader = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <h1>Painel Administrativo - FUNPJF</h1>
        <div className="admin-header-actions">
          <span>Bem-vindo, Administrador</span>
          <Button variant="outline" onClick={handleLogout}>
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;