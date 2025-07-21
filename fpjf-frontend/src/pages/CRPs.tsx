import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';

const CRPs = () => {
  const { categoria } = useParams();
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoria || 'todos');

  // Dados simulados - em produção viriam do backend
  const crps = [
    {
      id: 1,
      title: "CRP Janeiro 2024",
      date: "2024-01-31",
      categoria: "mensal",
      fileUrl: "/docs/crp-janeiro-2024.pdf"
    },
    {
      id: 2,
      title: "CRP Dezembro 2023",
      date: "2023-12-31",
      categoria: "mensal",
      fileUrl: "/docs/crp-dezembro-2023.pdf"
    },
    {
      id: 3,
      title: "CRP Anual 2023",
      date: "2023-12-31",
      categoria: "anual",
      fileUrl: "/docs/crp-anual-2023.pdf"
    },
    {
      id: 4,
      title: "CRP Especial - Auditoria",
      date: "2024-02-15",
      categoria: "especial",
      fileUrl: "/docs/crp-auditoria-2024.pdf"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos os CRPs' },
    { id: 'mensal', nome: 'CRPs Mensais' },
    { id: 'anual', nome: 'CRPs Anuais' },
    { id: 'especial', nome: 'CRPs Especiais' }
  ];

  useEffect(() => {
    if (categoria) {
      setCategoriaAtiva(categoria);
    }
  }, [categoria]);

  const crpsFiltrados = categoriaAtiva === 'todos' 
    ? crps 
    : crps.filter(crp => crp.categoria === categoriaAtiva);

  const handleDownload = (fileUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = title;
    link.click();
  };

  const handleView = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="page-main">
        <div className="container">
          <div className="page-header">
            <h1>CRPs</h1>
            <p>Certificados de Regularidade Previdenciária disponíveis para download</p>
            
          </div>

          <div className="documents-grid">
            {crpsFiltrados.map(crp => (
              <div key={crp.id} className="document-card">
                <div className="document-icon">
                  📄
                </div>
                <div className="document-info">
                  <h3 className="document-title">{crp.title}</h3>
                  <p className="document-date">
                    {new Date(crp.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="document-actions">
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleView(crp.fileUrl)}
                  >
                    Visualizar
                  </button>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleDownload(crp.fileUrl, crp.title)}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          {crpsFiltrados.length === 0 && (
            <div className="empty-state">
              <p>Nenhum CRP disponível para esta categoria.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CRPs;