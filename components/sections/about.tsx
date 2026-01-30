"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Scale, Users, CheckCircle } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-muted/20 to-primary/20 rounded-2xl blur-2xl" />
            <motion.img
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="/gugan-img.jpeg"
              alt="Dr. Gugan Pimentel Di Garcia - Advogado especialista"
              className="rounded-2xl shadow-2xl relative z-10 border border-border/20 w-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-gradient-to-br from-primary via-muted to-secondary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-xl glow z-20"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">5+</div>
                <div className="text-xs md:text-sm opacity-90">Anos de Experiência</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">
                  Sobre o Advogado
                </Badge>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-balance"
              >
                Dr. Gugan Pimentel Di Garcia
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-3 md:space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed"
              >
                <p>
                  Advogado especialista em Direito de Trânsito e Direito Veicular, atuando há mais de 5 anos na área,
                  com ampla experiência na defesa de condutores e proprietários de veículos.
                </p>
                <p>
                  Atua de forma técnica e estratégica em processos administrativos e judiciais que envolvem infrações de
                  trânsito, suspensão de CNH, busca e apreensão, contratos de financiamento e revisões contratuais.
                </p>
                <p>
                  Atualmente é Vice-Presidente da Comissão de Direito de Trânsito da OAB/DF – Subseção Águas Claras,
                  posição que reflete seu compromisso com o aprimoramento jurídico e a defesa dos direitos dos
                  motoristas.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {[
                { icon: Award, title: "OAB/DF 79.271", subtitle: "Registro Profissional" },
                { icon: Scale, title: "Vice-Presidente", subtitle: "Comissão Direito de Trânsito" },
                { icon: Users, title: "500+ Casos", subtitle: "Resolvidos com Sucesso" },
                { icon: CheckCircle, title: "Atuação Técnica", subtitle: "Precisão e Ética" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-3 md:p-4 flex items-center space-x-3">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm md:text-base">{item.title}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">{item.subtitle}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-4 md:p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-muted/10 to-secondary/10 border border-accent/20"
            >
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                <span className="text-accent font-semibold">"</span>
                Seu trabalho é reconhecido pela precisão técnica, pela atuação ética e pela busca constante de soluções
                eficazes para cada caso concreto.
                <span className="text-accent font-semibold">"</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
