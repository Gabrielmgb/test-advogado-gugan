import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://guganpimentel.adv.br"),
  title: {
    default: "Dr. Gugan Pimentel Di Garcia | Advogado Especialista em Direito de Trânsito - OAB/DF 79.271",
    template: "%s | Dr. Gugan Pimentel Di Garcia - Advogado de Trânsito",
  },
  description:
    "Advogado especialista em Direito de Trânsito e Veicular em Brasília/DF. Defesa em multas, suspensão e cassação de CNH, busca e apreensão, revisão de financiamento. Atendimento em todo o Brasil. Consulta gratuita.",
  generator: "v0.app",
  keywords: [
    "advogado de trânsito",
    "advogado trânsito Brasília",
    "advogado CNH suspensa",
    "advogado multa bafômetro",
    "defesa multa de trânsito",
    "suspensão CNH",
    "cassação CNH",
    "busca e apreensão veículo",
    "revisão financiamento veículo",
    "advogado DETRAN",
    "recurso multa trânsito",
    "advogado Lei Seca",
    "OAB DF",
    "direito de trânsito",
    "direito veicular",
  ],
  authors: [{ name: "Dr. Gugan Pimentel Di Garcia", url: "https://guganpimentel.adv.br" }],
  creator: "Dr. Gugan Pimentel Di Garcia",
  publisher: "Dr. Gugan Pimentel Di Garcia",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://guganpimentel.adv.br",
    siteName: "Dr. Gugan Pimentel Di Garcia - Advogado de Trânsito",
    title: "Dr. Gugan Pimentel Di Garcia | Advogado Especialista em Direito de Trânsito",
    description:
      "Advogado especialista em Direito de Trânsito e Veicular em Brasília/DF. Defesa em multas, suspensão e cassação de CNH, busca e apreensão. Atendimento em todo o Brasil.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Gugan Pimentel Di Garcia - Advogado Especialista em Direito de Trânsito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Gugan Pimentel Di Garcia | Advogado de Trânsito",
    description:
      "Advogado especialista em Direito de Trânsito e Veicular. Defesa em multas, suspensão de CNH, busca e apreensão. Atendimento em todo o Brasil.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
  category: "Advocacia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${montserrat.variable} ${lato.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
