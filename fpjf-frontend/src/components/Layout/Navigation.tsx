
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [dropdownAberto, setDropdownAberto] = useState<string | null>(null);

  const categorias = {
    transparencia: [
      { id: 'todos', nome: 'Todos os Documentos' },
      { id: 'relatorios', nome: 'Relatórios' },
      { id: 'demonstrativos', nome: 'Demonstrativos' },
      { id: 'atas', nome: 'Atas' },
      { id: 'balancetes', nome: 'Balancetes' }
    ],
    crps: [
      { id: 'todos', nome: 'Todos os CRPs' },
      { id: 'mensal', nome: 'CRPs Mensais' },
      { id: 'anual', nome: 'CRPs Anuais' },
      { id: 'especial', nome: 'CRPs Especiais' }
    ],
    contabilidade: [
      { id: 'todos', nome: 'Todos os Documentos' },
      { id: 'balancetes', nome: 'Balancetes' },
      { id: 'demonstrativos', nome: 'Demonstrativos' },
      { id: 'balancos', nome: 'Balanços Patrimoniais' },
      { id: 'auditorias', nome: 'Auditorias' }
    ],
    investimentos: [
      { id: 'todos', nome: 'Todos os Documentos' },
      { id: 'relatorios', nome: 'Relatórios' },
      { id: 'politicas', nome: 'Políticas' },
      { id: 'carteiras', nome: 'Carteiras de Ativos' }
    ],
    certificacoes: [
      { id: 'todos', nome: 'Todas as Certificações' },
      { id: 'qualidade', nome: 'Qualidade' },
      { id: 'regulatorias', nome: 'Regulatórias' },
      { id: 'auditorias', nome: 'Auditorias' },
      { id: 'seguranca', nome: 'Segurança' }
    ]
  };

  const handleDropdownToggle = (itemKey: string) => {
    setDropdownAberto(dropdownAberto === itemKey ? null : itemKey);
  };

  const handleDropdownClose = () => {
    setDropdownAberto(null);
  };

  const renderNavItem = (to: string, label: string, itemKey?: string) => {
    const hasDropdown = itemKey && categorias[itemKey as keyof typeof categorias];
    
    if (hasDropdown) {
      const itemCategorias = categorias[itemKey as keyof typeof categorias];
      return (
        <li className="nav-item nav-item-dropdown">
          <button
            className="nav-link nav-dropdown-toggle"
            onClick={() => handleDropdownToggle(itemKey)}
          >
            {label}
            <span className={`dropdown-arrow ${dropdownAberto === itemKey ? 'open' : ''}`}>▼</span>
          </button>
          {dropdownAberto === itemKey && (
            <div className="nav-dropdown-menu">
              {itemCategorias.map(categoria => (
                <Link
                  key={categoria.id}
                  to={categoria.id === 'todos' ? to : `${to}/${categoria.id}`}
                  className="nav-dropdown-item"
                  onClick={handleDropdownClose}
                >
                  {categoria.nome}
                </Link>
              ))}
            </div>
          )}
        </li>
      );
    }

    return (
      <li className="nav-item">
        <Link to={to} className="nav-link">{label}</Link>
      </li>
    );
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            FUNPJF
          </Link>
          
          <ul className="nav-menu">
            {renderNavItem("/", "Início")}
            {renderNavItem("/historia", "História")}
            {renderNavItem("/transparencia", "Transparência", "transparencia")}
            {renderNavItem("/crps", "CRPs", "crps")}
            {renderNavItem("/contabilidade", "Contabilidade", "contabilidade")}
            {renderNavItem("/investimentos", "Investimentos", "investimentos")}
            {renderNavItem("/certificacoes", "Certificações", "certificacoes")}
            {renderNavItem("/contato", "Fale Conosco")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
