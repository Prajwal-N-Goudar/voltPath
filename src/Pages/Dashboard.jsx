import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChargingStation,
  FaBolt,
  FaMapMarkerAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const cancelBooking = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold text-green-400 mb-2">
        ⚡ VoltPath Dashboard
      </h1>

      <p className="text-gray-400 mb-8">
        Welcome to your EV Charging Management System
      </p>

      {/* User Profile */}

      <div className="bg-slate-800 rounded-2xl p-6 mb-8">

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          👤 User Profile
        </h2>

        <p><b>Name:</b> Prajwal</p>

        <p><b>Email:</b> prajwal@example.com</p>

        <p><b>Role:</b> EV User</p>

      </div>

      {/* Dashboard Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaChargingStation size={30} className="text-green-400 mb-2" />
          <h2 className="text-3xl font-bold">12</h2>
          <p>Total Stations</p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaBolt size={30} className="text-yellow-400 mb-2" />
          <h2 className="text-3xl font-bold">48</h2>
          <p>Available Chargers</p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaMapMarkerAlt size={30} className="text-cyan-400 mb-2" />
          <h2 className="text-3xl font-bold">8</h2>
          <p>Nearby Stations</p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <FaCalendarCheck size={30} className="text-pink-400 mb-2" />
          <h2 className="text-3xl font-bold">
            {bookings.length}
          </h2>
          <p>My Bookings</p>
        </div>

      </div>

      {/* Quick Actions */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <button
          onClick={() => navigate("/find-stations")}
          className="bg-green-500 hover:bg-green-600 p-6 rounded-2xl font-bold"
        >
          🔍 Find Stations
        </button>

        <button
          onClick={() => navigate("/find-stations")}
          className="bg-blue-500 hover:bg-blue-600 p-6 rounded-2xl font-bold"
        >
          📅 New Booking
        </button>

        <button
          className="bg-purple-500 hover:bg-purple-600 p-6 rounded-2xl font-bold"
        >
          ⚙ Settings
        </button>

      </div>

      {/* Booking History */}

      <h2 className="text-3xl font-bold text-green-400 mb-6">
        My Recent Bookings
      </h2>

      {bookings.length === 0 ? (

        <div className="bg-slate-800 rounded-2xl p-6 text-center">
          No bookings available.
        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {bookings.map((booking, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6"
            >

              <h3 className="text-2xl font-bold text-green-400">
                {booking.station}
              </h3>

              <p className="mt-3">
                👤 {booking.name}
              </p>

              <p>
                📅 {booking.date}
              </p>

              <p>
                ⏰ {booking.time}
              </p>

              <span className="inline-block mt-3 bg-green-500 px-4 py-1 rounded-full">
                Confirmed
              </span>

              <br />

              <button
                onClick={() => cancelBooking(index)}
                className="mt-5 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl"
              >
                Cancel Booking
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}