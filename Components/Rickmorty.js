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
      return <h1 className="titulo">Cargando...</h1>;
    }

    return (
      <div className="container">
        <h1 className="titulo">Peticiones HTTP</h1>
        <div className="row">
          {this.state.characters.map(character => {
            return (
              <div className="col-sm-12 col-md-4 mb-4">
                <div className="card" key={character.id}>
                  <img src={character.image} alt={character.name} class="card-img-top" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Nombre:{character.name}</li>
                    <li className="list-group-item">Status:{character.status}</li>
                    <li className="list-group-item">Especie:{character.species}</li>
                  </ul>

                </div>
              </div>
            );
          })}  </div>
      </div>
    );
  }
}



