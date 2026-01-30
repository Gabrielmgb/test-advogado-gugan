"use client"

import { motion } from "framer-motion"
import {
  FileText,
  CheckCircle,
  Phone,
  Clock,
  ArrowLeft,
  AlertTriangle,
  Scale,
  Users,
  Award,
  Lock,
  Shield,
  MessageCircle,
  ClipboardList,
  Building2,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function DefesasAdministrativasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "Defesa prévia contra autuações de trânsito",
    "Recursos administrativos em 1ª e 2ª instâncias",
    "Contestação de multas irregulares",
    "Acompanhamento de processos no DETRAN",
    "Análise técnica de autos de infração",
    "Monitoramento de prazos e notificações",
  ]

  const documents = [
    "CNH (Carteira Nacional de Habilitação)",
    "CRLV do veículo",
    "Auto de Infração ou Notificação da Multa",
    "Fotos ou vídeos que comprovem irregularidades (se houver)",
    "Documentos pessoais (RG e CPF)",
    "Comprovante de residência atualizado",
    "Notificações anteriores (se houver)",
    "Histórico de pontuação na CNH",
  ]

  const faqs = [
    {
      question: "Qual o prazo para apresentar defesa de multa de trânsito?",
      answer:
        "O prazo para defesa prévia é de 15 dias corridos a partir da data de recebimento da Notificação de Autuação. Já para recurso em 1ª instância (JARI), o prazo é de 30 dias após a notificação da penalidade. É fundamental respeitar esses prazos para não perder o direito de defesa.",
    },
    {
      question: "Vale a pena recorrer de uma multa de trânsito?",
      answer:
        "Na maioria dos casos, sim. Muitas multas apresentam irregularidades formais ou técnicas que podem levar ao cancelamento. Mesmo em infrações aparentemente corretas, uma análise técnica pode identificar vícios que justifiquem a defesa.",
    },
    {
      question: "Quais são as principais irregularidades em multas de trânsito?",
      answer:
        "As irregularidades mais comuns são: falta de informações obrigatórias no auto de infração, erro na identificação do veículo ou condutor, ausência de testemunhas, equipamento sem aferição válida, notificação enviada fora do prazo, e divergência entre local e hora da infração.",
    },
    {
      question: "Se eu perder na 1ª instância, posso recorrer novamente?",
      answer:
        "Sim, caso a defesa seja indeferida na JARI (1ª instância), ainda é possível apresentar recurso ao CETRAN (2ª instância) no prazo de 30 dias. Em alguns casos, também é possível recorrer ao Judiciário.",
    },
    {
      question: "A pontuação na CNH é suspensa durante o recurso?",
      answer:
        "Enquanto o recurso está em análise, a pontuação correspondente à infração não é computada na CNH. Somente após decisão final desfavorável é que os pontos são efetivamente registrados.",
    },
    {
      question: "Posso recorrer de qualquer tipo de multa?",
      answer:
        "Sim, toda infração de trânsito pode ser objeto de defesa e recurso. Porém, a chance de êxito depende das circunstâncias de cada caso. Uma análise prévia é essencial para avaliar a viabilidade.",
    },
    {
      question: "Quanto tempo demora para ter uma resposta do recurso?",
      answer:
        "O prazo varia conforme o órgão de trânsito. Em média, a JARI tem 30 dias para julgar, e o CETRAN até 60 dias. Na prática, esses prazos podem ser maiores dependendo da demanda do órgão.",
    },
    {
      question: "E se minha CNH estiver prestes a ser suspensa?",
      answer:
        "Se você está próximo do limite de 20 pontos, a defesa de multas pendentes pode evitar a suspensão. Além disso, caso já tenha processo de suspensão, também é possível apresentar defesa específica.",
    },
  ]

  const testimonials = [
    {
      name: "Pedro H.",
      text: "Tinha 3 multas que levariam minha CNH à suspensão. O Dr. Gugan conseguiu cancelar 2 delas por irregularidades que eu nunca teria identificado sozinho. Profissional excelente!",
      role: "Representante Comercial",
    },
    {
      name: "Carla B.",
      text: "Recebi uma multa de velocidade em um local que nunca passei. O advogado conseguiu provar o erro e a multa foi cancelada. Muito competente e atencioso.",
      role: "Engenheira",
    },
    {
      name: "Antônio J.",
      text: "Trabalho com entregas e dependo da CNH. Graças ao Dr. Gugan, consegui reverter várias multas e manter minha habilitação. Atendimento rápido e eficiente.",
      role: "Entregador",
    },
  ]

  return (
    <div className="min-h-screen bg-[#11114E]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#11114E]/95 backdrop-blur-md border-b border-[#848688]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#servicos"
              className="flex items-center gap-2 text-[#D2D3D5] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar</span>
            </Link>
            <Link href="/" className="text-2xl font-serif text-[#D2D3D5]">
              Dr. Gugan Pimentel
            </Link>
            <a
              href="https://wa.me/5561982603812"
              className="bg-[#D2D3D5] text-[#11114E] px-6 py-2 rounded-lg font-medium hover:bg-white transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/administrative-documents-and-detran-forms.jpg" alt="Defesas Administrativas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11114E] via-[#11114E]/95 to-[#11114E]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#11114E]/50 to-[#11114E]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="w-12 h-12 text-[#D2D3D5]" />
              <span className="text-[#848688] text-lg">Direito de Trânsito</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#D2D3D5] mb-6 leading-tight">
              Defesas Administrativas no DETRAN
            </h1>
            <p className="text-xl text-[#D2D3D5]/90 mb-4 leading-relaxed">
              Proteja sua CNH e evite pontos indevidos com defesas técnicas e fundamentadas.
            </p>
            <p className="text-lg text-[#848688] mb-8 leading-relaxed">
              Muitas multas de trânsito apresentam irregularidades que podem levar ao seu cancelamento. Com análise técnica especializada, identificamos vícios e construímos defesas sólidas para proteger sua habilitação.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/5561982603812"
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Analisar Minha Multa
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">O que são Defesas Administrativas no DETRAN?</h2>
            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed">
              <p>
                As defesas administrativas são recursos apresentados junto aos órgãos de trânsito (DETRAN, JARI, CETRAN) para contestar multas e penalidades aplicadas aos condutores. É a primeira linha de defesa antes de qualquer medida judicial.
              </p>
              <p>
                Este serviço visa anular multas irregulares, evitar pontos indevidos na CNH e impedir suspensões ou cassações decorrentes de infrações que podem ser contestadas tecnicamente.
              </p>
              <p className="font-semibold text-[#D2D3D5]">Para quem é este serviço?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Condutores que receberam multas de trânsito</li>
                <li>Motoristas próximos do limite de 20 pontos na CNH</li>
                <li>Quem identificou erros ou irregularidades na multa</li>
                <li>Proprietários notificados por infrações que não cometeram</li>
                <li>Profissionais que dependem da CNH para trabalhar</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quando procurar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-8">Quando Você Deve Procurar Ajuda Jurídica?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Recebeu notificação de multa de trânsito",
                "Identificou erros no auto de infração",
                "A infração foi cometida por outra pessoa",
                "Está próximo do limite de 20 pontos",
                "Recebeu notificação de suspensão da CNH",
                "A multa foi aplicada em local onde você não estava",
                "Suspeita de defeito no equipamento de fiscalização",
                "Quer contestar mas não sabe como",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-[#1a1a5e]/40 p-4 rounded-lg border border-[#848688]/20"
                >
                  <AlertTriangle className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-1" />
                  <p className="text-[#D2D3D5]/90">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problemas Comuns */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">
              Problemas Comuns Relacionados a Multas de Trânsito
            </h2>
            <div className="space-y-6">
              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Dores Mais Comuns dos Clientes</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Acúmulo de pontos que ameaça a CNH</li>
                  <li>• Multas por infrações que não cometeu</li>
                  <li>• Valor elevado das multas comprometendo o orçamento</li>
                  <li>• Desconhecimento sobre como recorrer</li>
                  <li>• Perda de prazos por falta de orientação</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Irregularidades Frequentes nos Autos de Infração</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Falta de informações obrigatórias (local, data, hora exatos)</li>
                  <li>• Ausência de testemunhas quando exigido</li>
                  <li>• Equipamento de fiscalização sem aferição válida</li>
                  <li>• Notificação enviada fora do prazo legal</li>
                  <li>• Erro na identificação do veículo ou condutor</li>
                  <li>• Sinalização inadequada no local da infração</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#D2D3D5]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Riscos de Não Recorrer</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Acúmulo de pontos até a suspensão da CNH</li>
                  <li>• Pagamento de multas indevidas</li>
                  <li>• Perda do direito de dirigir</li>
                  <li>• Comprometimento da vida profissional</li>
                  <li>• Impossibilidade de renovar a CNH</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">Como Funciona o Atendimento</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Contato Inicial",
                  description:
                    "Entre em contato via WhatsApp ou telefone. Envie a foto da notificação ou auto de infração para análise inicial gratuita.",
                },
                {
                  step: "2",
                  title: "Análise Técnica da Multa",
                  description:
                    "Realizamos uma análise minuciosa do auto de infração, verificando todos os requisitos legais e identificando possíveis irregularidades.",
                },
                {
                  step: "3",
                  title: "Estratégia de Defesa",
                  description:
                    "Definimos a melhor estratégia: defesa prévia, recurso à JARI, recurso ao CETRAN ou, se necessário, ação judicial.",
                },
                {
                  step: "4",
                  title: "Elaboração e Protocolo",
                  description:
                    "Elaboramos a defesa ou recurso com fundamentação técnica e jurídica sólida, protocolando dentro dos prazos legais.",
                },
                {
                  step: "5",
                  title: "Acompanhamento do Resultado",
                  description:
                    "Monitoramos o andamento do processo e informamos sobre cada etapa. Se necessário, apresentamos recurso em instância superior.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#D2D3D5] to-[#848688] rounded-full flex items-center justify-center text-[#11114E] text-2xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#D2D3D5] mb-2">{item.title}</h3>
                    <p className="text-[#D2D3D5]/80 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">
              Benefícios de Contratar um Advogado Especializado
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Proteção da CNH",
                  description: "Evite pontos indevidos e preserve sua habilitação",
                },
                {
                  icon: FileText,
                  title: "Defesas Técnicas",
                  description: "Argumentação jurídica sólida e fundamentada",
                },
                {
                  icon: Clock,
                  title: "Controle de Prazos",
                  description: "Monitoramento rigoroso de todos os prazos legais",
                },
                {
                  icon: Scale,
                  title: "Maior Chance de Êxito",
                  description: "Experiência em identificar irregularidades que leigos não percebem",
                },
                {
                  icon: Building2,
                  title: "Conhecimento dos Órgãos",
                  description: "Familiaridade com os procedimentos do DETRAN, JARI e CETRAN",
                },
                {
                  icon: Award,
                  title: "Economia de Dinheiro",
                  description: "Evite pagar multas indevidas e economize a longo prazo",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg hover:border-[#D2D3D5]/50 transition-all"
                >
                  <item.icon className="w-12 h-12 text-[#D2D3D5] mb-4" />
                  <h3 className="text-xl font-semibold text-[#D2D3D5] mb-2">{item.title}</h3>
                  <p className="text-[#848688]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">Diferenciais do Escritório</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Atendimento Humanizado",
                  description: "Cada cliente recebe atenção individualizada.",
                },
                {
                  icon: Lock,
                  title: "Transparência Total",
                  description: "Você sabe as chances reais de cada defesa.",
                },
                {
                  icon: Clock,
                  title: "Respostas Rápidas",
                  description: "Retorno em até 24 horas pelo WhatsApp.",
                },
                {
                  icon: FileText,
                  title: "Análise Minuciosa",
                  description: "Cada detalhe do auto de infração é verificado.",
                },
                {
                  icon: Scale,
                  title: "Experiência Comprovada",
                  description: "Mais de 5 anos de atuação em direito de trânsito.",
                },
                {
                  icon: Award,
                  title: "Vice-Presidente OAB/DF",
                  description: "Comissão de Direito de Trânsito - Subseção Águas Claras.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-6 rounded-lg text-center"
                >
                  <item.icon className="w-10 h-10 text-[#D2D3D5] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#D2D3D5] mb-2">{item.title}</h3>
                  <p className="text-[#848688] text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-8 text-center">O Que Está Incluído no Serviço</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-[#11114E] p-4 rounded-lg border border-[#848688]/20"
                >
                  <CheckCircle className="w-6 h-6 text-[#D2D3D5] flex-shrink-0" />
                  <p className="text-[#D2D3D5]/90">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-8 text-center">Documentos Necessários</h2>
            <div className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-8 rounded-lg">
              <p className="text-[#D2D3D5]/80 mb-6 text-center">
                Para iniciar a análise do seu caso, você precisará dos seguintes documentos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#D2D3D5] flex-shrink-0" />
                    <p className="text-[#D2D3D5]/90">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#11114E] border border-[#848688]/30 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-[#D2D3D5] font-semibold pr-4">{faq.question}</span>
                    <span className="text-[#D2D3D5] text-2xl flex-shrink-0">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-[#848688] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">O Que Nossos Clientes Dizem</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D2D3D5]">★</span>
                    ))}
                  </div>
                  <p className="text-[#D2D3D5]/80 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <p className="text-[#D2D3D5] font-semibold">{testimonial.name}</p>
                    <p className="text-[#848688] text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#11114E] via-[#1a1a5e] to-[#11114E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">Proteja Sua CNH Agora</h2>
            <p className="text-[#D2D3D5]/80 text-lg mb-8 leading-relaxed">
              Não deixe multas indevidas comprometerem sua habilitação. Entre em contato para uma análise gratuita da sua situação.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <motion.a
                href="https://wa.me/5561982603812"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado Especialista
              </motion.a>
              <motion.a
                href="tel:+5561982603812"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 border-2 border-[#D2D3D5] text-[#D2D3D5] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#D2D3D5]/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                (61) 98260-3812
              </motion.a>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#848688]">
              <Lock className="w-4 h-4" />
              <p className="text-sm">Atendimento sigiloso e confidencial. Suas informações estão protegidas.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a2e] border-t border-[#848688]/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#848688]">
            © 2025 Dr. Gugan Pimentel Di Garcia - OAB/DF 79.271. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
