"use client"

import { motion } from "framer-motion"
import { FileSearch, MessageSquare, Gavel, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consulta Inicial Gratuita",
    description:
      "Entre em contato via WhatsApp ou telefone. Analisamos seu caso e fornecemos uma avaliação preliminar sem compromisso.",
    color: "from-[#D2D3D5] to-[#848688]",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Análise Técnica Detalhada",
    description:
      "Realizamos um estudo aprofundado do seu processo, identificando todas as possibilidades de defesa e estratégias aplicáveis.",
    color: "from-[#848688] to-[#D2D3D5]",
  },
  {
    icon: Gavel,
    number: "03",
    title: "Atuação Estratégica",
    description:
      "Elaboramos e protocolamos as defesas necessárias, acompanhando cada etapa do processo com total transparência.",
    color: "from-[#D2D3D5] to-[#848688]",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Resultado e Acompanhamento",
    description: "Mantemos você informado sobre cada decisão e continuamos disponíveis para orientações futuras.",
    color: "from-[#848688] to-[#D2D3D5]",
  },
]

export function Process() {
  return (
    <section id="processo" className="py-24 relative overflow-hidden">
      {/* Background banner with gradient overlay */}
      <div className="absolute inset-0">
        <img src="/elegant-law-office-interior-with-modern-design.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#11114E]/95 via-[#11114E]/90 to-[#1a1a5e]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11114E] via-transparent to-transparent" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D2D3D5] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#848688] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#D2D3D5]/10 border border-[#D2D3D5]/20 rounded-full text-[#D2D3D5] text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#D2D3D5] mb-4">Processo de Atendimento</h2>
          <p className="text-[#848688] text-lg max-w-2xl mx-auto">
            Um processo transparente e eficiente, do primeiro contato até a solução do seu caso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D2D3D5]/20 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="group relative bg-[#11114E]/50 backdrop-blur-sm border border-[#D2D3D5]/10 rounded-2xl p-8 hover:border-[#D2D3D5]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D2D3D5]/5 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#D2D3D5] to-[#848688] rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-serif text-2xl font-bold text-[#11114E]">{step.number}</span>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-[#11114E]" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-[#D2D3D5] mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#848688] leading-relaxed group-hover:text-[#D2D3D5]/80 transition-colors">
                  {step.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#D2D3D5]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5561999999999"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold rounded-full hover:shadow-2xl hover:shadow-[#D2D3D5]/20 transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-5 h-5" />
            Iniciar Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  )
}
