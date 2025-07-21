import React, { useState } from 'react';

const AdminCertificacoes = () => {
  const [certificacoesList, setCertificacoesList] = useState([
    {
      id: 1,
      title: "Certificação ISO 9001:2015",
      issuer: "Organismo Certificador",
      validUntil: "2025-12-31",
      file: null
    },
    {
      id: 2,
      title: "Certificado de Regularidade Previdenciária",
      issuer: "PREVIC",
      validUntil: "2024-06-30",
      file: null
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingCertificacao, setEditingCertificacao] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    validUntil: '',
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
    if (editingCertificacao) {
      setCertificacoesList(prev => prev.map(cert => 
        cert.id === editingCertificacao.id ? { 
          ...cert, 
          title: formData.title,
          issuer: formData.issuer,
          validUntil: formData.validUntil,
          file: formData.file
        } : cert
      ));
    } else {
      const newCertificacao = {
        id: Date.now(),
        title: formData.title,
        issuer: formData.issuer,
        validUntil: formData.validUntil,
        file: formData.file
      };
      setCertificacoesList(prev => [...prev, newCertificacao]);
    }
    setFormData({ title: '', issuer: '', validUntil: '', file: null });
    setShowForm(false);
    setEditingCertificacao(null);
  };

  const handleEdit = (certificacao: any) => {
    setEditingCertificacao(certificacao);
    setFormData({
      title: certificacao.title,
      issuer: certificacao.issuer,
      validUntil: certificacao.validUntil,
      file: certificacao.file
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setCertificacoesList(prev => prev.filter(cert => cert.id !== id));
  };

  const isExpired = (validUntil: string) => {
    return new Date(validUntil) < new Date();
  };

  const isExpiringSoon = (validUntil: string) => {
    const expiryDate = new Date(validUntil);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 60 && diffDays > 0;
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Gerenciar Certificações</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Nova Certificação
        </button>
      </div>

      {showForm && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingCertificacao ? 'Editar Certificação' : 'Nova Certificação'}</h3>
              <button 
                className="admin-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingCertificacao(null);
                  setFormData({ title: '', issuer: '', validUntil: '', file: null });
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label htmlFor="cert-title">Título da Certificação</label>
                <input
                  type="text"
                  id="cert-title"
                  className="admin-input"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="cert-issuer">Órgão Emissor</label>
                <input
                  type="text"
                  id="cert-issuer"
                  className="admin-input"
                  value={formData.issuer}
                  onChange={(e) => handleInputChange('issuer', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="cert-validUntil">Válido até</label>
                <input
                  type="date"
                  id="cert-validUntil"
                  className="admin-input"
                  value={formData.validUntil}
                  onChange={(e) => handleInputChange('validUntil', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="cert-file">Arquivo PDF</label>
                <input
                  type="file"
                  id="cert-file"
                  className="admin-file-input"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  required={!editingCertificacao}
                />
                {formData.file && (
                  <div className="admin-file-info">
                    <span>📄 {formData.file.name}</span>
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingCertificacao ? 'Atualizar' : 'Adicionar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingCertificacao(null);
                    setFormData({ title: '', issuer: '', validUntil: '', file: null });
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
              <th>Certificação</th>
              <th>Órgão Emissor</th>
              <th>Válido até</th>
              <th>Status</th>
              <th>Arquivo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {certificacoesList.map(certificacao => (
              <tr key={certificacao.id}>
                <td>{certificacao.title}</td>
                <td>{certificacao.issuer}</td>
                <td>{new Date(certificacao.validUntil).toLocaleDateString('pt-BR')}</td>
                <td>
                  <span className={`admin-status ${
                    isExpired(certificacao.validUntil) ? 'expired' : 
                    isExpiringSoon(certificacao.validUntil) ? 'expiring' : 'valid'
                  }`}>
                    {isExpired(certificacao.validUntil) ? 'Expirado' : 
                     isExpiringSoon(certificacao.validUntil) ? 'Expirando' : 'Válido'}
                  </span>
                </td>
                <td>
                  {certificacao.file ? (
                    <span className="admin-file-link">
                      📄 {certificacao.file.name || 'PDF'}
                    </span>
                  ) : (
                    <span>Nenhum arquivo</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEdit(certificacao)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(certificacao.id)}
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

export default AdminCertificacoes;