import React from "react";
import Navbar from "../components/island/Navbar";
import HeroSection from "../components/island/HeroSection";
import LodgingSection from "../components/island/LodgingSection";
import ActivitiesSection from "../components/island/ActivitiesSection";
import TransportSection from "../components/island/TransportSection";
import CallToAction from "../components/island/CallToAction";
import Footer from "../components/island/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LodgingSection />
      <ActivitiesSection />
      <TransportSection />
      <CallToAction />
      <Footer />
    </div>
  );
}