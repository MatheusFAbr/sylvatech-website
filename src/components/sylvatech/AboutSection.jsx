import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Crosshair from "./Crosshair";
import { Users, Target, Lightbulb } from "lucide-react";

const STATS = [
  { icon: Users, value: "2", label: "Desenvolvedores" },
  { icon: Target, value: "1", label: "Projeto em foco" },
  { icon: Lightbulb, value: "∞", label: "Inovação" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel label="Sobre a equipe" />

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-orbitron font-bold text-3xl sm:text-4xl tracking-wide text-foreground mb-6">
                Quem é a <span className="text-primary">SylvaTech</span>?
              </h2>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mb-6">
                Equipe formada por estudantes de Desenvolvimento de Software Multiplataforma
                da FATEC Registro, focados em soluções tecnológicas inovadoras para
                problemas reais.
              </p>
              <p className="font-inter text-base text-muted-foreground leading-relaxed">
                Combinamos conhecimento em inteligência artificial, desenvolvimento web e
                análise de dados para criar ferramentas que fazem a diferença no
                monitoramento e preservação ambiental.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative bg-card border border-border rounded-sm p-6 text-center"
                >
                  <Crosshair position="top-left" />
                  <Crosshair position="bottom-right" />
                  <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
                  <div className="font-orbitron font-bold text-2xl text-foreground mb-1">
                    {value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}