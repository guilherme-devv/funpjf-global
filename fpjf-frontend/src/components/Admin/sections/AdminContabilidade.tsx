import React, { useState } from 'react';

const AdminContabilidade = () => {
  const [contabilidadeList, setContabilidadeList] = useState([
    {
      id: 1,
      title: "Balancete Janeiro 2024",
      type: "Balancete",
      date: "2024-01-31",
      file: null
    },
    {
      id: 2,
      title: "Demonstrativo de Fluxo de Caixa 2023",
      type: "Demonstrativo",
      date: "2023-12-31",
      file: null
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingDoc, setEditingDoc] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: '',
    type: '',
    date: '',
    file: null as File | null
  });

  const documentTypes = [
    'Balancete',
    'Demonstrativo',
    'Relatório de Gestão',
    'Balanço Patrimonial',
    'Demonstração de Resultados',
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
    if (editingDoc) {
      setContabilidadeList(prev => prev.map(doc => 
        doc.id === editingDoc.id ? { 
          ...doc, 
          title: formData.title,
          type: formData.type,
          date: formData.date,
          file: formData.file
        } : doc
      ));
    } else {
      const newDoc = {
        id: Date.now(),
        title: formData.title,
        type: formData.type,
        date: formData.date,
        file: formData.file
      };
      setContabilidadeList(prev => [...prev, newDoc]);
    }
    setFormData({ title: '', type: '', date: '', file: null });
    setShowForm(false);
    setEditingDoc(null);
  };

  const handleEdit = (doc: any) => {
    setEditingDoc(doc);
    setFormData({
      title: doc.title,
      type: doc.type,
      date: doc.date,
      file: doc.file
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setContabilidadeList(prev => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Gerenciar Divisão de Contabilidade</h2>
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
              <h3>{editingDoc ? 'Editar Documento' : 'Novo Documento'}</h3>
              <button 
                className="admin-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingDoc(null);
                  setFormData({ title: '', type: '', date: '', file: null });
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label htmlFor="cont-title">Título</label>
                <input
                  type="text"
                  id="cont-title"
                  className="admin-input"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="cont-type">Tipo de Documento</label>
                <select
                  id="cont-type"
                  className="admin-select"
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  required
                >
                  <option value="">Selecione o tipo</option>
                  {documentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label htmlFor="cont-date">Data</label>
                <input
                  type="date"
                  id="cont-date"
                  className="admin-input"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="cont-file">Arquivo PDF</label>
                <input
                  type="file"
                  id="cont-file"
                  className="admin-file-input"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  required={!editingDoc}
                />
                {formData.file && (
                  <div className="admin-file-info">
                    <span>📄 {formData.file.name}</span>
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingDoc ? 'Atualizar' : 'Publicar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingDoc(null);
                    setFormData({ title: '', type: '', date: '', file: null });
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
              <th>Tipo</th>
              <th>Data</th>
              <th>Arquivo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {contabilidadeList.map(doc => (
              <tr key={doc.id}>
                <td>{doc.title}</td>
                <td>{doc.type}</td>
                <td>{new Date(doc.date).toLocaleDateString('pt-BR')}</td>
                <td>
                  {doc.file ? (
                    <span className="admin-file-link">
                      📄 {doc.file.name || 'PDF'}
                    </span>
                  ) : (
                    <span>Nenhum arquivo</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEdit(doc)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(doc.id)}
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

export default AdminContabilidade;