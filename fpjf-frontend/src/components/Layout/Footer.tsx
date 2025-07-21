
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FUNPJF</h3>
            <p>
              O Fundo Previdenciário do Município de José de Freitas trabalha 
              para garantir a seguridade social dos servidores públicos municipais 
              com transparência e eficiência.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/historia">História</a></li>
              <li><a href="/contato">Fale Conosco</a></li>
              <li><a href="#">Transparência</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Documentos</h3>
            <ul>
              <li><a href="#">CRPs</a></li>
              <li><a href="#">Relatórios de Investimentos</a></li>
              <li><a href="#">Demonstrações Contábeis</a></li>
              <li><a href="#">Certificações</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <p>Rua Principal, 123</p>
            <p>Centro - José de Freitas/PI</p>
            <p>CEP: 64250-000</p>
            <p>Tel: (86) 3343-1234</p>
            <p>Email: contato@funpjf.gov.br</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 FUNPJF - Fundo Previdenciário do Município de José de Freitas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
