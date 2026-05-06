import React from "react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Subtle yellow glow at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-primary/30 rounded-full blur-xl"
        style={{ animation: "pulseGlow 4s ease-in-out infinite" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-orbitron font-bold text-lg tracking-widest text-primary">
              SYLVA<span className="text-foreground">TECH</span>
            </span>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
              FATEC Registro
            </p>
          </div>

          <div className="flex items-center gap-6">
            {["Início", "Sobre", "Projeto", "Equipe", "Contato"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase() === "início" ? "hero" : label.toLowerCase() === "sobre" ? "about" : label.toLowerCase() === "projeto" ? "project" : label.toLowerCase() === "equipe" ? "team" : "contact"}`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = label.toLowerCase() === "início" ? "hero" : label.toLowerCase() === "sobre" ? "about" : label.toLowerCase() === "projeto" ? "project" : label.toLowerCase() === "equipe" ? "team" : "contact";
                  document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            © 2026 SylvaTech
          </p>
        </div>
      </div>
    </footer>
  );
}