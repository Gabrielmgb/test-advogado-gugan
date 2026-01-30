"use client"

import { motion } from "framer-motion"
import {
  Gavel,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  FileText,
  AlertTriangle,
  Scale,
  Users,
  Award,
  Lock,
  Clock,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function SuspensaoCNHPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    "Revisão completa do processo de pontuação",
    "Identificação de multas indevidas ou prescritas",
    "Recursos administrativos em todas as fases",
    "Pedido de efeito suspensivo para manter CNH válida",
    "Acompanhamento de prazos recursais",
    "Defesa judicial quando necessário",
  ]

  const documents = [
    "CNH (Carteira Nacional de Habilitação)",
    "Notificação de Suspensão ou Cassação",
    "Extrato de pontuação do DETRAN",
    "Autos de infração relacionados",
    "Comprovante de pagamento de multas (se houver)",
    "Documentos pessoais (RG e CPF)",
  ]

  const faqs = [
    {
      question: "Qual a diferença entre suspensão e cassação da CNH?",
      answer:
        "A suspensão é temporária (2 a 8 meses) e ocorre por acúmulo de pontos ou infração gravíssima. A cassação é definitiva e ocorre em casos específicos previstos em lei, exigindo novo processo de habilitação após 2 anos.",
    },
    {
      question: "Posso dirigir durante o processo de defesa?",
      answer:
        "Sim, se for concedido efeito suspensivo ao recurso. Um advogado especializado pode requerer esse efeito para que você mantenha sua CNH válida até a decisão final.",
    },
    {
      question: "Quantos pontos causam a suspensão da CNH?",
      answer:
        "Atualmente, 40 pontos em 12 meses para motoristas comuns, 30 pontos para quem cometeu infração gravíssima, e 20 pontos para quem cometeu infração gravíssima com fator multiplicador.",
    },
    {
      question: "Posso zerar minha pontuação?",
      answer:
        "Os pontos expiram após 12 meses da data da infração, desde que não haja nova pontuação nesse período. Uma defesa pode anular multas indevidas e reduzir a pontuação.",
    },
    {
      question: "Quais são as chances de reverter a suspensão?",
      answer:
        "Depende do caso. Muitas suspensões são baseadas em multas com vícios processuais, notificações fora do prazo ou contagem incorreta de pontos. A análise técnica identifica essas irregularidades.",
    },
    {
      question: "Quanto tempo leva o processo de defesa?",
      answer:
        "O prazo varia conforme a instância. A defesa prévia é julgada em 30 dias, recursos podem levar de 2 a 6 meses. A defesa judicial pode ser mais longa, mas permite efeito suspensivo.",
    },
    {
      question: "O que acontece se eu perder o prazo de defesa?",
      answer:
        "A perda do prazo administrativo pode tornar a penalidade definitiva. Ainda é possível recorrer judicialmente, mas é mais complexo. Por isso, agir rapidamente é fundamental.",
    },
    {
      question: "Quanto custa o serviço?",
      answer:
        "O valor varia conforme a complexidade do caso. Oferecemos consulta gratuita para avaliar sua situação e apresentar um orçamento transparente.",
    },
  ]

  const testimonials = [
    {
      name: "Marcelo S.",
      text: "Estava com 38 pontos e recebi notificação de suspensão. O Dr. Gugan identificou 3 multas com vícios processuais e conseguiu anulá-las. Mantive minha CNH e continuo trabalhando!",
      role: "Motorista de Aplicativo",
    },
    {
      name: "Fernanda T.",
      text: "Profissionalismo e transparência do início ao fim. Explica tudo com clareza, cumpre os prazos e conseguiu reverter minha suspensão. Super recomendo!",
      role: "Representante Comercial",
    },
    {
      name: "João Pedro M.",
      text: "Recebi cassação da CNH e achei que tinha perdido tudo. O advogado analisou meu caso, identificou irregularidades e conseguiu reverter. Excelente trabalho!",
      role: "Empresário",
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
          <img
            src="/drivers-license-being-held-with-legal-documents.jpg"
            alt="Suspensão CNH"
            className="w-full h-full object-cover"
          />
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
              <Gavel className="w-12 h-12 text-[#D2D3D5]" />
              <span className="text-[#848688] text-lg">Direito de Trânsito</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#D2D3D5] mb-6 leading-tight">
              Suspensão e Cassação da CNH
            </h1>
            <p className="text-xl text-[#D2D3D5]/90 mb-4 leading-relaxed">
              Defenda seu direito de dirigir com estratégias jurídicas comprovadas.
            </p>
            <p className="text-lg text-[#848688] mb-8 leading-relaxed">
              A suspensão ou cassação da CNH pode comprometer sua vida profissional e pessoal. Com análise técnica
              minuciosa, identifico irregularidades e construo a defesa mais eficaz para manter sua habilitação válida.
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
            <h2 className="text-4xl font-serif text-[#D2D3D5] mb-6">
              O que é a Defesa em Suspensão e Cassação da CNH?
            </h2>
            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed">
              <p>
                A defesa em processos de suspensão e cassação da CNH visa anular ou reduzir as penalidades aplicadas
                pelo DETRAN quando o condutor atinge a pontuação máxima permitida ou comete infrações específicas
                previstas em lei.
              </p>
              <p>
                Este serviço resolve o problema de perda temporária ou definitiva do direito de dirigir, evitando
                prejuízos financeiros e profissionais significativos.
              </p>
              <p className="font-semibold text-[#D2D3D5]">Para quem é este serviço?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Motoristas que atingiram ou estão próximos do limite de pontos</li>
                <li>Condutores notificados de suspensão ou cassação</li>
                <li>Profissionais que dependem da CNH para trabalhar</li>
                <li>Pessoas que identificaram erros na contagem de pontos</li>
                <li>Quem precisa de efeito suspensivo urgente</li>
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
                "Você recebeu notificação de suspensão ou cassação",
                "Está próximo de atingir o limite de pontos",
                "Identificou multas indevidas ou prescritas",
                "Recebeu notificações fora do prazo legal",
                "Houve erro na contagem de pontos pelo DETRAN",
                "Precisa manter a CNH para trabalhar",
                "Deseja requerer efeito suspensivo",
                "Quer anular penalidades antes do trânsito em julgado",
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
              Problemas Comuns em Processos de Suspensão/Cassação
            </h2>
            <div className="space-y-6">
              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Dores Mais Comuns dos Clientes</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Impossibilidade de trabalhar (motoristas profissionais, vendedores)</li>
                  <li>• Dependência de transporte público ou terceiros</li>
                  <li>• Constrangimento social e familiar</li>
                  <li>• Custos elevados com transporte alternativo</li>
                  <li>• Risco de perder emprego ou contratos</li>
                  <li>• Processo longo e burocrático para recuperar a CNH</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#848688]/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Erros Frequentes do DETRAN</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Cálculo incorreto da pontuação acumulada</li>
                  <li>• Inclusão de multas prescritas ou anuladas</li>
                  <li>• Notificações enviadas para endereço desatualizado</li>
                  <li>• Falta de trânsito em julgado das infrações</li>
                  <li>• Aplicação de penalidade sem respeitar o contraditório</li>
                  <li>• Duplicidade na contagem de pontos</li>
                </ul>
              </div>

              <div className="bg-[#11114E] border border-[#D2D3D5]/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#D2D3D5] mb-3">Riscos de Não Agir Rapidamente</h3>
                <ul className="space-y-2 text-[#D2D3D5]/80">
                  <li>• Perda do prazo para defesa administrativa</li>
                  <li>• Impossibilidade de obter efeito suspensivo</li>
                  <li>• Suspensão ou cassação definitiva da CNH</li>
                  <li>• Necessidade de refazer todo o processo de habilitação</li>
                  <li>• Prejuízos financeiros irreparáveis</li>
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
                    "Entre em contato para consulta gratuita. Analisamos sua notificação e explicamos o processo de defesa disponível.",
                },
                {
                  step: "2",
                  title: "Análise da Pontuação e Multas",
                  description:
                    "Solicito seu extrato de pontuação e todos os autos de infração. Verifico a validade de cada multa, prazos de notificação e possíveis prescrições.",
                },
                {
                  step: "3",
                  title: "Estratégia de Defesa",
                  description:
                    "Apresento diagnóstico completo, identificando multas anuláveis, irregularidades processuais e a melhor estratégia (defesa, recurso ou judicial).",
                },
                {
                  step: "4",
                  title: "Execução e Acompanhamento",
                  description:
                    "Protocolo a defesa ou recurso, requeiro efeito suspensivo se necessário, e acompanho todas as fases processuais com rigor.",
                },
                {
                  step: "5",
                  title: "Atualização Contínua",
                  description:
                    "Você recebe atualizações constantes sobre o andamento. Transparência total em cada etapa do processo.",
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
                  description: "Defesa fundamentada em legislação atualizada e jurisprudência consolidada",
                },
                {
                  icon: Clock,
                  title: "Efeito Suspensivo",
                  description: "Possibilidade de continuar dirigindo durante o processo de defesa",
                },
                {
                  icon: Scale,
                  title: "Anulação de Multas",
                  description: "Identificação e anulação de infrações com vícios processuais",
                },
                {
                  icon: FileText,
                  title: "Redução de Pontos",
                  description: "Diminuição da pontuação através de defesas técnicas eficazes",
                },
                {
                  icon: Award,
                  title: "Manutenção da CNH",
                  description: "Maior probabilidade de manter sua habilitação válida",
                },
                {
                  icon: Users,
                  title: "Acompanhamento Total",
                  description: "Gestão completa de prazos e recursos em todas as instâncias",
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
                  description: "Cada caso recebe atenção personalizada e cuidadosa.",
                },
                {
                  icon: Lock,
                  title: "Transparência Total",
                  description: "Informações claras sobre chances reais, prazos e custos.",
                },
                {
                  icon: Clock,
                  title: "Respostas Rápidas",
                  description: "Retorno ágil e atualizações constantes sobre o processo.",
                },
                {
                  icon: Scale,
                  title: "Estratégias Fundamentadas",
                  description: "Defesas baseadas em conhecimento técnico especializado.",
                },
                {
                  icon: FileText,
                  title: "Análise Minuciosa",
                  description: "Revisão detalhada de cada multa, prazo e procedimento.",
                },
                {
                  icon: Award,
                  title: "Experiência Comprovada",
                  description: "Mais de 5 anos de atuação em Direito de Trânsito.",
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
              <p className="text-[#D2D3D5]/80 mb-6">Para iniciar sua defesa, você precisará fornecer:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-1" />
                    <p className="text-[#D2D3D5]/90">{doc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#848688] mt-6 text-sm">
                * Todos os documentos podem ser enviados digitalmente via WhatsApp ou e-mail.
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
            <h2 className="text-4xl md:text-5xl font-serif text-[#D2D3D5] mb-6">Proteja Sua CNH Agora</h2>
            <p className="text-xl text-[#D2D3D5]/80 mb-8 leading-relaxed">
              Os prazos são curtos e cada dia conta. Entre em contato para uma análise gratuita do seu caso e defenda
              seu direito de dirigir.
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
