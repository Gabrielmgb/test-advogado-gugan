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
  Car,
  Stethoscope,
  Gavel,
  Handshake,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AcidentesTransitoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "Atendimento emergencial para orientação imediata",
    "Análise completa de responsabilidade civil e criminal",
    "Ações de indenização por danos materiais e morais",
    "Negociação direta com seguradoras",
    "Defesa criminal em casos de lesão corporal e homicídio culposo",
    "Acompanhamento de perícias técnicas e médicas",
  ]

  const documents = [
    "Boletim de Ocorrência (se disponível)",
    "Fotos do local do acidente e dos veículos",
    "CRLV e CNH dos envolvidos",
    "Dados da apólice de seguro (se houver)",
    "Laudos médicos (em caso de lesões)",
    "Nome e contato de testemunhas",
    "Notas fiscais de reparos ou orçamentos",
    "Documentos pessoais (RG e CPF)",
  ]

  const faqs = [
    {
      question: "O que devo fazer imediatamente após um acidente de trânsito?",
      answer:
        "Primeiro, verifique se há vítimas e acione o SAMU (192) se necessário. Em seguida, sinalize o local, fotografe tudo (veículos, danos, local), colete dados das testemunhas, registre o Boletim de Ocorrência e não assuma culpa no local. Contate um advogado antes de negociar qualquer acordo.",
    },
    {
      question: "Quando posso processar o culpado por um acidente?",
      answer:
        "Você pode buscar indenização sempre que houver comprovação de que outra pessoa foi responsável pelo acidente. Isso inclui danos materiais (reparo do veículo), danos morais (trauma, abalo psicológico), lucros cessantes (se o veículo é usado para trabalho) e danos estéticos (em caso de lesões físicas).",
    },
    {
      question: "Qual a diferença entre processo civil e criminal em acidentes?",
      answer:
        "O processo civil busca a reparação dos danos (indenização financeira). O processo criminal investiga se houve crime (lesão corporal ou homicídio culposo) e pode resultar em punição como multa, restrição de direitos ou até prisão. Ambos podem tramitar simultaneamente.",
    },
    {
      question: "A seguradora pode recusar minha indenização?",
      answer:
        "A seguradora pode contestar a cobertura por diversos motivos, como excludentes contratuais, alegação de culpa exclusiva do segurado ou fraude. Porém, muitas recusas são indevidas e podem ser revertidas judicialmente. É importante ter assessoria jurídica para analisar cada caso.",
    },
    {
      question: "Quanto tempo tenho para entrar com ação por acidente de trânsito?",
      answer:
        "O prazo prescricional é de 3 anos para ações de indenização por danos materiais e morais. Para seguros, o prazo é de 1 ano. Em crimes de trânsito, os prazos variam conforme a pena prevista. Por isso, é fundamental agir rapidamente.",
    },
    {
      question: "Posso ser preso por causar um acidente de trânsito?",
      answer:
        "Em casos de lesão corporal grave ou homicídio culposo, há previsão de pena de detenção. Fatores agravantes como embriaguez, excesso de velocidade ou fuga do local podem aumentar a pena. A defesa criminal adequada é essencial para proteger seus direitos.",
    },
    {
      question: "Como é calculada a indenização por acidente?",
      answer:
        "A indenização considera: danos materiais (valor de reparo ou perda total), lucros cessantes (rendimentos perdidos), danos morais (compensação pelo sofrimento), despesas médicas, danos estéticos e pensão vitalícia em casos de incapacidade permanente.",
    },
    {
      question: "O advogado pode me ajudar mesmo se eu for o culpado?",
      answer:
        "Sim. Mesmo sendo responsável pelo acidente, você tem direito à defesa. O advogado pode atuar para minimizar as consequências, negociar acordos justos, defender você em processos criminais e garantir que seus direitos sejam respeitados em todas as esferas.",
    },
  ]

  const testimonials = [
    {
      name: "Renato S.",
      text: "Após um acidente grave, o Dr. Gugan me orientou desde o primeiro momento. Conseguimos uma indenização justa e evitamos um processo criminal injusto. Atendimento impecável.",
      role: "Empresário",
    },
    {
      name: "Fernanda L.",
      text: "Fui vítima de um acidente e a seguradora queria pagar muito menos do que eu tinha direito. Com a assessoria jurídica, recebi o valor completo dos danos. Muito obrigada!",
      role: "Professora",
    },
    {
      name: "Carlos A.",
      text: "Estava sendo processado criminalmente por um acidente. O advogado conseguiu provar que a culpa era do outro motorista. Excelente profissional e muito atencioso.",
      role: "Motorista Profissional",
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
          <img src="/car-accident-scene-with-damaged-vehicles.jpg" alt="Acidentes de Trânsito" className="w-full h-full object-cover" />
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
              <span className="text-[#848688] text-lg">Assessoria Completa</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-[#D2D3D5] mb-6 leading-tight">
              Assessoria em Acidentes de Trânsito
            </h1>
            <p className="text-xl text-[#D2D3D5]/90 mb-4 leading-relaxed">
              Orientação jurídica completa para vítimas e envolvidos em acidentes de trânsito.
            </p>
            <p className="text-lg text-[#848688] mb-8 leading-relaxed">
              Desde o momento do sinistro até a reparação de danos, oferecemos suporte jurídico integral nas esferas civil, criminal e administrativa.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/5561982603812"
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Orientação Emergencial
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">O que é a Assessoria em Acidentes de Trânsito?</h2>
            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed">
              <p>
                A assessoria jurídica em acidentes de trânsito é um serviço especializado que abrange todas as questões legais decorrentes de um sinistro: desde a orientação imediata após o acidente até ações de indenização e defesa criminal.
              </p>
              <p>
                Acidentes geram consequências que vão além dos danos materiais: podem envolver lesões corporais, traumas psicológicos, perda de renda e até processos criminais. Um advogado especializado protege seus interesses em todas essas frentes.
              </p>
              <p className="font-semibold text-[#D2D3D5]">Para quem é este serviço?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vítimas de acidentes de trânsito</li>
                <li>Condutores que causaram acidentes (culposos)</li>
                <li>Familiares de vítimas fatais</li>
                <li>Passageiros lesionados em acidentes</li>
                <li>Proprietários com veículos danificados</li>
                <li>Quem precisa negociar com seguradoras</li>
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
                "Imediatamente após um acidente de trânsito",
                "Quando a seguradora se recusa a pagar",
                "Se você sofreu lesões corporais no acidente",
                "Se o outro condutor fugiu do local",
                "Quando é intimado para depor ou responder processo",
                "Para calcular o valor correto da indenização",
                "Se a outra parte quer fazer acordo informal",
                "Quando o veículo é ferramenta de trabalho",
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

      {/* Tipos de Atuação */}
      <section className="py-16 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">Áreas de Atuação em Acidentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Scale,
                  title: "Responsabilidade Civil",
                  description: "Ações de indenização por danos materiais, morais, estéticos e lucros cessantes contra o causador do acidente.",
                },
                {
                  icon: Gavel,
                  title: "Defesa Criminal",
                  description: "Representação em processos por lesão corporal culposa, homicídio culposo e outros crimes de trânsito.",
                },
                {
                  icon: Handshake,
                  title: "Negociação com Seguradoras",
                  description: "Intermediação para garantir o pagamento correto de indenizações e evitar prejuízos em acordos.",
                },
                {
                  icon: Stethoscope,
                  title: "Perícias Técnicas e Médicas",
                  description: "Acompanhamento de perícias, elaboração de quesitos técnicos e contestação de laudos desfavoráveis.",
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

      {/* Tipos de Danos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">Tipos de Danos que Podem Ser Indenizados</h2>
            <div className="space-y-6">
              <div className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Danos Materiais</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Reparos no veículo ou valor de perda total</li>
                  <li>• Despesas com guincho e estacionamento</li>
                  <li>• Gastos com transporte alternativo</li>
                  <li>• Pertences danificados no acidente</li>
                </ul>
              </div>

              <div className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Danos Morais e Estéticos</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Trauma psicológico e sofrimento emocional</li>
                  <li>• Cicatrizes e deformidades permanentes</li>
                  <li>• Perda de um ente querido (dano moral reflexo)</li>
                  <li>• Abalo na qualidade de vida</li>
                </ul>
              </div>

              <div className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Lucros Cessantes e Pensão</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Rendimentos perdidos durante a recuperação</li>
                  <li>• Redução da capacidade de trabalho</li>
                  <li>• Pensão vitalícia por incapacidade permanente</li>
                  <li>• Pensão aos dependentes em caso de morte</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-[#1a1a5e]/30">
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
                  title: "Atendimento Emergencial",
                  description:
                    "Entre em contato imediatamente após o acidente. Orientamos sobre os procedimentos corretos: registro de provas, B.O. e cuidados imediatos.",
                },
                {
                  step: "2",
                  title: "Coleta e Análise de Provas",
                  description:
                    "Reunimos toda a documentação: fotos, vídeos, testemunhos, laudos médicos e boletim de ocorrência para construir o caso.",
                },
                {
                  step: "3",
                  title: "Definição de Estratégia",
                  description:
                    "Analisamos a melhor abordagem: negociação extrajudicial, ação de indenização, defesa criminal ou combinação de estratégias.",
                },
                {
                  step: "4",
                  title: "Execução e Negociação",
                  description:
                    "Atuamos em todas as frentes necessárias: negociação com seguradoras, ajuizamento de ações e acompanhamento de processos criminais.",
                },
                {
                  step: "5",
                  title: "Acompanhamento até Resolução",
                  description:
                    "Monitoramos cada etapa do processo até a resolução completa, garantindo o recebimento de indenizações ou absolvição criminal.",
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-12 text-center">
              Por que Contratar um Advogado Especializado
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Proteção Integral",
                  description: "Atuação nas esferas civil, criminal e administrativa",
                },
                {
                  icon: Scale,
                  title: "Cálculo Correto",
                  description: "Indenizações calculadas com base em critérios técnicos",
                },
                {
                  icon: Clock,
                  title: "Agilidade",
                  description: "Resposta rápida em situações de emergência",
                },
                {
                  icon: Users,
                  title: "Experiência",
                  description: "Conhecimento profundo em acidentes de trânsito",
                },
                {
                  icon: Handshake,
                  title: "Negociação Eficiente",
                  description: "Capacidade de negociar com seguradoras e partes contrárias",
                },
                {
                  icon: Award,
                  title: "Resultados",
                  description: "Histórico de casos resolvidos com sucesso",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-6 rounded-lg hover:border-[#D2D3D5]/50 transition-all"
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-8 text-center">Documentos Importantes</h2>
            <div className="bg-[#1a1a5e]/40 border border-[#848688]/20 p-8 rounded-lg">
              <p className="text-[#D2D3D5]/80 mb-6 text-center">
                Reúna o máximo de documentos possível para fortalecer seu caso:
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">Sofreu um Acidente? Busque Orientação Agora</h2>
            <p className="text-[#D2D3D5]/80 text-lg mb-8 leading-relaxed">
              Não enfrente as consequências de um acidente sozinho. Entre em contato para orientação imediata e proteja seus direitos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <motion.a
                href="https://wa.me/5561982603812"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado Agora
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
