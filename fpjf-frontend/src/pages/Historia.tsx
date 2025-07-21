
import React from 'react';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import '../styles/main.css';

const Historia = () => {
  return (
    <div className="page-container">
      <Header />
      <Navigation />
      
      <main className="page-main">
        <div className="container">
          <h1 className="page-title">História do FUNPJF</h1>
          
          <div className="content-card">
            <h2 className="content-title">Fundação e Primeiros Anos</h2>
            <p className="text-content">
              O Fundo Previdenciário do Município de José de Freitas (FUNPJF) foi criado em 1995, 
              com o objetivo de garantir a seguridade social dos servidores públicos municipais. 
              Desde sua fundação, tem sido um pilar fundamental na proteção social dos trabalhadores 
              do município.
            </p>
            
            <p className="text-content">
              Inicialmente, o fundo atendia apenas aos servidores efetivos, mas ao longo dos anos 
              expandiu seus serviços para incluir pensionistas e beneficiários diversos, sempre 
              mantendo o compromisso com a transparência e eficiência na gestão.
            </p>
          </div>
          
          <div className="content-card">
            <h2 className="content-title">Evolução e Modernização</h2>
            <p className="text-content">
              Ao longo dos anos 2000, o FUNPJF passou por importantes modernizações em sua 
              estrutura administrativa e tecnológica. A implementação de sistemas digitais 
              permitiu maior agilidade no atendimento aos beneficiários e melhor controle 
              dos recursos.
            </p>
            
            <p className="text-content">
              Em 2010, foi criado o programa de transparência ativa, disponibilizando online 
              todos os relatórios financeiros e demonstrativos de gestão, reforçando o 
              compromisso com a prestação de contas à sociedade.
            </p>
          </div>
          
          <div className="content-card">
            <h2 className="content-title">FUNPJF Hoje</h2>
            <p className="text-content">
              Atualmente, o FUNPJF atende mais de 1.200 beneficiários entre servidores ativos, 
              aposentados e pensionistas. Com uma gestão moderna e transparente, mantém 
              equilibrio atuarial e garante a sustentabilidade do sistema previdenciário municipal.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">1.200+</div>
                <div className="stat-label">Beneficiários</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">29</div>
                <div className="stat-label">Anos de História</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Transparência</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Historia;
