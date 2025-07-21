
import React from 'react';

const InformativosSection = () => {
  const informativos = [
    {
      id: 1,
      title: "Informativo Janeiro 2024",
      date: "Janeiro 2024",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Informativo Dezembro 2023",
      date: "Dezembro 2023",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Informativo Novembro 2023",
      date: "Novembro 2023",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Informativo Outubro 2023",
      date: "Outubro 2023",
      downloadUrl: "#"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Informativos Mensais</h2>
      <div className="informativos-grid">
        {informativos.map((item) => (
          <div key={item.id} className="informativo-card">
            <svg className="informativo-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2h2v3l-1-.75L9 7V4zm1 9c-1.25 0-2.25-1-2.25-2.25S8.75 8.5 10 8.5s2.25 1 2.25 2.25S11.25 13 10 13z"/>
            </svg>
            <h3 className="informativo-title">{item.title}</h3>
            <p className="informativo-date">{item.date}</p>
            <div>
              <a href={item.downloadUrl} className="btn btn-secondary">
                Visualizar
              </a>
              <a href={item.downloadUrl} className="btn" style={{ marginLeft: '0.5rem' }}>
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformativosSection;
