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
        <NavLink to="/addbook" className="link" activeClassName="active">
          Adicionar Livros
        </NavLink>
        <NavLink to="/addclient" className="link" activeClassName="active">
          Adicionar Clientes
        </NavLink>
        <NavLink to="/addauthor" className="link" activeClassName="active" exact>
          Adicionar Autores
        </NavLink>
      </div>
    </header>
  );
};

export default Header;