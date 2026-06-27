import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import FindStations from "./Pages/FindStations";
import HowItWorks from "./Pages/HowItWorks";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Booking from "./Pages/Booking";
import Dashboard from "./Pages/Dashboard";

import GeminiChat from "./components/GeminiChat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-stations" element={<FindStations />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Floating AI Chatbot */}
      <GeminiChat />
    </>
  );
}

export default App;