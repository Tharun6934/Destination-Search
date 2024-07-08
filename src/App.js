import places from "./Place.json";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="h-screen p-10 ">
      <center>
        <div>
          <p className="text-7xl font-semibold mb-10">Destination Search</p>
          <input
            className="bg-slate-300 rounded-xl text-black text-3xl p-4 mb-10"
            placeholder="Search "
            type="text"
            m
            value={search}
            onChange={handleChange}
          />
        </div>
      </center>
      <div className="flex  flex-wrap">
        {places
          .filter((place) => {
            return place.title
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          })
          .map((place) => {
            return (
              <div className="w-1/3 p-4">
                <img src={place.image} className="rounded-2xl mb-5" />
                <p className="text-3xl mb-5">{place.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
