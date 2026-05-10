import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Mensagem enviada com sucesso!");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel label="Contato" />
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl tracking-wide text-foreground mb-4">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="font-inter text-base text-muted-foreground leading-relaxed mb-10">
            Entre em contato para saber mais sobre o projeto ou colaborar com a equipe.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                Nome
              </label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-inter focus:border-primary rounded-sm"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                Email
              </label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-inter focus:border-primary rounded-sm"
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
              Mensagem
            </label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Sua mensagem..."
              required
              rows={5}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-inter focus:border-primary rounded-sm resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground font-orbitron text-sm uppercase tracking-wider font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,214,0,0.3)] disabled:opacity-50 flex items-center gap-3"
          >
            <Send className="w-4 h-4" />
            {sending ? "Enviando..." : "Enviar mensagem"}
          </button>
        </motion.form>

        <div className="mt-10 flex items-center gap-3">
          <Mail className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">
            sylvatech101@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}