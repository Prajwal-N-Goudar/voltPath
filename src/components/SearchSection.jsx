import { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

function SearchSection({ onSearch }) {
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("10");
  const [connector, setConnector] = useState("All");

  const handleSearch = () => {
    onSearch({
      location,
      distance,
      connector,
    });
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-3xl shadow-2xl -mt-10 relative z-20">

      <h2 className="text-3xl font-bold mb-6 text-black">
        ⚡ Find Charging Stations
      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        

        <div className="border rounded-xl p-4 flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500" />

          <input
            type="text"
            placeholder="Enter City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none w-full"
          />
        </div>

        

        <select
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="border rounded-xl p-4"
        >
          <option value="5">Within 5 km</option>
          <option value="10">Within 10 km</option>
          <option value="20">Within 20 km</option>
          <option value="50">Within 50 km</option>
        </select>


        <select
          value={connector}
          onChange={(e) => setConnector(e.target.value)}
          className="border rounded-xl p-4"
        >
          <option value="All">All Connectors</option>
          <option value="CCS">CCS</option>
          <option value="Type 2">Type 2</option>
          <option value="CHAdeMO">CHAdeMO</option>
        </select>

       

        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center gap-2 transition"
        >
          <FaSearch />
          Search Stations
        </button>

      </div>

    </div>
  );
}

export default SearchSection;