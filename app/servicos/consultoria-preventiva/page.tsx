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
  Truck,
  BarChart3,
  Settings,
  FileCheck,
  Building2,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ConsultoriaFrotasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "Gestão jurídica completa de multas de trânsito",
    "Identificação de condutores e transferência de pontos",
    "Defesas e recursos administrativos em lote",
    "Monitoramento de vencimentos de CNH e CRLV",
    "Treinamento jurídico para motoristas",
    "Relatórios gerenciais de infrações",
    "Consultoria preventiva para redução de multas",
    "Assessoria em acidentes envolvendo a frota",
  ]

  const documents = [
    "CNPJ e documentos da empresa",
    "Relação completa de veículos da frota",
    "CRLVs de todos os veículos",
    "Lista de motoristas e CNHs",
    "Histórico de multas dos últimos 12 meses",
    "Contrato social ou ato constitutivo",
    "Procuração (se necessário)",
    "Contratos de locação de veículos (se aplicável)",
  ]

  const faqs = [
    {
      question: "Como funciona a gestão de multas para frotas?",
      answer:
        "Fazemos o monitoramento constante de todas as notificações, análise técnica de cada multa para identificar possibilidades de defesa, apresentação de recursos administrativos quando viável, identificação correta de condutores e gestão de prazos. Tudo isso com relatórios mensais detalhados.",
    },
    {
      question: "Minha empresa pode ser responsável pelas multas dos motoristas?",
      answer:
        "Sim. A empresa proprietária do veículo é solidariamente responsável pelas multas, mesmo quando cometidas por funcionários. Por isso, é fundamental ter um processo estruturado de identificação de condutores e transferência de responsabilidade.",
    },
    {
      question: "Como evitar que motoristas acumulem pontos na CNH da empresa?",
      answer:
        "A identificação correta e tempestiva do condutor é essencial. Quando o motorista é identificado dentro do prazo legal, os pontos são transferidos para sua CNH pessoal. Implementamos processos para garantir que isso aconteça corretamente.",
    },
    {
      question: "Vale a pena recorrer de multas em frotas grandes?",
      answer:
        "Absolutamente. Em frotas com muitos veículos, mesmo uma taxa de sucesso moderada representa economia significativa. Além disso, defesas bem fundamentadas podem cancelar multas que somariam centenas ou milhares de reais.",
    },
    {
      question: "Vocês atendem empresas de qualquer tamanho?",
      answer:
        "Sim. Atendemos desde pequenas empresas com poucos veículos até grandes frotas. O serviço é personalizado conforme a necessidade e volume de cada cliente, com valores proporcionais.",
    },
    {
      question: "Como funciona o treinamento de motoristas?",
      answer:
        "Oferecemos palestras e workshops sobre legislação de trânsito, direção defensiva, consequências legais de infrações e boas práticas. O objetivo é conscientizar os motoristas e reduzir o número de infrações na frota.",
    },
    {
      question: "Vocês ajudam em casos de acidentes com veículos da frota?",
      answer:
        "Sim. Oferecemos assessoria completa em acidentes envolvendo veículos da empresa: orientação imediata, acompanhamento de perícias, defesa em processos e negociação com seguradoras.",
    },
    {
      question: "Como são os relatórios gerenciais?",
      answer:
        "Fornecemos relatórios mensais com: número de multas recebidas, multas contestadas e resultados, motoristas com mais infrações, economia gerada, status de cada processo e recomendações preventivas.",
    },
  ]

  const testimonials = [
    {
      name: "Logística Express",
      text: "Com a assessoria do Dr. Gugan, reduzimos em 40% o valor das multas da nossa frota de 80 veículos. O monitoramento constante e as defesas bem feitas fazem toda a diferença.",
      role: "Transportadora - Brasília/DF",
    },
    {
      name: "Distribuidora Central",
      text: "Nossos motoristas ficaram mais conscientes após os treinamentos. E quando recebemos multas, sabemos que serão analisadas tecnicamente. Excelente parceria.",
      role: "Distribuidora - 35 veículos",
    },
    {
      name: "Locadora Veículos DF",
      text: "A gestão de multas era um pesadelo antes. Agora temos controle total, relatórios detalhados e economia real. Recomendo para qualquer empresa com frota.",
      role: "Locadora de Veículos",
    },
  ]

  const benefits = [
    {
      icon: BarChart3,
      title: "Redução de Custos",
      description: "Diminuição significativa no valor total de multas pagas",
    },
    {
      icon: Settings,
      title: "Processos Estruturados",
      description: "Fluxos claros de identificação e transferência de responsabilidade",
    },
    {
      icon: FileCheck,
      title: "Conformidade Legal",
      description: "Garantia de que a empresa está em dia com obrigações legais",
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Sua equipe focada no negócio, não em burocracia de trânsito",
    },
    {
      icon: Shield,
      title: "Proteção Jurídica",
      description: "Respaldo em situações complexas e acidentes",
    },
    {
      icon: Award,
      title: "Relatórios Gerenciais",
      description: "Visibilidade completa sobre infrações e resultados",
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
          <img src="/professional-consultation-meeting-with-documents.jpg" alt="Consultoria para Frotas" className="w-full h-full object-cover" />
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
              <Truck className="w-12 h-12 text-[#D2D3D5]" />
              <span className="text-[#848688] text-lg">Para Empresas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#D2D3D5] mb-6 leading-tight">
              Consultoria e Assistência para Frotas
            </h1>
            <p className="text-xl text-[#D2D3D5]/90 mb-4 leading-relaxed">
              Gestão jurídica especializada para empresas que operam com veículos.
            </p>
            <p className="text-lg text-[#848688] mb-8 leading-relaxed">
              Reduza custos com multas, proteja motoristas de suspensões indevidas e tenha assessoria completa em questões de trânsito da sua frota.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/5561982603812"
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Solicitar Proposta
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">O que é Consultoria Jurídica para Frotas?</h2>
            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed">
              <p>
                A consultoria jurídica para frotas é um serviço especializado que oferece gestão completa de todas as questões legais relacionadas aos veículos de uma empresa: multas, documentação, acidentes, regularização e treinamento de condutores.
              </p>
              <p>
                Empresas que operam com veículos enfrentam desafios únicos: volume alto de multas, necessidade de controle rigoroso de documentação, riscos de acidentes e a responsabilidade legal que recai sobre a empresa.
              </p>
              <p className="font-semibold text-[#D2D3D5]">Para quais empresas é este serviço?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Transportadoras e empresas de logística</li>
                <li>Locadoras de veículos</li>
                <li>Empresas com frota própria</li>
                <li>Cooperativas de transporte</li>
                <li>Empresas de entregas e delivery</li>
                <li>Construtoras e empreiteiras</li>
                <li>Qualquer negócio que opere com veículos</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problemas Comuns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-8">Desafios que Empresas com Frotas Enfrentam</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Alto volume de multas mensais",
                "Dificuldade em identificar condutores no prazo",
                "Motoristas com CNH próxima da suspensão",
                "Falta de controle sobre vencimentos de documentos",
                "Perda de prazos para defesas e recursos",
                "Desconhecimento sobre direitos da empresa",
                "Acidentes sem assessoria jurídica adequada",
                "Custos elevados com infrações recorrentes",
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

      {/* Serviços Oferecidos */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">Serviços Oferecidos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Gestão de Multas",
                  description: "Monitoramento, análise técnica, defesas e recursos para todas as autuações da frota.",
                },
                {
                  icon: Users,
                  title: "Identificação de Condutores",
                  description: "Processo estruturado para transferência de pontos para o motorista responsável.",
                },
                {
                  icon: Scale,
                  title: "Defesas Administrativas",
                  description: "Recursos em 1ª e 2ª instâncias para multas com irregularidades ou passíveis de contestação.",
                },
                {
                  icon: Building2,
                  title: "Regularização de Documentos",
                  description: "Controle de vencimentos de CNH, CRLV, licenciamentos e outras obrigações.",
                },
                {
                  icon: MapPin,
                  title: "Assessoria em Acidentes",
                  description: "Orientação imediata, acompanhamento de perícias e defesa em processos.",
                },
                {
                  icon: Settings,
                  title: "Treinamento de Motoristas",
                  description: "Palestras sobre legislação de trânsito, direção defensiva e prevenção de multas.",
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
                  title: "Diagnóstico Inicial",
                  description:
                    "Levantamos a situação atual da frota: número de veículos, histórico de multas, processos pendentes e principais desafios.",
                },
                {
                  step: "2",
                  title: "Proposta Personalizada",
                  description:
                    "Elaboramos uma proposta sob medida para a realidade da sua empresa, com escopo de serviços e valores adequados.",
                },
                {
                  step: "3",
                  title: "Implementação",
                  description:
                    "Iniciamos o trabalho com cadastro dos veículos, análise das pendências existentes e estruturação dos processos.",
                },
                {
                  step: "4",
                  title: "Gestão Contínua",
                  description:
                    "Monitoramento diário de novas autuações, análise técnica, apresentação de defesas e acompanhamento de prazos.",
                },
                {
                  step: "5",
                  title: "Relatórios e Melhoria",
                  description:
                    "Envio de relatórios mensais com resultados, análise de tendências e recomendações para redução de infrações.",
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">Benefícios para Sua Empresa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg hover:border-[#D2D3D5]/50 transition-all text-center"
                >
                  <item.icon className="w-12 h-12 text-[#D2D3D5] mx-auto mb-4" />
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">Diferenciais do Nosso Serviço</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Atendimento Personalizado",
                  description: "Cada empresa recebe atenção individualizada conforme suas necessidades específicas.",
                },
                {
                  title: "Canal Direto com Advogado",
                  description: "Comunicação direta via WhatsApp para dúvidas e emergências.",
                },
                {
                  title: "Transparência nos Resultados",
                  description: "Relatórios claros mostrando defesas, resultados e economia gerada.",
                },
                {
                  title: "Experiência Comprovada",
                  description: "Mais de 5 anos atuando com gestão jurídica de frotas no DF e entorno.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-[#D2D3D5] mb-2">{item.title}</h3>
                  <p className="text-[#848688]">{item.description}</p>
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
                Para iniciar o diagnóstico e proposta, precisamos dos seguintes documentos:
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">Reduza os Custos com Multas da Sua Frota</h2>
            <p className="text-[#D2D3D5]/80 text-lg mb-8 leading-relaxed">
              Entre em contato para um diagnóstico gratuito da situação da sua frota e receba uma proposta personalizada.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <motion.a
                href="https://wa.me/5561982603812"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Diagnóstico Gratuito
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
              <p className="text-sm">Informações da sua empresa são tratadas com total confidencialidade.</p>
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
