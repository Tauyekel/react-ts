import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">

    <NavLink to="/" className="navbar-brand nav-link text-white custom-navbar-brand">My awesome application with maps!</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">О нас</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
