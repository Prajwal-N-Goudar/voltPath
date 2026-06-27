import React from "react";
import { FaChargingStation } from "react-icons/fa";

export default function StationsCard({ station }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300">

      <div className="flex items-center gap-3 mb-3">
        <FaChargingStation className="text-3xl text-green-500" />

        <div>
          <h2 className="font-bold text-lg">{station.name}</h2>
          <p className="text-gray-500">
            {station.city}, {station.state}
          </p>
        </div>
      </div>

      <hr className="my-3" />

      <p>
        <strong>Address:</strong>
        <br />
        {station.address}
      </p>

      <p className="mt-2">
        <strong>Connector:</strong> {station.connector}
      </p>

      <p>
        <strong>Power:</strong> {station.power}
      </p>

      <p>
        <strong>Price:</strong> {station.price}
      </p>

      <p
        className={`mt-2 font-bold ${
          station.available ? "text-green-600" : "text-red-600"
        }`}
      >
        {station.available ? "Available ✅" : "Occupied ❌"}
      </p>

      <button
        className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl"
      >
        Book Now
      </button>

    </div>
  );
}