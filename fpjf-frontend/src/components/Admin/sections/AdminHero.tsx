import React, { useState } from 'react';

const AdminHero = () => {
  const [heroData, setHeroData] = useState({
    title: 'Fundo de Previdência dos Servidores Municipais de José de Freitas',
    subtitle: 'Garantindo o futuro dos servidores municipais com transparência e eficiência',
    backgroundImage: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setHeroData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setHeroData(prev => ({
          ...prev,
          backgroundImage: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Gerenciar Seção Principal</h2>
      
      <form className="admin-form">
        <div className="admin-form-group">
          <label htmlFor="hero-title">Título Principal</label>
          <input
            type="text"
            id="hero-title"
            className="admin-input"
            value={heroData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>

        <div className="admin-form-group">
          <label htmlFor="hero-subtitle">Subtítulo</label>
          <textarea
            id="hero-subtitle"
            className="admin-textarea"
            rows={3}
            value={heroData.subtitle}
            onChange={(e) => handleInputChange('subtitle', e.target.value)}
          />
        </div>

        <div className="admin-form-group">
          <label htmlFor="hero-image">Imagem de Fundo</label>
          <input
            type="file"
            id="hero-image"
            className="admin-file-input"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {heroData.backgroundImage && (
            <div className="admin-image-preview">
              <img src={heroData.backgroundImage} alt="Preview" />
            </div>
          )}
        </div>

        <div className="admin-form-actions">
          <button type="submit" className="btn btn-primary">Salvar Alterações</button>
          <button type="button" className="btn btn-secondary">Visualizar</button>
        </div>
      </form>
    </div>
  );
};

export default AdminHero;