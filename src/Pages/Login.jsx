import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }

      const res = await axios.post(
        " https://voltpath-xu7j.onrender.com",
        {
          email,
          password,
        }
      );

      
      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");

      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed ❌"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 flex justify-center items-center px-4">

      <div className="bg-white/10 backdrop-blur-xl border border-green-400/20 p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <div className="text-center mb-6">
          <div className="text-6xl mb-3">⚡</div>

          <h1 className="text-4xl font-bold text-green-400">
            Welcome Back
          </h1>

          <p className="text-gray-300 mt-2">
            Login to your VoltPath account
          </p>
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl bg-white text-black outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-2 rounded-xl bg-white text-black outline-none"
        />

        <div className="text-right mb-5">
          <a
            href="#"
            className="text-green-400 hover:text-green-300 text-sm"
          >
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition duration-300 shadow-lg"
        >
          Login
        </button>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <button
          className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-300 mt-6">
          New to VoltPath?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-400 cursor-pointer hover:text-green-300"
          >
            Create Account
          </span>
        </p>

      </div>

    </div>
  );
}