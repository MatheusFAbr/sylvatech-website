import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HERO_BG from "../../imgs/pinheiros.png";

export default function HeroSection() {
  const scrollToProject = () => {
    const el = document.querySelector("#project");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Pine forest aerial view"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Scanning line effect */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-0 right-0 h-px bg-primary/30"
          style={{ animation: "scanLine 8s linear infinite" }}
        />
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-border/30" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-border/30" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-border/20" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-border/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Vertical text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <h2
              className="font-orbitron font-900 text-7xl xl:text-8xl tracking-[0.15em] text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(255,214,0,0.15)",
                writingMode: "vertical-lr",
              }}
            >
              SYLVATECH
            </h2>
          </motion.div>

          {/* Center content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <span
                  className="w-2 h-2 rounded-full bg-primary"
                  style={{ animation: "statusPulse 2s ease-in-out infinite" }}
                />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  Sistema ativo
                </span>
              </div>

              <h1 className="font-orbitron font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide text-foreground leading-tight mb-6">
                SYLVA<span className="text-primary">TECH</span>
              </h1>

              <p className="font-inter text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Tecnologia inteligente para monitoramento ambiental
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToProject}
                  className="group relative px-8 py-3.5 bg-primary text-primary-foreground font-orbitron text-sm uppercase tracking-wider font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,214,0,0.3)]"
                >
                  <span className="relative z-10">Conheça o projeto</span>
                  <div className="absolute inset-0 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>

                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3.5 border border-border text-foreground font-mono text-sm uppercase tracking-wider rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Sobre nós
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-primary/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}