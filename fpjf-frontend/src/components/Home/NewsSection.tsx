
import React from 'react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Novo Sistema de Atendimento Digital",
      excerpt: "FUNPJF lança plataforma online para facilitar o atendimento aos beneficiários.",
      date: "15 de Janeiro, 2024",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Relatório Anual de Atividades 2023",
      excerpt: "Confira os principais resultados e conquistas do fundo previdenciário no último ano.",
      date: "10 de Janeiro, 2024",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Reunião do Conselho de Administração",
      excerpt: "Aprovadas novas diretrizes para o fortalecimento da previdência municipal.",
      date: "05 de Janeiro, 2024",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Últimas Notícias</h2>
      <div className="news-grid">
        {news.map((item) => (
          <article key={item.id} className="news-card">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <time className="news-date">{item.date}</time>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-excerpt">{item.excerpt}</p>
              <a href="#" className="btn">Ler mais</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
