
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">
          Fundo Previdenciário do Município de José de Freitas
        </h1>
        <p className="hero-subtitle">
          Garantindo segurança e tranquilidade para os servidores públicos municipais 
          através de uma gestão transparente e eficiente dos recursos previdenciários.
        </p>
        
        <div className="hero-features">
          <div className="hero-feature">
            <svg className="hero-feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <h3 className="hero-feature-title">Segurança</h3>
            <p className="hero-feature-text">Proteção garantida para todos os beneficiários</p>
          </div>
          <div className="hero-feature">
            <svg className="hero-feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V18h2v-4h3v4h3v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V18h2V4H4v14z"/>
            </svg>
            <h3 className="hero-feature-title">Comunidade</h3>
            <p className="hero-feature-text">Atendendo servidores e suas famílias</p>
          </div>
          <div className="hero-feature">
            <svg className="hero-feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2h2v3l-1-.75L9 7V4zm1 9c-1.25 0-2.25-1-2.25-2.25S8.75 8.5 10 8.5s2.25 1 2.25 2.25S11.25 13 10 13z"/>
            </svg>
            <h3 className="hero-feature-title">Transparência</h3>
            <p className="hero-feature-text">Informações claras e acessíveis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
