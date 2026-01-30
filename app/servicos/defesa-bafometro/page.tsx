"use client"

import { motion } from "framer-motion"
import {
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  FileText,
  AlertTriangle,
  Scale,
  Users,
  Award,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function DefesaBafometroPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "Análise detalhada do auto de infração e procedimento",
    "Identificação de irregularidades técnicas e formais",
    "Recursos administrativos em todas as instâncias",
    "Defesa judicial se necessário",
    "Acompanhamento de todos os prazos",
    "Estratégia personalizada para cada caso",
  ]

  const documents = [
    "CNH (Carteira Nacional de Habilitação)",
    "Auto de Infração ou Notificação da Multa",
    "CRLV (Certificado de Registro e Licenciamento do Veículo)",
    "Documentos pessoais (RG e CPF)",
    "Eventuais testemunhas ou provas que possui",
    "Histórico da abordagem (se disponível)",
  ]

  const faqs = [
    {
      question: "Posso recusar o teste do bafômetro?",
      answer:
        "Sim, você pode recusar, mas a recusa também configura infração gravíssima com as mesmas penalidades. No entanto, há defesas específicas mesmo em caso de recusa, especialmente se houver vícios no procedimento da abordagem.",
    },
    {
      question: "Quais são as penalidades da multa de bafômetro?",
      answer:
        "A penalidade inclui multa de R$ 2.934,70, suspensão da CNH por 12 meses e retenção do veículo. Em casos de reincidência dentro de 12 meses, pode haver cassação da CNH.",
    },
    {
      question: "Quais são as chances de reverter a multa?",
      answer:
        "As chances dependem das particularidades de cada caso. Irregularidades no procedimento de abordagem, falta de testemunhas, ausência de laudo técnico do equipamento ou erro na notificação são alguns dos pontos que podem levar à absolvição.",
    },
    {
      question: "Quanto tempo tenho para recorrer?",
      answer:
        "O prazo para defesa prévia é de 15 dias corridos a partir da notificação da autuação. É fundamental agir rapidamente para não perder o prazo.",
    },
    {
      question: "Posso dirigir enquanto o processo está em andamento?",
      answer:
        "Depende. Se houver efeito suspensivo no recurso, você pode continuar dirigindo até a decisão final. Um advogado especializado pode requerer esse efeito.",
    },
    {
      question: "O que acontece se eu perder a CNH?",
      answer:
        "A suspensão da CNH pode afetar sua vida profissional e pessoal. Por isso, é crucial agir rapidamente com a defesa adequada para evitar a suspensão.",
    },
    {
      question: "Quanto custa contratar um advogado para esse caso?",
      answer:
        "O investimento varia conforme a complexidade do caso. Oferecemos consulta gratuita para avaliar sua situação e apresentar um orçamento transparente.",
    },
    {
      question: "A defesa pode ser feita 100% online?",
      answer:
        "Sim! Todo o processo pode ser conduzido de forma remota, incluindo consulta, análise de documentos e acompanhamento processual.",
    },
  ]

  const testimonials = [
    {
      name: "Carlos M.",
      text: "Estava desesperado com a suspensão da minha CNH. O Dr. Gugan analisou meu caso, identificou irregularidades na abordagem e conseguiu reverter a penalidade. Profissional extremamente competente!",
      role: "Motorista Autônomo",
    },
    {
      name: "Ana Paula S.",
      text: "Recebi uma multa por recusa do bafômetro e achei que não havia o que fazer. O advogado foi transparente desde o início, apresentou uma defesa técnica impecável e consegui manter minha habilitação. Muito grata!",
      role: "Empresária",
    },
    {
      name: "Roberto L.",
      text: "Excelente atendimento! Respondeu todas minhas dúvidas, agiu com rapidez e conseguiu resultado positivo. Recomendo totalmente para quem precisa de defesa em trânsito.",
      role: "Executivo",
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
              href="https://wa.me/5561999999999"
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
          <img src="/police-officer-conducting-breathalyzer-test-at-nig.jpg" alt="Defesa Bafômetro" className="w-full h-full object-cover" />
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
              <Shield className="w-12 h-12 text-[#D2D3D5]" />
              <span className="text-[#848688] text-lg">Direito de Trânsito</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#D2D3D5] mb-6 leading-tight">
              Defesa em Multa de Bafômetro (Lei Seca)
            </h1>
            <p className="text-xl text-[#D2D3D5]/90 mb-4 leading-relaxed">
              Proteja sua CNH e evite a suspensão com uma defesa técnica e estratégica.
            </p>
            <p className="text-lg text-[#848688] mb-8 leading-relaxed">
              Receber uma multa por bafômetro pode significar a perda da sua habilitação por 12 meses, além de multa
              pesada. Com mais de 5 anos de experiência, analiso cada detalhe do seu caso para construir a melhor defesa
              possível.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/5561999999999"
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Fale Agora com o Advogado
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">O que é a Defesa em Multa de Bafômetro?</h2>
            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed">
              <p>
                A defesa em multa de bafômetro é o procedimento jurídico que visa anular ou reduzir as penalidades
                aplicadas quando um condutor é autuado por dirigir sob influência de álcool, seja por resultado positivo
                no teste ou por recusa em realizá-lo.
              </p>
              <p>
                Este serviço resolve o problema de suspensão da CNH, multa gravíssima e possível cassação da
                habilitação, que podem comprometer seriamente sua vida profissional e pessoal.
              </p>
              <p className="font-semibold text-[#D2D3D5]">Para quem é este serviço?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Motoristas autuados por teste positivo de bafômetro</li>
                <li>Condutores que recusaram o teste e foram multados</li>
                <li>Profissionais que dependem da CNH para trabalhar</li>
                <li>Pessoas que identificaram irregularidades na abordagem policial</li>
                <li>Quem deseja evitar a suspensão da habilitação</li>
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
                "Você foi abordado e testou positivo no bafômetro",
                "Recusou fazer o teste e recebeu notificação de multa",
                "A CNH foi suspensa ou há risco iminente de suspensão",
                "Identificou erros no procedimento da abordagem",
                "Não havia testemunhas durante a fiscalização",
                "O equipamento não tinha certificação válida",
                "Você depende da CNH para trabalhar",
                "Quer evitar reincidência e cassação da habilitação",
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
              Problemas Comuns Relacionados a Multas de Bafômetro
            </h2>
            <div className="space-y-6">
              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Dores Mais Comuns dos Clientes</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Perda imediata da capacidade de dirigir</li>
                  <li>• Impossibilidade de trabalhar (motoristas profissionais, representantes comerciais)</li>
                  <li>• Constrangimento social e familiar</li>
                  <li>• Multa elevada (quase R$ 3.000)</li>
                  <li>• Risco de cassação em caso de reincidência</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Erros Frequentes Cometidos pelos Órgãos</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Abordagem sem a presença de duas testemunhas</li>
                  <li>• Uso de equipamento sem calibração ou certificação válida</li>
                  <li>• Ausência de laudo técnico do bafômetro</li>
                  <li>• Notificação enviada fora do prazo legal</li>
                  <li>• Falta de fundamentação adequada no auto de infração</li>
                  <li>• Procedimento realizado de forma irregular ou coercitiva</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#D2D3D5]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Riscos de Não Agir Rapidamente</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Perda do prazo de defesa (15 dias)</li>
                  <li>• Confirmação automática da suspensão da CNH</li>
                  <li>• Impossibilidade de reverter a penalidade</li>
                  <li>• Comprometimento da vida profissional e pessoal</li>
                  <li>• Dificuldade em obter efeito suspensivo</li>
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
                    "Entre em contato via WhatsApp, telefone ou e-mail. A consulta inicial é gratuita e sigilosa. Vamos entender sua situação e os detalhes da autuação.",
                },
                {
                  step: "2",
                  title: "Análise Técnica dos Documentos",
                  description:
                    "Você envia os documentos (CNH, auto de infração, notificação). Faço uma análise minuciosa para identificar irregularidades, vícios processuais e oportunidades de defesa.",
                },
                {
                  step: "3",
                  title: "Definição da Estratégia Jurídica",
                  description:
                    "Apresento um diagnóstico completo do seu caso, as chances de êxito e a estratégia mais adequada (defesa prévia, recurso administrativo ou ação judicial).",
                },
                {
                  step: "4",
                  title: "Execução da Defesa",
                  description:
                    "Elaboro e protocolo a defesa, recurso ou ação judicial dentro dos prazos legais. Acompanho todas as etapas do processo com rigor técnico.",
                },
                {
                  step: "5",
                  title: "Atualização Contínua",
                  description:
                    "Você recebe atualizações constantes sobre o andamento do processo. Transparência e comunicação são prioridades no atendimento.",
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
                  title: "Segurança Jurídica",
                  description: "Defesa fundamentada em legislação e jurisprudência atualizada",
                },
                {
                  icon: AlertTriangle,
                  title: "Redução de Riscos",
                  description: "Minimiza as chances de suspensão ou cassação da CNH",
                },
                {
                  icon: Clock,
                  title: "Agilidade Processual",
                  description: "Cumprimento rigoroso de todos os prazos legais",
                },
                {
                  icon: Scale,
                  title: "Economia de Tempo e Dinheiro",
                  description: "Evita custos com renovação de processos e perda de renda",
                },
                {
                  icon: FileText,
                  title: "Manutenção da CNH",
                  description: "Maior probabilidade de manter sua habilitação válida",
                },
                {
                  icon: Award,
                  title: "Correção de Falhas",
                  description: "Identificação e exploração de vícios processuais",
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
                  description: "Você não é um número. Cada caso recebe atenção personalizada.",
                },
                {
                  icon: Lock,
                  title: "Transparência Total",
                  description: "Informações claras sobre prazos, custos e chances reais de êxito.",
                },
                {
                  icon: Clock,
                  title: "Respostas Rápidas",
                  description: "Retorno ágil às suas dúvidas e atualizações constantes.",
                },
                {
                  icon: Scale,
                  title: "Estratégias Fundamentadas",
                  description: "Defesas baseadas em amplo conhecimento técnico e jurisprudencial.",
                },
                {
                  icon: FileText,
                  title: "Análise Minuciosa",
                  description: "Revisão detalhada de cada documento e prazo do processo.",
                },
                {
                  icon: Award,
                  title: "Experiência Comprovada",
                  description: "Mais de 5 anos de atuação em Direito de Trânsito e Veicular.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D2D3D5] to-[#848688] rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-[#11114E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#D2D3D5] mb-2">{item.title}</h3>
                  <p className="text-[#848688] text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Detalhadas */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-8">O Que Está Incluído no Serviço</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-[#11114E] border border-[#848688]/30 p-5 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-[#D2D3D5] flex-shrink-0 mt-1" />
                  <p className="text-[#D2D3D5]/90 text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentos Necessários */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-8">Documentos Necessários</h2>
            <div className="bg-[#1a1a5e]/40 border border-[#848688]/30 p-8 rounded-lg">
              <p className="text-[#D2D3D5]/80 mb-6">
                Para iniciar sua defesa, você precisará fornecer os seguintes documentos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-1" />
                    <p className="text-[#D2D3D5]/90">{doc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#848688] mt-6 text-sm">
                * Todos os documentos podem ser enviados de forma digital (fotos ou PDFs) via WhatsApp ou e-mail.
              </p>
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
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-[#1a1a5e]/30 transition-colors"
                  >
                    <span className="text-[#D2D3D5] font-semibold text-lg pr-4">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#D2D3D5] text-2xl flex-shrink-0"
                    >
                      ↓
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#848688] leading-relaxed">{faq.answer}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">O Que Dizem Nossos Clientes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a5e]/40 border border-[#848688]/30 p-6 rounded-lg"
                >
                  <div className="text-[#D2D3D5] text-4xl mb-4">"</div>
                  <p className="text-[#D2D3D5]/80 mb-4 italic leading-relaxed">{testimonial.text}</p>
                  <div className="border-t border-[#848688]/30 pt-4">
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
      <section className="py-20 bg-gradient-to-r from-[#1a1a5e] to-[#11114E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#D2D3D5] mb-6">Não Deixe Sua CNH em Risco</h2>
            <p className="text-xl text-[#D2D3D5]/80 mb-8 leading-relaxed">
              O prazo para defesa é de apenas 15 dias. Cada minuto conta. Entre em contato agora e proteja seu direito
              de dirigir.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-8">
              <a
                href="https://wa.me/5561999999999"
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-10 py-5 rounded-lg text-xl font-bold hover:bg-white transition-all shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                Falar com Advogado Especialista
              </a>
            </motion.div>
            <div className="flex items-center justify-center gap-2 text-[#848688] text-sm">
              <Lock className="w-4 h-4" />
              <p>Atendimento sigiloso e confidencial garantido</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a2e] border-t border-[#848688]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif text-[#D2D3D5] mb-4">Dr. Gugan Pimentel Di Garcia</h3>
              <p className="text-[#848688] text-sm leading-relaxed">
                OAB/DF 79.271
                <br />
                Advogado especialista em Direito de Trânsito e Direito Veicular
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#D2D3D5] mb-4">Contato</h4>
              <div className="space-y-2 text-[#848688] text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (61) 99999-9999
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contato@guganpimentel.adv.br
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#D2D3D5] mb-4">Localização</h4>
              <p className="text-[#848688] text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                Brasília - DF
                <br />
                Atendimento em todo o Brasil
              </p>
            </div>
          </div>
          <div className="border-t border-[#848688]/20 pt-8 text-center text-[#848688] text-sm">
            <p>&copy; 2025 Dr. Gugan Pimentel Di Garcia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
