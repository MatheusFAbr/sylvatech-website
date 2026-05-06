import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Crosshair from "./Crosshair";
import { Github, Linkedin } from "lucide-react";

import MATHEUS_IMG from "../../imgs/matheus.png";
import VICTOR_IMG from "../../imgs/victor.png";

const MEMBERS = [
  {
    name: "Matheus Ferrari Abrahão",
    role: "Desenvolvedor Full-Stack",
    desc: "Desenvolvedor Full-Stack e estudante de DSM, com foco em aplicações web e inteligência artificial aplicada ao monitoramento ambiental.",
    photo: MATHEUS_IMG,
    github: "https://github.com/MatheusFAbr", 
    linkedin: "https://linkedin.com/in/matheus-ferrari-abrahao/", 
  },
  {
    name: "Victor Henrique Costa Roder",
    role: "Desenvolvedor Full-Stack",
    desc: "Desenvolvedor Full-Stack e estudante de DSM, com foco em sistemas multiplataforma e análise de dados aplicados à área florestal.",
    photo: VICTOR_IMG,
    github: "https://github.com/victorroder",
    linkedin: "https://linkedin.com/in/victor-röder-683770204/",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 lg:py-32">
      {/* Linha superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel label="Equipe" />

          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl tracking-wide text-foreground mb-12">
            Os <span className="text-primary">arquitetos</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {MEMBERS.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative bg-card border border-border rounded-sm overflow-hidden group"
            >
              <Crosshair position="top-left" />
              <Crosshair position="top-right" />

              {/* FOTO */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Overlay amarelo */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />

                {/* Social */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-background/90 backdrop-blur-sm px-6 py-3 mb-6 rounded-sm flex items-center gap-4 border border-border">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="p-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary mb-2 block">
                  {member.role}
                </span>

                <h3 className="font-orbitron text-base font-semibold tracking-wide text-foreground mb-3">
                  {member.name}
                </h3>

                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}