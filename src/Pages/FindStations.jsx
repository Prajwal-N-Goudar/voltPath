import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleMap from "../components/GoogleMap";
import AIRecommendation from "../components/AIRecommendation";

export default function FindStations() {

  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [connector, setConnector] = useState("All");
  const [distance, setDistance] = useState("5");
  const [searchLocation, setSearchLocation] = useState("");

  const stations = [

    // Bangalore
    {
      id:1,
      name:"VoltPath Hub",
      city:"Bangalore",
      connector:"CCS",
      status:"Available",
      rating:4.9,
      fastCharging:true,
    },
    {
      id:2,
      name:"ChargeZone Koramangala",
      city:"Bangalore",
      connector:"CCS",
      status:"2 Slots Available",
      rating:4.8,
      fastCharging:true,
    },
    {
      id:3,
      name:"Tata Power EV",
      city:"Bangalore",
      connector:"Type 2",
      status:"Available",
      rating:4.6,
      fastCharging:false,
    },
    {
      id:4,
      name:"Ather Grid",
      city:"Bangalore",
      connector:"Type 2",
      status:"Available",
      rating:4.7,
      fastCharging:false,
    },
    {
      id:5,
      name:"Jio BP Pulse",
      city:"Bangalore",
      connector:"CCS",
      status:"Available",
      rating:4.9,
      fastCharging:true,
    },

    // Pune
    {
      id:6,
      name:"FastCharge Pune",
      city:"Pune",
      connector:"CCS",
      status:"Available",
      rating:4.8,
      fastCharging:true,
    },
    {
      id:7,
      name:"Zeon Charging",
      city:"Pune",
      connector:"Type 2",
      status:"Available",
      rating:4.6,
      fastCharging:false,
    },
    {
      id:8,
      name:"ChargeGrid Pune",
      city:"Pune",
      connector:"CHAdeMO",
      status:"Busy",
      rating:4.4,
      fastCharging:true,
    },
    {
      id:9,
      name:"EV Point Pune",
      city:"Pune",
      connector:"CCS",
      status:"Available",
      rating:4.7,
      fastCharging:true,
    },

    // Hyderabad
    {
      id:10,
      name:"GreenCharge Hyderabad",
      city:"Hyderabad",
      connector:"CCS",
      status:"Available",
      rating:4.8,
      fastCharging:true,
    },
    {
      id:11,
      name:"Statiq Hyderabad",
      city:"Hyderabad",
      connector:"Type 2",
      status:"Available",
      rating:4.6,
      fastCharging:false,
    },
    {
      id:12,
      name:"EV Hub Hyderabad",
      city:"Hyderabad",
      connector:"CCS",
      status:"Available",
      rating:4.7,
      fastCharging:true,
    },

    // Delhi
    {
      id:13,
      name:"Delhi Super Charger",
      city:"Delhi",
      connector:"CCS",
      status:"Available",
      rating:4.8,
      fastCharging:true,
    },
    {
      id:14,
      name:"ChargeZone Delhi",
      city:"Delhi",
      connector:"Type 2",
      status:"Available",
      rating:4.6,
      fastCharging:false,
    },

    // Mumbai
    {
      id:15,
      name:"Mumbai EV Station",
      city:"Mumbai",
      connector:"CCS",
      status:"Available",
      rating:4.9,
      fastCharging:true,
    },
    {
      id:16,
      name:"Jio BP Mumbai",
      city:"Mumbai",
      connector:"Type 2",
      status:"Available",
      rating:4.8,
      fastCharging:true,
    },

    // Chennai
    {
      id:17,
      name:"Chennai Fast Charge",
      city:"Chennai",
      connector:"CCS",
      status:"Available",
      rating:4.8,
      fastCharging:true,
    },
    {
      id:18,
      name:"Ather Grid Chennai",
      city:"Chennai",
      connector:"Type 2",
      status:"Available",
      rating:4.6,
      fastCharging:false,
    },

    // Ahmedabad
    {
      id:19,
      name:"Ahmedabad EV Hub",
      city:"Ahmedabad",
      connector:"CCS",
      status:"Available",
      rating:4.7,
      fastCharging:true,
    },

    // Mysore
    {
      id:20,
      name:"Mysore Charge Point",
      city:"Mysore",
      connector:"CCS",
      status:"Available",
      rating:4.5,
      fastCharging:false,
    },

    // Hubli
    {
      id:21,
      name:"Hubli Fast Charge",
      city:"Hubli",
      connector:"Type 2",
      status:"Available",
      rating:4.4,
      fastCharging:false,
    },

  ];

  const filteredStations = stations.filter((station) => {

    const cityMatch =
      searchLocation === "" ||
      station.city.toLowerCase() === searchLocation.toLowerCase();

    const connectorMatch =
      connector === "All" ||
      station.connector === connector;

    return cityMatch && connectorMatch;
  });

  const handleSearch = () => {

    if (location.trim() === "") {
      alert("Please enter a city.");
      return;
    }

    setSearchLocation(location);

    const found = stations.some(
      station =>
        station.city.toLowerCase() === location.toLowerCase()
    );

    if (!found) {
      alert("No charging stations found in this city.");
    }
  };
  return (

<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 text-white p-8">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div className="text-center mb-12">

<h1 className="text-5xl font-bold text-green-400">
⚡ Find Charging Stations
</h1>

<p className="text-gray-300 mt-3">
Locate nearby EV charging stations instantly using AI.
</p>

</div>

{/* Search */}

<div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl mb-10">

<div className="grid md:grid-cols-4 gap-4">

<input
type="text"
placeholder="Enter City"
value={location}
onChange={(e)=>setLocation(e.target.value)}
className="p-4 rounded-xl text-black"
/>

<select
value={connector}
onChange={(e)=>setConnector(e.target.value)}
className="p-4 rounded-xl text-black"
>

<option>All</option>
<option>CCS</option>
<option>Type 2</option>
<option>CHAdeMO</option>

</select>

<select
value={distance}
onChange={(e)=>setDistance(e.target.value)}
className="p-4 rounded-xl text-black"
>

<option value="5">Within 5 km</option>
<option value="10">Within 10 km</option>
<option value="20">Within 20 km</option>

</select>

<button
onClick={handleSearch}
className="bg-green-500 hover:bg-green-600 rounded-xl font-bold"
>
🔍 Search
</button>

</div>

</div>

{/* Google Map */}

<GoogleMap city={searchLocation} />

{/* AI Recommendation */}

<AIRecommendation stations={filteredStations} />

{/* Charging Stations */}

<h2 className="text-4xl font-bold text-center text-green-400 mt-10 mb-8">

Available Charging Stations

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
{filteredStations.length === 0 ? (

  <div className="col-span-3 text-center bg-white/10 p-10 rounded-3xl">

    <h2 className="text-3xl text-red-400 font-bold">
      ❌ No Charging Stations Found
    </h2>

    <p className="text-gray-300 mt-3">
      Try searching another city.
    </p>

  </div>

) : (

  filteredStations.map((station) => (

    <div
      key={station.id}
      className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:scale-105 hover:shadow-green-500/30 transition-all duration-300"
    >

      <div className="flex justify-between items-center">

        <h3 className="text-2xl font-bold text-green-400">
          {station.name}
        </h3>

        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
          ⭐ {station.rating}
        </span>

      </div>

      <p className="mt-4 text-gray-300">
        📍 {station.city}
      </p>

      <p className="mt-2">
        ⚡ Connector:
        <span className="text-green-400 font-semibold">
          {" "} {station.connector}
        </span>
      </p>

      <p className="mt-2">
        🔋 Fast Charging:
        <span className="text-green-400 font-semibold">
          {" "}
          {station.fastCharging ? "Yes" : "No"}
        </span>
      </p>

      <p className="mt-2">
        🚦 Status:
        <span className="text-green-400 font-semibold">
          {" "}
          {station.status}
        </span>
      </p>

      <p className="mt-2">
        💰 Price:
        <span className="text-green-400 font-semibold">
          ₹18 / kWh
        </span>
      </p>

      <div className="bg-green-900/40 rounded-xl p-4 mt-5">

        <h4 className="text-green-400 font-bold">
          🤖 AI Recommendation
        </h4>

        <p className="text-sm text-gray-300 mt-2">
          This station is recommended because it has a
          high rating, charger availability and supports
          fast charging.
        </p>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() =>
            navigate("/booking", {
              state: {
                station: station.name,
                city: station.city,
                connector: station.connector,
                distance,
              },
            })
          }
          className="flex-1 bg-green-500 hover:bg-green-600 py-3 rounded-xl font-bold"
        >
          Book Slot
        </button>

        <button
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/${station.name}+${station.city}`,
              "_blank"
            )
          }
          className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-bold"
        >
          Directions
        </button>

      </div>

    </div>

  ))

)}

</div>

</div>


);
}