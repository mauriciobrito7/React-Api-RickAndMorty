import React, { Component } from "react";

// Componentes
import Loader from "./components/Loader";
import CharacterCard from "./components/CharacterCard";
import IfOffline from "./components/IfOffline";
import "./App.css";

class App extends Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: []
    }
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  // Sincronizando datos
  fetchCharacters = async () => {
    // estamos cargando datos
    this.setState({
      loading: true,
      error: null
    });

    try {
      // respuesta de la petición
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );

      // datos de la petición
      const data = await response.json();

      this.setState({
        loading: false, // cargaron los datos correctamente
        data: {
          info: data.info,
          results: [].concat(
            this.state.data.results,
            data.results // concatenamos los results para que cada vez que se carguen de lo nuevos caracteres se concatenen con los que estan en el estado
          )
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({
        loading: false, // no cargaron correctamente los datos
        error: error
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header className="header">
            <img
              className="header-img"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/829e53c9-f6cd-4a51-99e4-23bfad4178e0/dbp1ypz-3bb9c9fa-4f68-4a66-a681-a49a58121c69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyOWU1M2M5LWY2Y2QtNGE1MS05OWU0LTIzYmZhZDQxNzhlMFwvZGJwMXlwei0zYmI5YzlmYS00ZjY4LTRhNjYtYTY4MS1hNDlhNTgxMjFjNjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VT1K-fe0A8-AQNs5rtAvcUy5tEHPbuHwWTL8z7UlEAA"
              alt="Rick y Morty"
              className="logo"
            />
          </header>
          <IfOffline>
            <span style={{ color: "white" }}>No hay conexión a internet</span>
          </IfOffline>
          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col" key={character.id}>
                <CharacterCard character={character}></CharacterCard>
              </li>
            ))}
          </ul>

          {/*Si el loading es true es decir si esta cargando entonces quiero mostrar el loader */}
          {this.state.loading && (
            <div className="loader">
              <Loader />
            </div>
          )}

          {!this.state.loading && (
            // lo llamamos de esta manera para no pasar el evento
            <div className="btn">
              <IfOffline>
                <span style={{ color: "white" }}>
                  Lo sentimos no tiene conexión a internet
                </span>
              </IfOffline>
              <button
                className="btn-load"
                onClick={() => this.fetchCharacters()}
              >
                Mostrar más
              </button>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
