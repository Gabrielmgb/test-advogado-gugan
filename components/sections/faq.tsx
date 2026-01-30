"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo leva para resolver um processo de defesa de multa?",
    answer:
      "O prazo varia conforme a complexidade do caso e a instância em que se encontra. Defesas administrativas no DETRAN geralmente levam de 30 a 90 dias. Já processos judiciais podem levar de 6 meses a 2 anos. Mantemos você informado sobre cada etapa do processo.",
  },
  {
    question: "Posso dirigir enquanto minha CNH está suspensa ou em processo de suspensão?",
    answer:
      "Se você foi notificado da suspensão, não pode dirigir até que a penalidade seja cumprida ou suspensa judicialmente. Porém, durante o processo de defesa administrativa, antes da decisão final, você ainda pode dirigir normalmente. É fundamental buscar orientação jurídica imediatamente ao receber a notificação.",
  },
  {
    question: "Como funciona a consulta inicial gratuita?",
    answer:
      "A consulta inicial é totalmente gratuita e sem compromisso. Você entra em contato via WhatsApp ou telefone, apresenta seu caso, e fazemos uma análise preliminar identificando as possibilidades de defesa. Após essa avaliação, apresentamos uma proposta de honorários caso decida contratar nossos serviços.",
  },
  {
    question: "Quais documentos preciso apresentar para iniciar minha defesa?",
    answer:
      "Geralmente são necessários: auto de infração ou notificação de penalidade, CNH, documento do veículo, comprovante de residência e procuração (que fornecemos). Dependendo do caso, podem ser solicitados documentos adicionais como laudos, fotos ou testemunhas.",
  },
  {
    question: "É possível reverter uma multa de bafômetro (Lei Seca)?",
    answer:
      "Sim, é possível. Analisamos diversos aspectos: validade da notificação, calibração do equipamento, procedimento correto da abordagem, testemunhas, entre outros. Muitas multas de Lei Seca apresentam vícios que podem levar à sua anulação. Cada caso é único e requer análise técnica detalhada.",
  },
  {
    question: "Quanto custa contratar um advogado especializado em trânsito?",
    answer:
      "Os honorários variam conforme a complexidade do caso, a instância (administrativa ou judicial) e o tipo de serviço. Trabalhamos com valores fixos e transparentes, apresentados logo na consulta inicial. Também oferecemos condições de pagamento facilitadas para tornar nossos serviços acessíveis.",
  },
  {
    question: "Posso fazer a defesa sozinho, sem advogado?",
    answer:
      "Tecnicamente sim, mas não é recomendado. A legislação de trânsito é complexa e está em constante mudança. Um advogado especializado conhece os procedimentos, prazos, jurisprudências e estratégias que aumentam significativamente as chances de sucesso. Muitas defesas são indeferidas por erros formais que poderiam ser evitados.",
  },
  {
    question: "O que é ação revisional de financiamento e como ela pode me ajudar?",
    answer:
      "É uma ação judicial que busca revisar contratos de financiamento de veículos que contenham cláusulas abusivas, juros excessivos, tarifas irregulares ou seguros não contratados. O objetivo é reduzir o valor das parcelas, recuperar valores pagos indevidamente e reequilibrar o contrato de forma justa.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background image with traffic law theme */}
      <div className="absolute inset-0 z-0">
        <img src="/traffic-law-background.jpg" alt="Traffic Law Background" className="w-full h-full object-cover" />
        {/* Multiple gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#11114E]/95 via-[#11114E]/90 to-[#1a1a5e]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11114E] via-transparent to-[#11114E]/50" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D2D3D5] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#848688] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#D2D3D5]/10 border border-[#D2D3D5]/20 rounded-full text-[#D2D3D5] text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Tire suas dúvidas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#D2D3D5] mb-4">Perguntas Frequentes</h2>
          <p className="text-[#848688] text-lg max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre direito de trânsito e nossos serviços
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-[#11114E]/50 backdrop-blur-sm border border-[#D2D3D5]/10 rounded-2xl p-6 hover:border-[#D2D3D5]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-[#D2D3D5] mb-2 group-hover:text-white transition-colors pr-8">
                      {faq.question}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#848688] leading-relaxed pt-2 border-t border-[#D2D3D5]/10 mt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D2D3D5]/20 to-[#848688]/20 rounded-full flex items-center justify-center group-hover:from-[#D2D3D5]/30 group-hover:to-[#848688]/30 transition-all">
                      <ChevronDown className="w-5 h-5 text-[#D2D3D5]" />
                    </div>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#D2D3D5]/5 to-[#848688]/5 border border-[#D2D3D5]/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-[#D2D3D5] mb-3">Não encontrou sua resposta?</h3>
            <p className="text-[#848688] mb-6">
              Entre em contato conosco e teremos prazer em esclarecer todas as suas dúvidas
            </p>
            <a
              href="https://wa.me/5561999999999"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold rounded-full hover:shadow-2xl hover:shadow-[#D2D3D5]/20 transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
