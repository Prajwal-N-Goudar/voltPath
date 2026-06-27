import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState, useMemo } from "react";

const containerStyle = {
  width: "100%",
  height: "600px",
  borderRadius: "20px",
};

const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629,
};

const stations = [
  // Bangalore
  {
    name: "VoltPath Hub",
    city: "Bangalore",
    position: { lat: 12.9716, lng: 77.5946 },
  },
  {
    name: "ChargeZone Koramangala",
    city: "Bangalore",
    position: { lat: 12.9352, lng: 77.6245 },
  },
  {
    name: "Ather Grid",
    city: "Bangalore",
    position: { lat: 12.9279, lng: 77.6271 },
  },
  {
    name: "Jio BP Pulse",
    city: "Bangalore",
    position: { lat: 12.9833, lng: 77.5833 },
  },

  // Mumbai
  {
    name: "Mumbai EV Station",
    city: "Mumbai",
    position: { lat: 19.0760, lng: 72.8777 },
  },
  {
    name: "Jio BP Mumbai",
    city: "Mumbai",
    position: { lat: 19.0820, lng: 72.8850 },
  },
  {
    name: "ChargeZone Mumbai",
    city: "Mumbai",
    position: { lat: 19.0715, lng: 72.8650 },
  },

  // Pune
  {
    name: "FastCharge Pune",
    city: "Pune",
    position: { lat: 18.5204, lng: 73.8567 },
  },
  {
    name: "ChargeGrid Pune",
    city: "Pune",
    position: { lat: 18.5314, lng: 73.8446 },
  },
  {
    name: "Zeon Charging",
    city: "Pune",
    position: { lat: 18.5074, lng: 73.8077 },
  },

  // Hyderabad
  {
    name: "GreenCharge Hyderabad",
    city: "Hyderabad",
    position: { lat: 17.3850, lng: 78.4867 },
  },
  {
    name: "Statiq Hyderabad",
    city: "Hyderabad",
    position: { lat: 17.4123, lng: 78.4501 },
  },

  // Chennai
  {
    name: "Chennai Fast Charge",
    city: "Chennai",
    position: { lat: 13.0827, lng: 80.2707 },
  },

  // Delhi
  {
    name: "Delhi Super Charger",
    city: "Delhi",
    position: { lat: 28.6139, lng: 77.2090 },
  },

  // Ahmedabad
  {
    name: "Ahmedabad EV Hub",
    city: "Ahmedabad",
    position: { lat: 23.0225, lng: 72.5714 },
  },

  // Hubli
  {
    name: "Hubli Fast Charge",
    city: "Hubli",
    position: { lat: 15.3647, lng: 75.1240 },
  },

  // Mysore
  {
    name: "Mysore Charge Point",
    city: "Mysore",
    position: { lat: 12.2958, lng: 76.6394 },
  },
];

export default function GoogleMapComponent({ city }) {
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(5);
  const [filteredStations, setFilteredStations] = useState(stations);

  const center = useMemo(() => mapCenter, [mapCenter]);

  useEffect(() => {
    if (!city || city.trim() === "") {
      setFilteredStations(stations);
      setMapCenter(defaultCenter);
      setZoom(5);
      return;
    }

    const result = stations.filter((station) =>
      station.city.toLowerCase().includes(city.toLowerCase().trim())
    );

    if (result.length > 0) {
      setFilteredStations(result);
      setMapCenter(result[0].position);
      setZoom(13);
    } else {
      alert("No charging station found in this city.");
      setFilteredStations(stations);
      setMapCenter(defaultCenter);
      setZoom(5);
    }
  }, [city]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="bg-black py-12">
        <h2 className="text-4xl text-white text-center font-bold mb-2">
          Find EV Charging Stations
        </h2>

        <p className="text-center text-gray-300 mb-8">
          Explore charging stations across India
        </p>

        <div className="w-[90%] mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            options={{
              streetViewControl: false,
              fullscreenControl: true,
              mapTypeControl: false,
            }}
          >
            {filteredStations.map((station) => (
              <Marker
                key={station.name}
                position={station.position}
                title={station.name}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
}