import React, { useState } from 'react';

const AdminInformativos = () => {
  const [informativosList, setInformativosList] = useState([
    {
      id: 1,
      title: "Informativo Janeiro 2024",
      date: "Janeiro 2024",
      downloadUrl: "#",
      file: null
    },
    {
      id: 2,
      title: "Informativo Dezembro 2023",
      date: "Dezembro 2023",
      downloadUrl: "#",
      file: null
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingInformativo, setEditingInformativo] = useState<any>(null);

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
    if (editingInformativo) {
      setInformativosList(prev => prev.map(informativo => 
        informativo.id === editingInformativo.id ? { 
          ...informativo, 
          title: formData.title,
          date: formData.date,
          file: formData.file
        } : informativo
      ));
    } else {
      const newInformativo = {
        id: Date.now(),
        title: formData.title,
        date: formData.date,
        downloadUrl: formData.file ? URL.createObjectURL(formData.file) : "#",
        file: formData.file
      };
      setInformativosList(prev => [...prev, newInformativo]);
    }
    setFormData({ title: '', date: '', file: null });
    setShowForm(false);
    setEditingInformativo(null);
  };

  const handleEdit = (informativo: any) => {
    setEditingInformativo(informativo);
    setFormData({
      title: informativo.title,
      date: informativo.date,
      file: informativo.file
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setInformativosList(prev => prev.filter(informativo => informativo.id !== id));
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Gerenciar Informativos</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Novo Informativo
        </button>
      </div>

      {showForm && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingInformativo ? 'Editar Informativo' : 'Novo Informativo'}</h3>
              <button 
                className="admin-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingInformativo(null);
                  setFormData({ title: '', date: '', file: null });
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label htmlFor="informativo-title">Título</label>
                <input
                  type="text"
                  id="informativo-title"
                  className="admin-input"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="informativo-date">Período</label>
                <input
                  type="text"
                  id="informativo-date"
                  className="admin-input"
                  placeholder="Ex: Janeiro 2024"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="informativo-file">Arquivo PDF</label>
                <input
                  type="file"
                  id="informativo-file"
                  className="admin-file-input"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  required={!editingInformativo}
                />
                {formData.file && (
                  <div className="admin-file-info">
                    <span>📄 {formData.file.name}</span>
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingInformativo ? 'Atualizar' : 'Publicar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingInformativo(null);
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
              <th>Período</th>
              <th>Arquivo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {informativosList.map(informativo => (
              <tr key={informativo.id}>
                <td>{informativo.title}</td>
                <td>{informativo.date}</td>
                <td>
                  {informativo.file ? (
                    <a href={informativo.downloadUrl} download className="admin-file-link">
                      📄 {informativo.file.name || 'PDF'}
                    </a>
                  ) : (
                    <span>Nenhum arquivo</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEdit(informativo)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(informativo.id)}
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

export default AdminInformativos;