import React, { useState } from 'react';

const AdminTransparencia = () => {
  const [documentsList, setDocumentsList] = useState([
    {
      id: 1,
      title: "Demonstrativo de Receitas e Despesas 2023",
      category: "Relatórios Financeiros",
      date: "2023-12-31",
      file: null
    },
    {
      id: 2,
      title: "Balanço Patrimonial 2023",
      category: "Relatórios Financeiros",
      date: "2023-12-31",
      file: null
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingDocument, setEditingDocument] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    file: null as File | null
  });

  const categories = [
    'Relatórios Financeiros',
    'Atas de Reunião',
    'Licitações',
    'Contratos',
    'Lei de Acesso à Informação',
    'Outros'
  ];

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
    if (editingDocument) {
      setDocumentsList(prev => prev.map(doc => 
        doc.id === editingDocument.id ? { 
          ...doc, 
          title: formData.title,
          category: formData.category,
          date: formData.date,
          file: formData.file
        } : doc
      ));
    } else {
      const newDocument = {
        id: Date.now(),
        title: formData.title,
        category: formData.category,
        date: formData.date,
        file: formData.file
      };
      setDocumentsList(prev => [...prev, newDocument]);
    }
    setFormData({ title: '', category: '', date: '', file: null });
    setShowForm(false);
    setEditingDocument(null);
  };

  const handleEdit = (document: any) => {
    setEditingDocument(document);
    setFormData({
      title: document.title,
      category: document.category,
      date: document.date,
      file: document.file
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setDocumentsList(prev => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Gerenciar Transparência</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Novo Documento
        </button>
      </div>

      {showForm && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingDocument ? 'Editar Documento' : 'Novo Documento'}</h3>
              <button 
                className="admin-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingDocument(null);
                  setFormData({ title: '', category: '', date: '', file: null });
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label htmlFor="doc-title">Título do Documento</label>
                <input
                  type="text"
                  id="doc-title"
                  className="admin-input"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="doc-category">Categoria</label>
                <select
                  id="doc-category"
                  className="admin-select"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label htmlFor="doc-date">Data do Documento</label>
                <input
                  type="date"
                  id="doc-date"
                  className="admin-input"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="doc-file">Arquivo PDF</label>
                <input
                  type="file"
                  id="doc-file"
                  className="admin-file-input"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  required={!editingDocument}
                />
                {formData.file && (
                  <div className="admin-file-info">
                    <span>📄 {formData.file.name}</span>
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingDocument ? 'Atualizar' : 'Publicar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingDocument(null);
                    setFormData({ title: '', category: '', date: '', file: null });
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
              <th>Categoria</th>
              <th>Data</th>
              <th>Arquivo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {documentsList.map(document => (
              <tr key={document.id}>
                <td>{document.title}</td>
                <td>{document.category}</td>
                <td>{new Date(document.date).toLocaleDateString('pt-BR')}</td>
                <td>
                  {document.file ? (
                    <span className="admin-file-link">
                      📄 {document.file.name || 'PDF'}
                    </span>
                  ) : (
                    <span>Nenhum arquivo</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEdit(document)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(document.id)}
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

export default AdminTransparencia;