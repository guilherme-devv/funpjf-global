
import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Navigation from '../components/Layout/Navigation';
import Footer from '../components/Layout/Footer';
import '../styles/main.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-container">
      <Header />
      <Navigation />
      
      <main className="page-main">
        <div className="container">
          <h1 className="page-title">Fale Conosco</h1>
          
          <div className="contact-grid">
            <div>
              <h2 className="content-title">Informações de Contato</h2>
              
              <div className="contact-info">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <h3>Endereço</h3>
                  <p>
                    Rua Principal, 123<br />
                    Centro - José de Freitas/PI<br />
                    CEP: 64250-000
                  </p>
                </div>
              </div>
              
              <div className="contact-info">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <h3>Telefone</h3>
                  <p>(86) 3343-1234</p>
                </div>
              </div>
              
              <div className="contact-info">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <h3>E-mail</h3>
                  <p>contato@funpjf.gov.br</p>
                </div>
              </div>
              
              <div className="contact-info">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 08:00 às 12:00 e 14:00 às 18:00</p>
                </div>
              </div>
              
              <div className="info-box">
                <h3>Atendimento Presencial</h3>
                <p>
                  Para atendimento presencial, recomendamos agendar horário através do telefone 
                  ou e-mail. Traga sempre um documento de identificação com foto.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="content-title">Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="content-card">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nome" className="form-label">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="telefone" className="form-label">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="assunto" className="form-label">
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="informacoes">Informações Gerais</option>
                      <option value="beneficios">Benefícios</option>
                      <option value="documentos">Documentos</option>
                      <option value="reclamacao">Reclamação</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem" className="form-label">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Descreva sua dúvida, solicitação ou comentário..."
                  />
                </div>
                
                <button type="submit" className="btn w-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;
