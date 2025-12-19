import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import GallerySection from "@/components/sections/GallerySection";
import AdmissionsSection from "@/components/sections/AdmissionsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Logo from "@/components/Logo";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setShowIntro(false);
    } else {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* SEO HEAD (CRITICAL) */}

      {/* Intro Animation (Visual Only) */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          >
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 rounded-full bg-pastel-pink"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.div
              className="absolute bottom-32 right-20 w-24 h-24 rounded-full bg-pastel-yellow"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.div
              className="absolute top-40 right-32 w-20 h-20 rounded-full bg-pastel-green"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />

            <Logo size="xl" animate />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT — ALWAYS IN DOM */}
      <div className="min-h-screen">
        <Navbar showLogo={!showIntro} />

        <main>
          {/* SEO H1 + TEXT (VISIBLE TO GOOGLE) */}
          <section className="sr-only">
            <h1>Twinkling Petals – Pre School & Day Care in Bengaluru</h1>
            <p>
              Twinkling Petals is a trusted preschool in Bengaluru offering
              Playgroup, Nursery, LKG, UKG and Day Care programs. We focus on
              early childhood development through play-based and activity-oriented
              learning in a safe and nurturing environment.
            </p>
            <p>
              Address: Bengaluru, Karnataka, India. Timings: 8:00 AM – 7:00 PM.
            </p>
          </section>

          {/* VISUAL SECTIONS */}
          <HeroSection />
          <ProgramsSection />
          <WhyUsSection />
          <GallerySection />
          <AdmissionsSection />
          <ContactSection />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
