import React, { useState } from 'react';
import AdminHeader from '../components/Admin/AdminHeader';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminContent from '../components/Admin/AdminContent';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="admin-container">
      <AdminHeader />
      <div className="admin-layout">
        <AdminSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <AdminContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Admin;