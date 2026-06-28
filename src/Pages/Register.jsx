import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {
      if (!name || !email || !phone || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match ❌");
        return;
      }

      const res = await axios.post(
        " https://voltpath-xu7j.onrender.com",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");

      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Registration Failed ❌"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 flex justify-center items-center px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-green-400/20 p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <div className="text-center mb-6">
          <div className="text-6xl mb-3">⚡</div>

          <h1 className="text-4xl font-bold text-green-400">
            Join VoltPath
          </h1>

          <p className="text-gray-300 mt-2">
            Create your EV charging account
          </p>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl bg-white text-black outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl bg-white text-black outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl bg-white text-black outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl bg-white text-black outline-none"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-4 mb-5 rounded-xl bg-white text-black outline-none"
        />

        <button
          onClick={handleRegister}
          className="
            w-full
            bg-green-500
            hover:bg-green-600
            text-white
            py-4
            rounded-xl
            font-bold
            transition
            duration-300
            shadow-lg
          "
        >
          Create Account
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <button
          className="
            w-full
            bg-white
            text-black
            py-4
            rounded-xl
            font-semibold
            hover:bg-gray-100
            transition
          "
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-400 cursor-pointer hover:text-green-300"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}