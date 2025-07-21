import React, { useState } from 'react';

const AdminInvestimentos = () => {
  const [investimentosList, setInvestimentosList] = useState([
    {
      id: 1,
      title: "Relatório de Investimentos Janeiro 2024",
      category: "Relatório Mensal",
      date: "2024-01-31",
      file: null
    },
    {
      id: 2,
      title: "Política de Investimentos 2024",
      category: "Política",
      date: "2024-01-01",
      file: null
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingInvestimento, setEditingInvestimento] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    file: null as File | null
  });

  const categories = [
    'Relatório Mensal',
    'Relatório Trimestral',
    'Relatório Anual',
    'Política',
    'Análise de Performance',
    'Demonstrativo',
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
    if (editingInvestimento) {
      setInvestimentosList(prev => prev.map(inv => 
        inv.id === editingInvestimento.id ? { 
          ...inv, 
          title: formData.title,
          category: formData.category,
          date: formData.date,
          file: formData.file
        } : inv
      ));
    } else {
      const newInvestimento = {
        id: Date.now(),
        title: formData.title,
        category: formData.category,
        date: formData.date,
        file: formData.file
      };
      setInvestimentosList(prev => [...prev, newInvestimento]);
    }
    setFormData({ title: '', category: '', date: '', file: null });
    setShowForm(false);
    setEditingInvestimento(null);
  };

  const handleEdit = (investimento: any) => {
    setEditingInvestimento(investimento);
    setFormData({
      title: investimento.title,
      category: investimento.category,
      date: investimento.date,
      file: investimento.file
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setInvestimentosList(prev => prev.filter(inv => inv.id !== id));
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Gerenciar Investimentos</h2>
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
              <h3>{editingInvestimento ? 'Editar Documento' : 'Novo Documento'}</h3>
              <button 
                className="admin-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingInvestimento(null);
                  setFormData({ title: '', category: '', date: '', file: null });
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label htmlFor="inv-title">Título</label>
                <input
                  type="text"
                  id="inv-title"
                  className="admin-input"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="inv-category">Categoria</label>
                <select
                  id="inv-category"
                  className="admin-select"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  required
                >
                  <option value="">Selecione a categoria</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label htmlFor="inv-date">Data</label>
                <input
                  type="date"
                  id="inv-date"
                  className="admin-input"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="inv-file">Arquivo PDF</label>
                <input
                  type="file"
                  id="inv-file"
                  className="admin-file-input"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  required={!editingInvestimento}
                />
                {formData.file && (
                  <div className="admin-file-info">
                    <span>📄 {formData.file.name}</span>
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingInvestimento ? 'Atualizar' : 'Publicar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingInvestimento(null);
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
            {investimentosList.map(investimento => (
              <tr key={investimento.id}>
                <td>{investimento.title}</td>
                <td>{investimento.category}</td>
                <td>{new Date(investimento.date).toLocaleDateString('pt-BR')}</td>
                <td>
                  {investimento.file ? (
                    <span className="admin-file-link">
                      📄 {investimento.file.name || 'PDF'}
                    </span>
                  ) : (
                    <span>Nenhum arquivo</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEdit(investimento)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(investimento.id)}
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

export default AdminInvestimentos;