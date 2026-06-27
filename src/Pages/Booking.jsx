import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (!name || !date || !time) {
      alert("Please fill all the details.");
      return;
    }

    const booking = {
      station: state?.station,
      city: state?.city,
      connector: state?.connector,
      name,
      date,
      time,
      status: "Confirmed",
    };

    // Get previous bookings
    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // Add new booking
    bookings.push(booking);

    // Save updated bookings
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert("🎉 Booking Confirmed Successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">

      <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl w-[450px]">

        <h1 className="text-3xl font-bold text-green-400 mb-6">
          Book Charging Slot
        </h1>

        <div className="space-y-2 mb-5 text-white">

          <p>
            <b>Station:</b> {state?.station || "Not Selected"}
          </p>

          <p>
            <b>City:</b> {state?.city || "-"}
          </p>

          <p>
            <b>Connector:</b> {state?.connector || "-"}
          </p>

        </div>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-xl text-black mb-4"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded-xl text-black mb-4"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-3 rounded-xl text-black mb-6"
        />

        <button
          onClick={handleBooking}
          className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl text-white font-semibold transition"
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
}