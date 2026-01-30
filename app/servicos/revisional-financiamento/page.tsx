"use client"

import { motion } from "framer-motion"
import {
  Calculator,
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
  TrendingDown,
  Shield,
  Banknote,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function RevisionalFinanciamentoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "Análise completa do contrato de financiamento",
    "Identificação de juros abusivos e tarifas ilegais",
    "Recálculo do saldo devedor com exclusão de abusos",
    "Ação judicial para redução das parcelas",
    "Possibilidade de devolução de valores pagos indevidamente",
    "Acompanhamento processual até a execução da sentença",
  ]

  const documents = [
    "Contrato de Financiamento (todas as páginas)",
    "Comprovantes de pagamento das parcelas",
    "Boletos ou carnês do financiamento",
    "Documentos pessoais (RG e CPF)",
    "Comprovante de residência atualizado",
    "CRLV do veículo financiado",
    "Extrato bancário (se houver débito automático)",
    "Notificações recebidas do banco (se houver)",
  ]

  const faqs = [
    {
      question: "O que é uma ação revisional de financiamento?",
      answer:
        "É um processo judicial que visa revisar e corrigir cláusulas abusivas em contratos de financiamento de veículos, como juros excessivos, tarifas ilegais e cobranças indevidas, podendo resultar na redução das parcelas ou do saldo devedor.",
    },
    {
      question: "Quanto posso economizar com a ação revisional?",
      answer:
        "A economia varia conforme o caso, mas é comum conseguir reduções de 20% a 50% no valor das parcelas ou do saldo devedor. Em alguns casos, há também devolução de valores pagos indevidamente.",
    },
    {
      question: "Posso entrar com a ação mesmo estando em dia com as parcelas?",
      answer:
        "Sim! A ação revisional pode ser proposta independentemente de estar em dia ou inadimplente. Mesmo pagando regularmente, você pode ter direito à revisão se houver cobranças abusivas.",
    },
    {
      question: "Quanto tempo demora o processo?",
      answer:
        "O prazo varia conforme a comarca e complexidade do caso. Em média, decisões liminares podem ser obtidas em algumas semanas, enquanto a sentença final pode levar de 6 meses a 2 anos.",
    },
    {
      question: "Preciso parar de pagar as parcelas durante o processo?",
      answer:
        "Não necessariamente. A estratégia de pagamento depende do seu caso específico. Podemos solicitar ao juiz autorização para depósito judicial do valor incontroverso enquanto se discute a revisão.",
    },
    {
      question: "Quais são as tarifas que podem ser consideradas abusivas?",
      answer:
        "TAC (Tarifa de Abertura de Crédito), TEC (Tarifa de Emissão de Carnê), seguros não contratados conscientemente, tarifas de serviços de terceiros, juros capitalizados ilegalmente e spreads acima da média de mercado.",
    },
    {
      question: "E se o banco entrar com busca e apreensão?",
      answer:
        "Caso haja ação de busca e apreensão, podemos apresentar defesa contestando a medida e, muitas vezes, obter a suspensão da liminar enquanto discutimos a revisão do contrato.",
    },
    {
      question: "A ação revisional funciona para qualquer tipo de financiamento?",
      answer:
        "Sim, a ação revisional pode ser aplicada a financiamentos de veículos, imóveis, empréstimos pessoais e outros contratos bancários que contenham cláusulas abusivas.",
    },
  ]

  const testimonials = [
    {
      name: "Marcos A.",
      text: "Minhas parcelas caíram de R$ 1.800 para R$ 1.100 após a revisional. O Dr. Gugan identificou várias cobranças abusivas que eu nem sabia que existiam. Excelente trabalho!",
      role: "Empresário",
    },
    {
      name: "Fernanda C.",
      text: "Estava prestes a perder meu carro por não conseguir pagar as parcelas. A ação revisional reduziu minha dívida e consegui manter o veículo. Muito grata pelo atendimento profissional.",
      role: "Professora",
    },
    {
      name: "Ricardo S.",
      text: "Achava que não tinha saída, mas o advogado analisou meu contrato e encontrou mais de R$ 15 mil em cobranças indevidas. Recomendo demais!",
      role: "Representante Comercial",
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
          <img src="/contract-and-car-keys-on-desk-with-calculator.jpg" alt="Ação Revisional de Financiamento" className="w-full h-full object-cover" />
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
              <Calculator className="w-12 h-12 text-[#D2D3D5]" />
              <span className="text-[#848688] text-lg">Direito Veicular</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#D2D3D5] mb-6 leading-tight">
              Ação Revisional de Financiamento de Veículos
            </h1>
            <p className="text-xl text-[#D2D3D5]/90 mb-4 leading-relaxed">
              Reduza suas parcelas em até 50% eliminando juros abusivos e cobranças ilegais.
            </p>
            <p className="text-lg text-[#848688] mb-8 leading-relaxed">
              Muitos contratos de financiamento possuem cobranças indevidas que você paga sem saber. Com uma análise técnica especializada, identificamos todas as irregularidades e buscamos a revisão judicial para reduzir significativamente sua dívida.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/5561982603812"
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Análise Gratuita do Contrato
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">O que é a Ação Revisional de Financiamento?</h2>
            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed">
              <p>
                A Ação Revisional é um processo judicial que visa revisar e corrigir cláusulas abusivas presentes em contratos de financiamento de veículos. Muitas instituições financeiras incluem juros excessivos, tarifas ilegais e encargos que violam o Código de Defesa do Consumidor.
              </p>
              <p>
                Este serviço resolve o problema de parcelas elevadas demais, saldo devedor que não diminui e cobranças indevidas que drenam seu orçamento mês após mês.
              </p>
              <p className="font-semibold text-[#D2D3D5]">Para quem é este serviço?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Quem está pagando parcelas que parecem não diminuir a dívida</li>
                <li>Proprietários de veículos financiados com juros muito altos</li>
                <li>Pessoas que identificaram cobranças estranhas no contrato</li>
                <li>Quem está com dificuldade de pagar as parcelas</li>
                <li>Consumidores que querem verificar se estão pagando valores justos</li>
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
                "Suas parcelas parecem não reduzir o saldo devedor",
                "Os juros do seu contrato são muito superiores à média de mercado",
                "Você paga tarifas que não entende ou não contratou",
                "Há cobranças de seguros que você não solicitou",
                "O valor total financiado ficou muito acima do preço do veículo",
                "Você está com dificuldade para pagar as parcelas",
                "Recebeu notificação de negativação ou busca e apreensão",
                "Quer saber se está pagando um valor justo",
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
              Problemas Comuns em Contratos de Financiamento
            </h2>
            <div className="space-y-6">
              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Dores Mais Comuns dos Clientes</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Parcelas que comprometem grande parte da renda mensal</li>
                  <li>• Sensação de que a dívida nunca acaba</li>
                  <li>• Valor total pago muito superior ao preço do veículo</li>
                  <li>• Impossibilidade de quitar antecipadamente por saldo elevado</li>
                  <li>• Risco de perder o veículo por inadimplência</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Irregularidades Frequentes nos Contratos</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• TAC (Tarifa de Abertura de Crédito) - muitas vezes ilegal</li>
                  <li>• TEC (Tarifa de Emissão de Carnê) - cobrança indevida</li>
                  <li>• Seguros embutidos sem autorização expressa</li>
                  <li>• Capitalização de juros (juros sobre juros)</li>
                  <li>• Taxa de juros acima da média de mercado do BACEN</li>
                  <li>• Cobranças de serviços de terceiros não contratados</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#D2D3D5]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Riscos de Não Agir</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Continuar pagando valores indevidos por anos</li>
                  <li>• Perder milhares de reais em cobranças abusivas</li>
                  <li>• Ter o veículo apreendido por inadimplência</li>
                  <li>• Nome negativado nos órgãos de proteção ao crédito</li>
                  <li>• Dificuldade em conseguir novos financiamentos</li>
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
                    "Entre em contato via WhatsApp ou telefone. A consulta inicial é gratuita e sigilosa. Vamos entender sua situação e solicitar os documentos necessários.",
                },
                {
                  step: "2",
                  title: "Análise Técnica do Contrato",
                  description:
                    "Realizamos uma análise minuciosa do seu contrato de financiamento, identificando todas as irregularidades, cobranças abusivas e juros excessivos.",
                },
                {
                  step: "3",
                  title: "Cálculos Periciais",
                  description:
                    "Elaboramos cálculos detalhados demonstrando os valores cobrados indevidamente, o impacto dos juros abusivos e qual seria o valor correto do contrato.",
                },
                {
                  step: "4",
                  title: "Propositura da Ação Revisional",
                  description:
                    "Ingressamos com a ação judicial apresentando toda a fundamentação técnica e jurídica para revisão do contrato, buscando redução das parcelas e/ou devolução de valores.",
                },
                {
                  step: "5",
                  title: "Acompanhamento e Execução",
                  description:
                    "Acompanhamos todas as fases do processo, mantendo você informado. Após decisão favorável, garantimos a efetiva aplicação da redução ou devolução de valores.",
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
                  icon: TrendingDown,
                  title: "Redução das Parcelas",
                  description: "Diminuição de até 50% no valor das mensalidades do financiamento",
                },
                {
                  icon: Banknote,
                  title: "Devolução de Valores",
                  description: "Restituição de valores pagos indevidamente durante o contrato",
                },
                {
                  icon: Calculator,
                  title: "Redução do Saldo Devedor",
                  description: "Recálculo do valor total devido com eliminação de cobranças abusivas",
                },
                {
                  icon: Shield,
                  title: "Proteção Contra Apreensão",
                  description: "Estratégias para evitar a busca e apreensão do veículo",
                },
                {
                  icon: Scale,
                  title: "Justiça Contratual",
                  description: "Equilíbrio nas relações entre consumidor e instituição financeira",
                },
                {
                  icon: Award,
                  title: "Economia Significativa",
                  description: "Possibilidade de economizar milhares de reais ao longo do contrato",
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
                  description: "Você sabe exatamente o que está acontecendo em cada etapa.",
                },
                {
                  icon: Clock,
                  title: "Respostas Rápidas",
                  description: "Atendimento ágil pelo WhatsApp e retorno em até 24 horas.",
                },
                {
                  icon: FileText,
                  title: "Análise Técnica Completa",
                  description: "Cálculos periciais detalhados para fundamentar a ação.",
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">Reduza Suas Parcelas Agora</h2>
            <p className="text-[#D2D3D5]/80 text-lg mb-8 leading-relaxed">
              Não continue pagando valores abusivos. Entre em contato para uma análise gratuita do seu contrato e descubra quanto você pode economizar.
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
