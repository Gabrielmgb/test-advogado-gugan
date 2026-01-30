"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente profissional! Conseguiu reverter minha multa e evitou a suspensão da minha CNH. Recomendo!",
      rating: 5,
      case: "Recurso de Multa",
    },
    {
      name: "João Santos",
      text: "Dr. Gugan me ajudou com um caso complexo de cassação. Profissionalismo e competência excepcionais.",
      rating: 5,
      case: "Defesa de Cassação",
    },
    {
      name: "Ana Costa",
      text: "Atendimento personalizado e resultados eficazes. Consegui manter minha carteira graças ao seu trabalho.",
      rating: 5,
      case: "Suspensão de CNH",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-6">
            Depoimentos
          </Badge>
          <h2 className="text-4xl font-serif font-bold mb-6">O que nossos clientes dizem</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="border-border/50 bg-card/50 shadow-2xl">
            <CardContent className="p-12">
              <div className="flex items-center justify-between mb-8">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center flex-1 mx-12"
                  >
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className="w-6 h-6 fill-accent text-accent" />
                        </motion.div>
                      ))}
                    </div>
                    <blockquote className="text-xl italic mb-6 text-balance leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="space-y-2">
                      <cite className="font-semibold text-accent text-lg">{testimonials[currentTestimonial].name}</cite>
                      <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].case}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-accent" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
