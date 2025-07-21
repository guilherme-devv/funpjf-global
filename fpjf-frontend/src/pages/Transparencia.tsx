import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query'
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import { transparenciaService } from '@/services/api';

const Transparencia = () => {
  const { categoria } = useParams();
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoria || 'todos');



  // Dados simulados - em produção viriam do backend
  const documentos = [
    {
      id: 1,
      title: "Relatório Anual 2023",
      date: "2024-01-15",
      type: "Relatório",
      categoria: "relatorios",
      fileUrl: "/docs/relatorio-anual-2023.pdf"
    },
    {
      id: 2,
      title: "Demonstrativo de Gastos Q4 2023",
      date: "2023-12-31",
      type: "Demonstrativo",
      categoria: "demonstrativos",
      fileUrl: "/docs/gastos-q4-2023.pdf"
    },
    {
      id: 3,
      title: "Ata da Assembleia - Janeiro 2024",
      date: "2024-01-20",
      type: "Ata",
      categoria: "atas",
      fileUrl: "/docs/ata-janeiro-2024.pdf"
    },
    {
      id: 4,
      title: "Balancete Mensal 2024",
      date: "2024-02-01",
      type: "Balancete",
      categoria: "balancetes",
      fileUrl: "/docs/balancete-fev-2024.pdf"
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos os Documentos' },
    { id: 'relatorios', nome: 'Relatórios' },
    { id: 'demonstrativos', nome: 'Demonstrativos' },
    { id: 'atas', nome: 'Atas' },
    { id: 'balancetes', nome: 'Balancetes' }
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
    // Simular download do arquivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = title;
    link.click();
  };

  const handleView = (fileUrl: string) => {
    // Abrir PDF em nova aba
    window.open(fileUrl, '_blank');
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="page-main">
        <div className="container">
          <div className="page-header">
            <h1>Transparência</h1>
            <p>Acesse documentos e informações transparentes sobre o FUNPJF</p>
            
          </div>

          <div className="documents-grid">
            {documentosFiltrados.map(doc => (
              <div key={doc.id} className="document-card">
                <div className="document-icon">
                  📄
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

export default Transparencia;