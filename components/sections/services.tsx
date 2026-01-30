"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Gavel, TrendingUp, Car, FileText, AlertCircle, UserCheck, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Services() {
  const router = useRouter()

  const handleServiceClick = (slug: string) => {
    router.push(`/${slug}`)
    window.scrollTo(0, 0)
  }
  const services = [
    {
      icon: Shield,
      title: "Defesa em Multa de Bafômetro (Lei Seca)",
      description: "Análise completa do auto de infração, identificando nulidades e falhas no procedimento",
      features: [
        "Notificações fora do prazo legal",
        "Equipamentos sem aferição INMETRO",
        "Falta de comprovação da recusa",
        "Ausência de dupla notificação",
      ],
      color: "from-red-500/20 to-orange-500/20",
      slug: "servicos/defesa-bafometro",
    },
    {
      icon: Gavel,
      title: "Suspensão e Cassação da CNH",
      description: "Defesa técnica em processos de suspensão ou cassação da carteira de habilitação",
      features: [
        "Cálculo incorreto de pontuação",
        "Notificações inválidas ou fora do prazo",
        "Falta de trânsito em julgado",
        "Penalidades aplicadas duplicadamente",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      slug: "servicos/suspensao-cnh",
    },
    {
      icon: TrendingUp,
      title: "Ação Revisional de Financiamento",
      description: "Identificação de juros abusivos, tarifas irregulares e seguros embutidos sem consentimento",
      features: [
        "Redução do valor das parcelas",
        "Suspensão de cobranças ilegais",
        "Devolução de valores pagos a maior",
        "Reequilíbrio contratual",
      ],
      color: "from-green-500/20 to-emerald-500/20",
      slug: "servicos/revisional-financiamento",
    },
    {
      icon: Car,
      title: "Busca e Apreensão de Veículo",
      description: "Análise jurídica para verificar a validade do procedimento de alienação fiduciária",
      features: [
        "Falhas na notificação de mora",
        "Irregularidades na apreensão",
        "Cobranças abusivas",
        "Descumprimento de prazos legais",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      slug: "servicos/busca-apreensao",
    },
    {
      icon: FileText,
      title: "Defesas Administrativas no DETRAN",
      description: "Análise técnica de autos de infração e elaboração de defesas em todas as instâncias",
      features: [
        "Identificação de vícios formais e materiais",
        "Avaliação de probabilidade de êxito",
        "Controle rigoroso de prazos",
        "Estratégias para manter CNH ativa",
      ],
      color: "from-yellow-500/20 to-amber-500/20",
      slug: "servicos/defesas-administrativas",
    },
    {
      icon: AlertCircle,
      title: "Responsabilidade em Acidentes",
      description: "Defesa de condutores e busca pela reparação de danos para vítimas de acidentes",
      features: [
        "Levantamento técnico de provas",
        "Identificação de responsáveis",
        "Ações de reparação de danos",
        "Acompanhamento com seguradoras",
      ],
      color: "from-rose-500/20 to-red-500/20",
      slug: "servicos/acidentes-transito",
    },
    {
      icon: UserCheck,
      title: "Consultoria e Assistência",
      description: "Consultoria preventiva para empresas com frotas e motoristas profissionais",
      features: [
        "Regularização de pontuação",
        "Acompanhamento de notificações",
        "Orientação sobre boas práticas",
        "Segurança jurídica contínua",
      ],
      color: "from-indigo-500/20 to-violet-500/20",
      slug: "servicos/consultoria-preventiva",
    },
  ]

  return (
    <section id="servicos" className="py-12 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
            Áreas de Atuação
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 text-balance">
            Serviços Especializados
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções jurídicas completas para todas as questões relacionadas ao direito de trânsito e direito
            veicular
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 group relative overflow-hidden h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 via-muted/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
                  >
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                  </motion.div>
                  <CardTitle className="font-serif text-lg md:text-xl leading-tight mb-2 md:mb-3 text-balance">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                  <div className="space-y-2 md:space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                        className="flex items-start space-x-2 md:space-x-3 text-xs md:text-sm group/item"
                      >
                        <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                      variant="ghost"
                      className="w-full mt-4 md:mt-6 group-hover:bg-primary/10 transition-colors text-sm"
                      onClick={() => handleServiceClick(service.slug)}
                    >
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-muted/10 to-secondary/10 border-accent/20 backdrop-blur-sm">
            <CardContent className="p-6 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4">
                Precisa de Assistência Jurídica?
              </h3>
              <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Entre em contato para uma análise detalhada do seu caso. Atuação técnica, ética e focada em resultados.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary via-muted to-secondary hover:opacity-90 transition-opacity text-primary-foreground font-semibold px-6 md:px-8 w-full sm:w-auto"
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
