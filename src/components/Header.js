import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Biblioteca</h1>
      <hr />
      <div className="links">
        {/* Usando NavLink ao invez de link para a pagina nao recarregar */}
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Livros
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Adicionar Livros
        </NavLink>
      </div>
    </header>
  );
};

export default Header;