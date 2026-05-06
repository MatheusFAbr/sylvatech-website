import React from "react";
import Navbar from "../components/sylvatech/Navbar";
import HeroSection from "../components/sylvatech/HeroSection";
import AboutSection from "../components/sylvatech/AboutSection";
import ProjectSection from "../components/sylvatech/ProjectSection";
import TechSection from "../components/sylvatech/TechSection";
import TeamSection from "../components/sylvatech/TeamSection";
import ContactSection from "../components/sylvatech/ContactSection";
import Footer from "../components/sylvatech/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <TechSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}