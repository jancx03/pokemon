export default function Search({ onSearch, value }) {
  return (
    <>
      <input
        onChange={onSearch}
        value={value}
        type="text"
        id="pokemon"
        placeholder=" Search Pokémon"
        className="h-12 rounded-md w-64 "
      />
    </>
  );
}
