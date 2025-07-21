import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';

const Investimentos = () => {
  const { categoria } = useParams();
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoria || 'todos');

  // Dados simulados - em produção viriam do backend
  const documentos = [
    {
      id: 1,
      title: "Relatório de Investimentos Q1 2024",
      date: "2024-03-31",
      type: "Relatório Trimestral",
      categoria: "relatorios",
      fileUrl: "/docs/investimentos-q1-2024.pdf"
    },
    {
      id: 2,
      title: "Performance Anual 2023",
      date: "2023-12-31",
      type: "Relatório Anual",
      categoria: "relatorios",
      fileUrl: "/docs/performance-2023.pdf"
    },
    {
      id: 3,
      title: "Política de Investimentos 2024",
      date: "2024-01-01",
      type: "Política",
      categoria: "politicas",
      fileUrl: "/docs/politica-investimentos-2024.pdf"
    },
    {
      id: 4,
      title: "Carteira de Ativos Março 2024",
      date: "2024-03-01",
      type: "Carteira",
      categoria: "carteiras",
      fileUrl: "/docs/carteira-marco-2024.pdf"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos os Documentos' },
    { id: 'relatorios', nome: 'Relatórios' },
    { id: 'politicas', nome: 'Políticas' },
    { id: 'carteiras', nome: 'Carteiras de Ativos' }
  ];

  useEffect(() => {
    if (categoria) {
      setCategoriaAtiva(categoria);
    }
  }, [categoria]);

  const documentosFiltrados = categoriaAtiva === 'todos' 
    ? documentos 
    : documentos.filter(doc => doc.categoria === categoriaAtiva);

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
            <h1>Investimentos</h1>
            <p>Relatórios e documentos sobre os investimentos do FUNPJF</p>
            
          </div>

          <div className="documents-grid">
            {documentosFiltrados.map(doc => (
              <div key={doc.id} className="document-card">
                <div className="document-icon">
                  📈
                </div>
                <div className="document-info">
                  <h3 className="document-title">{doc.title}</h3>
                  <p className="document-type">{doc.type}</p>
                  <p className="document-date">
                    {new Date(doc.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <div className="document-actions">
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleView(doc.fileUrl)}
                  >
                    Visualizar
                  </button>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleDownload(doc.fileUrl, doc.title)}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          {documentosFiltrados.length === 0 && (
            <div className="empty-state">
              <p>Nenhum documento disponível para esta categoria.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investimentos;