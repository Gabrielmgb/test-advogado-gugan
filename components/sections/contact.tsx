"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  const contactCards = [
    {
      icon: Phone,
      title: "Telefone",
      main: "(11) 99999-9999",
      subtitle: "WhatsApp e Ligações",
      info: "Atendimento de seg. a sex., 9h às 18h",
    },
    {
      icon: Mail,
      title: "E-mail",
      main: "contato@advogado.com.br",
      subtitle: "E-mail Profissional",
      info: "Resposta em até 24 horas",
    },
    {
      icon: MapPin,
      title: "Endereço",
      main: "Av. Paulista, 1000",
      subtitle: "São Paulo, SP",
      info: "Atendimento presencial com agendamento",
    },
    {
      icon: Clock,
      title: "Horário",
      main: "Seg. a Sex.: 9h às 18h",
      subtitle: "Sábados: 9h às 13h",
      info: "Atendimento emergencial sob consulta",
    },
  ]

  return (
    <section id="contato" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-6 text-base px-6 py-2">
            Entre em Contato
          </Badge>
          <h2 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-muted to-secondary bg-clip-text text-transparent">
            Agende sua Consulta
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e resolva sua questão de trânsito com segurança jurídica e atendimento
            personalizado
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary via-muted to-secondary rounded-2xl flex items-center justify-center flex-shrink-0"
                      >
                        <card.icon className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                        <p className="text-2xl font-semibold text-primary mb-1">{card.main}</p>
                        <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                        <p className="text-sm text-muted-foreground mt-2">{card.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary/10 via-muted/10 to-secondary/10 p-10 rounded-2xl border border-accent/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-2xl">Consulta Inicial Gratuita</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Oferecemos uma avaliação inicial sem custos para entender seu caso e apresentar as melhores estratégias
                jurídicas disponíveis.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg text-lg py-6"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Consulta Gratuita
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-secondary/10 via-muted/10 to-primary/10 p-10 rounded-2xl border border-accent/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-2xl">Atendimento Rápido</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Resposta garantida em até 24 horas. Casos urgentes recebem atendimento prioritário para garantir seus
                direitos.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-lg py-6 bg-transparent"
                  onClick={() => (window.location.href = "tel:+5511999999999")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
