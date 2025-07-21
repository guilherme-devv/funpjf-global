import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';

const Contabilidade = () => {
  const { categoria } = useParams();
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoria || 'todos');

  // Dados simulados - em produção viriam do backend
  const documentos = [
    {
      id: 1,
      title: "Balancete Janeiro 2024",
      type: "Balancete",
      date: "2024-01-31",
      categoria: "balancetes",
      fileUrl: "/docs/balancete-janeiro-2024.pdf"
    },
    {
      id: 2,
      title: "Demonstrativo de Fluxo de Caixa 2023",
      type: "Demonstrativo",
      date: "2023-12-31",
      categoria: "demonstrativos",
      fileUrl: "/docs/fluxo-caixa-2023.pdf"
    },
    {
      id: 3,
      title: "Balanço Patrimonial 2023",
      type: "Balanço Patrimonial",
      date: "2023-12-31",
      categoria: "balancos",
      fileUrl: "/docs/balanco-patrimonial-2023.pdf"
    },
    {
      id: 4,
      title: "Relatório de Auditoria 2023",
      type: "Auditoria",
      date: "2024-02-01",
      categoria: "auditorias",
      fileUrl: "/docs/auditoria-2023.pdf"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos os Documentos' },
    { id: 'balancetes', nome: 'Balancetes' },
    { id: 'demonstrativos', nome: 'Demonstrativos' },
    { id: 'balancos', nome: 'Balanços Patrimoniais' },
    { id: 'auditorias', nome: 'Auditorias' }
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
            <h1>Divisão de Contabilidade</h1>
            <p>Documentos contábeis e demonstrativos financeiros do FUNPJF</p>
            
          </div>

          <div className="documents-grid">
            {documentosFiltrados.map(doc => (
              <div key={doc.id} className="document-card">
                <div className="document-icon">
                  📊
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

export default Contabilidade;