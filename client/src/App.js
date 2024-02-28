import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import Characters from "./components/starwars-charachters/Characters";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-950 font-poppins">
      <Hero />
      <Characters search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
