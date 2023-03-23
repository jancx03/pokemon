export default function Pokemons({ pokemon }) {
  return (
    <div className="grid grid-cols-4 gap-2 justify-items-center pt-12">
      {pokemon.map((p, index) => {
        if (!p) return null;

        return (
          <div key={index}>
            <img
              src={p.sprite}
              alt={p.name}
              className="bg-slate-50 h-24 w-24 rounded-lg"
            />
            <p className="capitalize text-center text-sky-50">{p.name}</p>
          </div>
        );
      })}
    </div>
  );
}
