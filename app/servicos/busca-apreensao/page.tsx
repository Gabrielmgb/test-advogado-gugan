"use client"

import { motion } from "framer-motion"
import {
  Car,
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
  Shield,
  MessageCircle,
  Gavel,
  HandshakeIcon,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BuscaApreensaoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "Análise imediata do processo de busca e apreensão",
    "Contestação de irregularidades processuais",
    "Negociação direta com a instituição financeira",
    "Pedido de suspensão da liminar de apreensão",
    "Defesa judicial completa em todas as instâncias",
    "Estratégias para recuperação do veículo apreendido",
  ]

  const documents = [
    "Contrato de Financiamento do veículo",
    "Notificação ou citação da ação de busca e apreensão",
    "Comprovantes de pagamento das parcelas (se houver)",
    "CRLV do veículo",
    "Documentos pessoais (RG e CPF)",
    "Comprovante de residência atualizado",
    "Auto de apreensão (se o veículo já foi levado)",
    "Qualquer correspondência recebida do banco",
  ]

  const faqs = [
    {
      question: "O que é busca e apreensão de veículos?",
      answer:
        "É uma ação judicial movida pela instituição financeira para retomar a posse do veículo financiado quando há inadimplência no pagamento das parcelas. O juiz pode conceder uma liminar permitindo a apreensão do veículo antes mesmo da citação do devedor.",
    },
    {
      question: "Meu veículo pode ser apreendido sem aviso prévio?",
      answer:
        "Sim, infelizmente a lei permite que o juiz conceda liminar de busca e apreensão sem ouvir previamente o devedor. Por isso, se você está inadimplente, é importante buscar orientação jurídica o quanto antes.",
    },
    {
      question: "É possível recuperar um veículo já apreendido?",
      answer:
        "Sim, há possibilidades de recuperação através de negociação com o banco, pagamento das parcelas em atraso (purgação da mora) ou questionamento judicial de irregularidades no processo ou no contrato.",
    },
    {
      question: "Quanto tempo tenho para agir após a apreensão?",
      answer:
        "O tempo é crucial. Após a apreensão, você geralmente tem 5 dias para purgar a mora (pagar as parcelas atrasadas). Após esse prazo, o veículo pode ser consolidado em nome do credor. Por isso, busque ajuda imediatamente.",
    },
    {
      question: "Posso contestar a busca e apreensão?",
      answer:
        "Sim! Existem diversas teses de defesa, como irregularidades no contrato, cobranças abusivas, falta de notificação prévia, vícios processuais, entre outras. Cada caso deve ser analisado individualmente.",
    },
    {
      question: "Se eu pagar as parcelas atrasadas, recupero o carro?",
      answer:
        "Dentro do prazo de purgação da mora (geralmente 5 dias após a apreensão), o pagamento integral das parcelas em atraso, com encargos, permite a devolução do veículo. Após esse prazo, a situação fica mais complexa.",
    },
    {
      question: "A ação revisional pode ajudar em caso de busca e apreensão?",
      answer:
        "Sim, muitas vezes combinamos a defesa na busca e apreensão com uma ação revisional para questionar juros abusivos e cobranças indevidas, o que pode reduzir significativamente o valor da dívida.",
    },
    {
      question: "Quanto custa a defesa em busca e apreensão?",
      answer:
        "O valor depende da complexidade do caso e das estratégias necessárias. Oferecemos consulta gratuita para avaliar sua situação e apresentar um orçamento transparente.",
    },
  ]

  const testimonials = [
    {
      name: "João Pedro M.",
      text: "Meu carro ia ser apreendido no dia seguinte. Liguei desesperado e o Dr. Gugan agiu na hora, conseguiu suspender a liminar e negociar um acordo com o banco. Salvou meu patrimônio!",
      role: "Motorista de Aplicativo",
    },
    {
      name: "Luciana R.",
      text: "Meu veículo já tinha sido levado há 3 dias quando procurei ajuda. Achei que estava tudo perdido, mas o advogado encontrou irregularidades no processo e conseguimos recuperar o carro. Incrível!",
      role: "Comerciante",
    },
    {
      name: "Thiago S.",
      text: "Atendimento urgente de verdade. Respondeu no final de semana e já na segunda-feira entrou com a defesa. Profissional sério e competente. Recomendo muito!",
      role: "Vendedor",
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
          <img src="/tow-truck-removing-vehicle-at-night.jpg" alt="Busca e Apreensão de Veículos" className="w-full h-full object-cover" />
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
              <Car className="w-12 h-12 text-[#D2D3D5]" />
              <span className="text-[#848688] text-lg">Atendimento Urgente</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#D2D3D5] mb-6 leading-tight">
              Defesa em Busca e Apreensão de Veículos
            </h1>
            <p className="text-xl text-[#D2D3D5]/90 mb-4 leading-relaxed">
              Seu veículo está ameaçado ou já foi apreendido? Aja rápido para proteger seu patrimônio.
            </p>
            <p className="text-lg text-[#848688] mb-8 leading-relaxed">
              Atuamos de forma estratégica e urgente para contestar a medida, negociar com o credor e buscar a melhor solução para manter ou recuperar seu veículo. Tempo é essencial - entre em contato agora.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/5561982603812"
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Atendimento Urgente 24h
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">O que é a Defesa em Busca e Apreensão?</h2>
            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed">
              <p>
                A busca e apreensão é uma medida judicial que permite ao credor (banco ou financeira) retomar a posse do veículo financiado quando há inadimplência. É uma situação urgente que exige ação imediata.
              </p>
              <p>
                A defesa em busca e apreensão consiste em contestar juridicamente essa medida, identificando irregularidades no processo ou no contrato, negociando com o credor e buscando alternativas para evitar a perda do veículo.
              </p>
              <p className="font-semibold text-[#D2D3D5]">Para quem é este serviço?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Quem recebeu notificação de ação de busca e apreensão</li>
                <li>Proprietários que tiveram o veículo apreendido recentemente</li>
                <li>Pessoas com parcelas atrasadas que temem a apreensão</li>
                <li>Quem quer negociar a dívida antes que seja tarde</li>
                <li>Condutores que identificaram cobranças abusivas no financiamento</li>
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
                "Recebeu notificação ou citação de busca e apreensão",
                "Seu veículo foi apreendido pela financeira",
                "Está com parcelas em atraso há mais de 30 dias",
                "Recebeu ligações ameaçadoras do banco",
                "Quer negociar a dívida antes da judicialização",
                "Suspeita de cobranças abusivas no contrato",
                "Não consegue mais pagar as parcelas",
                "Precisa do veículo para trabalhar",
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
              Problemas Comuns em Casos de Busca e Apreensão
            </h2>
            <div className="space-y-6">
              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Dores Mais Comuns dos Clientes</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Medo de perder o veículo de uma hora para outra</li>
                  <li>• Desespero por não conseguir pagar as parcelas</li>
                  <li>• Dependência do veículo para trabalho e sustento</li>
                  <li>• Constrangimento com abordagem de oficiais de justiça</li>
                  <li>• Sensação de impotência diante do banco</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Irregularidades Frequentes</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Falta de notificação prévia obrigatória</li>
                  <li>• Juros e encargos abusivos no contrato</li>
                  <li>• Capitalização indevida de juros</li>
                  <li>• Cobrança de tarifas ilegais (TAC, TEC)</li>
                  <li>• Cálculo incorreto do saldo devedor</li>
                  <li>• Vícios processuais na ação judicial</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#D2D3D5]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Riscos de Não Agir Rapidamente</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Perda definitiva do veículo</li>
                  <li>• Consolidação da propriedade em nome do banco</li>
                  <li>• Perda do prazo de purgação da mora (5 dias)</li>
                  <li>• Venda do veículo em leilão por valor abaixo do mercado</li>
                  <li>• Cobrança do saldo remanescente mesmo após perda do bem</li>
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
                  title: "Atendimento Urgente",
                  description:
                    "Entre em contato imediatamente pelo WhatsApp ou telefone. Atendemos urgências 24 horas porque sabemos que tempo é crucial nesses casos.",
                },
                {
                  step: "2",
                  title: "Análise Rápida do Caso",
                  description:
                    "Avaliamos imediatamente sua situação: se há ação em curso, se o veículo já foi apreendido, quais são os prazos e as melhores estratégias disponíveis.",
                },
                {
                  step: "3",
                  title: "Defesa ou Negociação",
                  description:
                    "Dependendo do caso, entramos com defesa judicial para suspender a liminar, contestamos irregularidades ou iniciamos negociação direta com o banco.",
                },
                {
                  step: "4",
                  title: "Ação Revisional (se necessário)",
                  description:
                    "Quando identificamos cobranças abusivas, combinamos a defesa com uma ação revisional para reduzir o valor da dívida.",
                },
                {
                  step: "5",
                  title: "Acompanhamento Completo",
                  description:
                    "Acompanhamos todo o processo até a resolução final, seja pela recuperação do veículo, acordo com o banco ou decisão judicial favorável.",
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
                  title: "Proteção do Patrimônio",
                  description: "Estratégias para evitar a perda definitiva do seu veículo",
                },
                {
                  icon: Gavel,
                  title: "Suspensão da Liminar",
                  description: "Possibilidade de suspender a ordem de apreensão judicialmente",
                },
                {
                  icon: HandshakeIcon,
                  title: "Negociação Eficaz",
                  description: "Intermediação de acordos vantajosos com a instituição financeira",
                },
                {
                  icon: Scale,
                  title: "Revisão Contratual",
                  description: "Identificação e contestação de cobranças abusivas",
                },
                {
                  icon: Car,
                  title: "Recuperação do Veículo",
                  description: "Estratégias para reaver o veículo já apreendido",
                },
                {
                  icon: Clock,
                  title: "Atendimento Ágil",
                  description: "Resposta rápida em situações urgentes - tempo é essencial",
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
                  icon: Clock,
                  title: "Atendimento 24 Horas",
                  description: "Urgências não esperam. Estamos disponíveis quando você precisa.",
                },
                {
                  icon: Users,
                  title: "Atendimento Humanizado",
                  description: "Entendemos seu desespero e agimos com empatia e eficiência.",
                },
                {
                  icon: Lock,
                  title: "Transparência Total",
                  description: "Você sabe exatamente as chances e os caminhos possíveis.",
                },
                {
                  icon: FileText,
                  title: "Análise Técnica",
                  description: "Identificamos todas as irregularidades para sua defesa.",
                },
                {
                  icon: Scale,
                  title: "Experiência Comprovada",
                  description: "Mais de 5 anos de atuação em direito veicular.",
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
                Para iniciar sua defesa, você precisará dos seguintes documentos (envie o que tiver disponível):
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
                  <p className="text-[#D2D3D5]/80 mb-4 italic">"{testimonial.text}"</p>
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">Proteja Seu Veículo Agora</h2>
            <p className="text-[#D2D3D5]/80 text-lg mb-8 leading-relaxed">
              Não perca tempo! Em casos de busca e apreensão, cada hora conta. Entre em contato imediatamente para análise do seu caso.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <motion.a
                href="https://wa.me/5561982603812"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Atendimento Urgente
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
