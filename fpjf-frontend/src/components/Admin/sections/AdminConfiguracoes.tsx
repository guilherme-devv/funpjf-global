import React, { useState } from 'react';

const AdminConfiguracoes = () => {
  const [settings, setSettings] = useState({
    siteName: 'FUNPJF - Fundo de Previdência dos Servidores Municipais',
    siteDescription: 'Fundo de Previdência dos Servidores Municipais de José de Freitas',
    contactEmail: 'contato@funpjf.gov.br',
    contactPhone: '(86) 3286-1234',
    address: 'Rua Principal, 123 - Centro, José de Freitas - PI',
    socialMedia: {
      facebook: '',
      instagram: '',
      youtube: ''
    },
    maintenanceMode: false,
    enableComments: true,
    itemsPerPage: 10
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field.startsWith('socialMedia.')) {
      const socialField = field.split('.')[1];
      setSettings(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [socialField]: value
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Configurações do Site</h2>
      
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="admin-config-section">
          <h3>Informações Básicas</h3>
          
          <div className="admin-form-group">
            <label htmlFor="siteName">Nome do Site</label>
            <input
              type="text"
              id="siteName"
              className="admin-input"
              value={settings.siteName}
              onChange={(e) => handleInputChange('siteName', e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="siteDescription">Descrição do Site</label>
            <textarea
              id="siteDescription"
              className="admin-textarea"
              rows={3}
              value={settings.siteDescription}
              onChange={(e) => handleInputChange('siteDescription', e.target.value)}
            />
          </div>
        </div>

        <div className="admin-config-section">
          <h3>Informações de Contato</h3>
          
          <div className="admin-form-group">
            <label htmlFor="contactEmail">E-mail de Contato</label>
            <input
              type="email"
              id="contactEmail"
              className="admin-input"
              value={settings.contactEmail}
              onChange={(e) => handleInputChange('contactEmail', e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="contactPhone">Telefone</label>
            <input
              type="tel"
              id="contactPhone"
              className="admin-input"
              value={settings.contactPhone}
              onChange={(e) => handleInputChange('contactPhone', e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="address">Endereço</label>
            <textarea
              id="address"
              className="admin-textarea"
              rows={3}
              value={settings.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>
        </div>

        <div className="admin-config-section">
          <h3>Redes Sociais</h3>
          
          <div className="admin-form-group">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="url"
              id="facebook"
              className="admin-input"
              placeholder="https://facebook.com/funpjf"
              value={settings.socialMedia.facebook}
              onChange={(e) => handleInputChange('socialMedia.facebook', e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="url"
              id="instagram"
              className="admin-input"
              placeholder="https://instagram.com/funpjf"
              value={settings.socialMedia.instagram}
              onChange={(e) => handleInputChange('socialMedia.instagram', e.target.value)}
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="youtube">YouTube</label>
            <input
              type="url"
              id="youtube"
              className="admin-input"
              placeholder="https://youtube.com/funpjf"
              value={settings.socialMedia.youtube}
              onChange={(e) => handleInputChange('socialMedia.youtube', e.target.value)}
            />
          </div>
        </div>

        <div className="admin-config-section">
          <h3>Configurações Avançadas</h3>
          
          <div className="admin-form-group">
            <label className="admin-checkbox-label">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => handleInputChange('maintenanceMode', e.target.checked)}
              />
              Modo de Manutenção
            </label>
            <small>Ativar quando o site estiver em manutenção</small>
          </div>

          <div className="admin-form-group">
            <label className="admin-checkbox-label">
              <input
                type="checkbox"
                checked={settings.enableComments}
                onChange={(e) => handleInputChange('enableComments', e.target.checked)}
              />
              Habilitar Comentários
            </label>
            <small>Permitir comentários nas notícias</small>
          </div>

          <div className="admin-form-group">
            <label htmlFor="itemsPerPage">Itens por Página</label>
            <select
              id="itemsPerPage"
              className="admin-select"
              value={settings.itemsPerPage}
              onChange={(e) => handleInputChange('itemsPerPage', e.target.value)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="btn btn-primary">
            Salvar Configurações
          </button>
          <button type="button" className="btn btn-secondary">
            Restaurar Padrões
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminConfiguracoes;