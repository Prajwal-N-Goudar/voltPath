import React from "react";

export default function MarkerPopup({ station }) {
  return (
    <div className="w-60">

      <h2 className="text-lg font-bold text-green-600">
        ⚡ {station.name}
      </h2>

      <p>
        <strong>City:</strong> {station.city}
      </p>

      <p>
        <strong>Address:</strong> {station.address}
      </p>

      <p>
        <strong>Connector:</strong> {station.connector}
      </p>

      <p>
        <strong>Power:</strong> {station.power}
      </p>

      <p>
        <strong>Price:</strong> {station.price}
      </p>

      <p
        className={
          station.available
            ? "text-green-600 font-bold"
            : "text-red-600 font-bold"
        }
      >
        {station.available ? "Available ✅" : "Occupied ❌"}
      </p>

      <button className="mt-3 w-full bg-green-500 text-white rounded-lg py-2 hover:bg-green-600">
        Book Now
      </button>

    </div>
  );
}