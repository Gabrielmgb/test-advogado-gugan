"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, Phone, Zap, TrendingUp, Users, Award, Eye, Instagram, Facebook, Linkedin, Gavel } from "lucide-react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { icon: TrendingUp, number: "95%", label: "Taxa de Sucesso" },
    { icon: Users, number: "500+", label: "Casos Resolvidos" },
    { icon: Award, number: "5+", label: "Anos de Experiência" },
    { icon: Eye, number: "24h", label: "Resposta Garantida" },
  ]

  return (
    <section id="inicio" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/luxury-car-detail-with-legal-scales-symbol-overlay.png')",
          // transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/90" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground shimmer text-xs md:text-sm text-white">
                <Gavel className="w-3 h-3 md:w-4 md:h-4 mr-2 text-white" />
                Especialista em Direito de Trânsito e Direito Veicular
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-balance leading-tight drop-shadow-2xl"
            >
              Defesa Especializada em
              <span className="text-transparent bg-gradient-to-r from-primary via-muted to-secondary bg-clip-text">
                {" "}
                Direito de Trânsito
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-muted-foreground text-pretty leading-relaxed drop-shadow-lg"
            >
              Atuação técnica e estratégica em processos administrativos e judiciais envolvendo infrações de trânsito,
              suspensão de CNH, busca e apreensão, contratos de financiamento e revisões contratuais. Mais de 5 anos de
              experiência com <span className="text-accent font-semibold">resultados comprovados</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-4 md:py-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 md:p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50"
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-accent mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-xl glow w-full sm:w-auto"
                >
                  <Scale className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Agende sua Consulta
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (11) 99999-9999
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm text-muted-foreground">Siga-nos:</span>
              <div className="flex gap-3">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-br from-primary/30 via-muted/30 to-secondary/30 rounded-2xl blur-3xl animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
