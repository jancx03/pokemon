import { useEffect, useState } from "react";
import Pokemons from "./assets/components/Pokemons";
import Search from "./assets/components/SearchBar";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonSprites, setPokemonSprites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearch(searchField);
  };

  const filteredPokemons = pokemon.filter((p) => {
    return p.name.toLowerCase().includes(search);
  }).map((p) => {
    return {
      name: p.name,
      sprite: p.sprites.front_default
    }
  });


  useEffect(() => {
    const fetchPokemon = async () => {
      let pokemonArray = [];
      let pokemonSpritesArray = [];
      for (let i = 1; i <= 151; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonArray.push(data);
        pokemonSpritesArray.push(data.sprites.front_default);
      }
      setPokemon(pokemonArray);
      setPokemonSprites(pokemonSpritesArray);
      setIsLoading(false);
    };

    fetchPokemon();
  }, []);

  return (
    <div className="bg-indigo-600 min-h-screen">
      <div className="flex justify-center">
        <img src="/public/poke.png" alt="pokemon logo" className="w-40 mt-8" />
      </div>
      <div className="flex justify-center mt-8">
        <div className="">
          <Search onSearch={handleSearch} value={search} />
        </div>
      </div>
      {isLoading ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-yellow-500"></div>
        </div>


      ) : (
        <Pokemons pokemon={filteredPokemons} />
      )
      }
    </div >
  );
}

export default App;
