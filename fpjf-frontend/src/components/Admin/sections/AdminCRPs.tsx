import React, { useState } from 'react';

const AdminCRPs = () => {
  const [crpsList, setCrpsList] = useState([
    {
      id: 1,
      title: "CRP Janeiro 2024",
      date: "2024-01-31",
      file: null
    },
    {
      id: 2,
      title: "CRP Dezembro 2023",
      date: "2023-12-31",
      file: null
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingCRP, setEditingCRP] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    file: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        file: file
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCRP) {
      setCrpsList(prev => prev.map(crp => 
        crp.id === editingCRP.id ? { 
          ...crp, 
          title: formData.title,
          date: formData.date,
          file: formData.file
        } : crp
      ));
    } else {
      const newCRP = {
        id: Date.now(),
        title: formData.title,
        date: formData.date,
        file: formData.file
      };
      setCrpsList(prev => [...prev, newCRP]);
    }
    setFormData({ title: '', date: '', file: null });
    setShowForm(false);
    setEditingCRP(null);
  };

  const handleEdit = (crp: any) => {
    setEditingCRP(crp);
    setFormData({
      title: crp.title,
      date: crp.date,
      file: crp.file
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setCrpsList(prev => prev.filter(crp => crp.id !== id));
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Gerenciar CRPs</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Novo CRP
        </button>
      </div>

      {showForm && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingCRP ? 'Editar CRP' : 'Novo CRP'}</h3>
              <button 
                className="admin-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingCRP(null);
                  setFormData({ title: '', date: '', file: null });
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label htmlFor="crp-title">Título</label>
                <input
                  type="text"
                  id="crp-title"
                  className="admin-input"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="crp-date">Data</label>
                <input
                  type="date"
                  id="crp-date"
                  className="admin-input"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="crp-file">Arquivo PDF</label>
                <input
                  type="file"
                  id="crp-file"
                  className="admin-file-input"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  required={!editingCRP}
                />
                {formData.file && (
                  <div className="admin-file-info">
                    <span>📄 {formData.file.name}</span>
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingCRP ? 'Atualizar' : 'Publicar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingCRP(null);
                    setFormData({ title: '', date: '', file: null });
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data</th>
              <th>Arquivo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {crpsList.map(crp => (
              <tr key={crp.id}>
                <td>{crp.title}</td>
                <td>{new Date(crp.date).toLocaleDateString('pt-BR')}</td>
                <td>
                  {crp.file ? (
                    <span className="admin-file-link">
                      📄 {crp.file.name || 'PDF'}
                    </span>
                  ) : (
                    <span>Nenhum arquivo</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEdit(crp)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(crp.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCRPs;