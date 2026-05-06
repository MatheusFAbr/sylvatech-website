import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Crosshair from "./Crosshair";
import { Camera, Brain, MapPin, BarChart3 } from "lucide-react";
import AI_IMG from "../../imgs/painel_tecnologico.png";

const FEATURES = [
  { icon: Camera, title: "Captura de imagens", desc: "Registro fotográfico de plantações com alta resolução" },
  { icon: Brain, title: "Detecção com IA", desc: "Análise neural para identificação de padrões" },
  { icon: MapPin, title: "Geolocalização", desc: "Mapeamento GPS preciso das áreas monitoradas" },
  { icon: BarChart3, title: "Dashboard", desc: "Painel de dados em tempo real para tomada de decisão" },
];

export default function ProjectSection() {
  return (
    <section id="project" className="relative py-24 lg:py-32">
      {/* Horizontal grid line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel label="Projeto em destaque" />

          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl tracking-wide text-foreground mb-4">
            Sylva<span className="text-primary">AI</span>
          </h2>
          <p className="font-inter text-base text-muted-foreground leading-relaxed max-w-2xl mb-12">
            Sistema inteligente para detecção de ninhos da vespa-da-madeira em plantações de pinus, utilizando análise de imagens capturadas por drone e técnicas de inteligência artificial. A solução permite o monitoramento automatizado das áreas florestais, auxiliando produtores e técnicos na identificação precoce de infestações e na tomada de decisões mais rápidas e assertivas.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Large cell - AI visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 lg:row-span-2 relative bg-card border border-border rounded-sm overflow-hidden group"
          >
            <Crosshair position="top-left" />
            <Crosshair position="top-right" />
            <Crosshair position="bottom-left" />
            <Crosshair position="bottom-right" />
            <img
              src={AI_IMG}
              alt="SylvaAI detection interface"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            {/* Simulated stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1">
                    Precisão
                  </div>
                  <div className="font-orbitron font-bold text-2xl text-foreground">98%</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1">
                    Velocidade
                  </div>
                  <div className="font-orbitron font-bold text-2xl text-foreground">45ms</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1">
                    GPS Sync
                  </div>
                  <div className="font-orbitron font-bold text-2xl text-foreground">Ativo</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature cards */}
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-card border border-border rounded-sm p-6 group hover:border-primary/40 transition-all duration-500"
            >
              <Crosshair position="top-right" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-orbitron text-sm font-semibold tracking-wide text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}