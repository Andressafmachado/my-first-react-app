import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  const pokemons = [
    {
      name: "Charizard",
      weight: 90,
      awesome: true,
      terrifying: false,
      abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    },
    {
      name: "Bulbasaur",
      weight: 6.9,
      awesome: true,
      terrifying: false,
      abilities: ["Overgrow", "Chlorophyll"],
    },
    {
      name: "Mewtwo",
      weight: 122,
      awesome: true,
      terrifying: true,
      abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    },
    {
      name: "Mega beedrill",
      weight: 65,
      awesome: false,
      terrifying: true,
      abilities: ["Intimidate", "Unnerve"],
    },
  ];
  return (
    <div className="App">
      <main>
        <Title content="Some example title" />
        {pokemons.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            weight={pokemon.weight}
            awesome={pokemon.awesome}
            terrifying={pokemon.terrifying}
            abilities={pokemon.abilities}
          />
        ))}
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my app
        </a>
      </header>
      <body>
        <h1>the first title</h1>
        <p>novo paragrafo</p>
      </body>
    </div>
  );
}

export default App;
