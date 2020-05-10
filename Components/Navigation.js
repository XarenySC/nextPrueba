import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog/Notas">Notas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Test">Test</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Ejercicio">Ejercicio</a>
          </li>
        </ul>
      </div>
    </nav>


  )
}

export default Navigation;