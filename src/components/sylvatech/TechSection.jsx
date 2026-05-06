import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Crosshair from "./Crosshair";

const TECHS = [
  { category: "Frontend", name: "HTML • CSS • JavaScript", role: "Interface moderna, responsiva e otimizada para uso em campo." },
  { category: "Backend (BaaS)", name: "Firebase (Auth • Firestore • Storage)", role: "Gerenciamento de usuários, banco de dados em nuvem e armazenamento de imagens." },
  { category: "Inteligência Artificial", name: "YOLO • TensorFlow.js", role: "Detecção de infestação por visão computacional diretamente no navegador." },
  { category: "APIs do Navegador", name: "Camera API • Geolocation API", role: "Captura de imagens e localização GPS em tempo real." },
  { category: "Visualização de Dados", name: "Chart.js", role: "Dashboard com gráficos e indicadores de análise." },
  { category: "UX/UI Design", name: "Figma", role: "Prototipação, design de interface e experiência do usuário." },
  { category: "Versionamento", name: "Git • GitHub", role: "Controle de versão e organização do projeto." },
  { category: "Arquitetura", name: "SPA • Serverless", role: "Aplicação leve, rápida e sem necessidade de backend tradicional." },
];

export default function TechSection() {
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel label="Stack tecnológico" />

          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl tracking-wide text-foreground mb-12">
            Tecnologias <span className="text-primary">utilizadas</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECHS.map(({ category, name, role }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative bg-card border border-border rounded-sm p-6 group hover:border-primary/40 transition-all duration-500"
            >
              <Crosshair position="top-left" />
              <Crosshair position="bottom-right" />

              <div className="mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-sm">
                  {category}
                </span>
              </div>

              <h3 className="font-orbitron text-sm font-semibold tracking-wide text-foreground mb-2">
                {name}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {role}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/0 group-hover:bg-primary/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}