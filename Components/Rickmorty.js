import React, { Component } from "react";
export default class Rickmorty extends Component {
  state = {
    characters: [],
    cargando: true
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(characters => {
        this.setState({
          characters: characters.results,
          cargando: false
        });
      });
  }

  render() {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>;
    }

    return (
      <div className="container">
        <h1>Peticiones HTTP</h1>
        <div className="row">
          {this.state.characters.map(character => {
            return (
              <div className="col-sm-12 col-md-4" key={character.id}>
                <img src={character.image} alt={character.name} />
                <span>Nombre: </span>
                {character.name} <br />
                <span>Status: </span>
                {character.status}
                <br />
                <span>Especie: </span>
                {character.species}
                <br />
                <br />
              </div>
            );
          })}  </div>
      </div>
    );
  }
}



