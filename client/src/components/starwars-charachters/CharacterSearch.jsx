function CharacterSearch({ setSearch }) {
  return (
        <input type="text" className="w-[300px] h-[40px] rounded-md bg-gray-800 text-white focus:outline-none p-3" placeholder="Keresés..." onChange={(e) => setSearch(e.target.value)} />
  )
}

export default CharacterSearch