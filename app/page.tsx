"use client"
import { Shield, Users, Award, Gavel, TrendingUp, Eye, FileText, Car, AlertCircle, UserCheck } from "lucide-react"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/sections/whatsapp-button"
import { SchemaOrg } from "@/components/schema-org"
import { Nationwide } from "@/components/sections/nationwide"

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente profissional! Conseguiu reverter minha multa e evitou a suspensão da minha CNH. Recomendo!",
    rating: 5,
    case: "Recurso de Multa",
  },
  {
    name: "João Santos",
    text: "Dr. Gugan me ajudou com um caso complexo de cassação. Profissionalismo e competência excepcionais.",
    rating: 5,
    case: "Defesa de Cassação",
  },
  {
    name: "Ana Costa",
    text: "Atendimento personalizado e resultados eficazes. Consegui manter minha carteira graças ao seu trabalho.",
    rating: 5,
    case: "Suspensão de CNH",
  },
]

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
  },
]

const stats = [
  { icon: TrendingUp, number: "95%", label: "Taxa de Sucesso" },
  { icon: Users, number: "500+", label: "Casos Resolvidos" },
  { icon: Award, number: "5+", label: "Anos de Experiência" },
  { icon: Eye, number: "24h", label: "Resposta Garantida" },
]

export default function LawyerWebsite() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg />
      <Header />
      <Hero stats={stats} />
      <About />
      <Services services={services} />
      <Process />
      <Nationwide/>
      <FAQ />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
