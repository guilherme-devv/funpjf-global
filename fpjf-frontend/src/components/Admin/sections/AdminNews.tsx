import React, { useState } from 'react';

const AdminNews = () => {
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "Novo Sistema de Atendimento Digital",
      excerpt: "FUNPJF lança plataforma online para facilitar o atendimento aos beneficiários.",
      date: "15 de Janeiro, 2024",
      image: "/placeholder.svg",
      status: 'published'
    },
    {
      id: 2,
      title: "Relatório Anual de Atividades 2023",
      excerpt: "Confira os principais resultados e conquistas do fundo previdenciário no último ano.",
      date: "10 de Janeiro, 2024",
      image: "/placeholder.svg",
      status: 'published'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      setNewsList(prev => prev.map(news => 
        news.id === editingNews.id ? { ...news, ...formData } : news
      ));
    } else {
      const newNews = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('pt-BR'),
        status: 'published'
      };
      setNewsList(prev => [...prev, newNews]);
    }
    setFormData({ title: '', excerpt: '', content: '', image: '' });
    setShowForm(false);
    setEditingNews(null);
  };

  const handleEdit = (news: any) => {
    setEditingNews(news);
    setFormData({
      title: news.title,
      excerpt: news.excerpt,
      content: news.content || '',
      image: news.image
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setNewsList(prev => prev.filter(news => news.id !== id));
  };

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2 className="admin-section-title">Gerenciar Notícias</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Nova Notícia
        </button>
      </div>

      {showForm && (
        <div className="admin-modal">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>{editingNews ? 'Editar Notícia' : 'Nova Notícia'}</h3>
              <button 
                className="admin-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setEditingNews(null);
                  setFormData({ title: '', excerpt: '', content: '', image: '' });
                }}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="admin-form-group">
                <label htmlFor="news-title">Título</label>
                <input
                  type="text"
                  id="news-title"
                  className="admin-input"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="news-excerpt">Resumo</label>
                <textarea
                  id="news-excerpt"
                  className="admin-textarea"
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="news-content">Conteúdo Completo</label>
                <textarea
                  id="news-content"
                  className="admin-textarea"
                  rows={10}
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label htmlFor="news-image">Imagem</label>
                <input
                  type="file"
                  id="news-image"
                  className="admin-file-input"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {formData.image && (
                  <div className="admin-image-preview">
                    <img src={formData.image} alt="Preview" />
                  </div>
                )}
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingNews ? 'Atualizar' : 'Publicar'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingNews(null);
                    setFormData({ title: '', excerpt: '', content: '', image: '' });
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
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map(news => (
              <tr key={news.id}>
                <td>{news.title}</td>
                <td>{news.date}</td>
                <td>
                  <span className={`admin-status ${news.status}`}>
                    {news.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </span>
                </td>
                <td>
                  <div className="admin-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleEdit(news)}
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(news.id)}
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

export default AdminNews;