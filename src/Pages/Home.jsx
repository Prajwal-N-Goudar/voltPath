import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import GoogleMap from "../components/GoogleMap";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  
  const [searchData, setSearchData] = useState({
    location: "",
    distance: "10",
    connector: "All",
  });

  
  const handleSearch = (data) => {
    console.log("Search Data:", data);
    setSearchData(data);
  };

  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <Hero />

      <SearchSection onSearch={handleSearch} />

      <GoogleMap city={searchData.location} />

      <Features />

      <Stats />

      <Footer />
    </>
  );
}