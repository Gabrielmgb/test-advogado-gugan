export function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://guganpimentel.adv.br/#organization",
    name: "Dr. Gugan Pimentel Di Garcia - Advogado de Trânsito",
    alternateName: "Gugan Pimentel Advocacia",
    url: "https://guganpimentel.adv.br",
    logo: "https://guganpimentel.adv.br/logo.png",
    image: "https://guganpimentel.adv.br/og-image.jpg",
    description:
      "Advogado especialista em Direito de Trânsito e Direito Veicular com mais de 5 anos de experiência. Vice-Presidente da Comissão de Direito de Trânsito da OAB/DF - Subseção Águas Claras.",
    telephone: "+55-61-99999-9999",
    email: "contato@guganpimentel.adv.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Águas Claras",
      addressLocality: "Brasília",
      addressRegion: "DF",
      postalCode: "71900-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -15.8397,
      longitude: -48.0256,
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/guganpimentel",
      "https://www.facebook.com/guganpimentel",
      "https://www.linkedin.com/in/guganpimentel",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Jurídicos de Trânsito",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Defesa em Multa de Bafômetro (Lei Seca)",
            description: "Defesa técnica especializada contra autuações por embriaguez ao volante",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Suspensão e Cassação da CNH",
            description: "Recursos administrativos e judiciais para recuperação do direito de dirigir",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ação Revisional de Financiamento",
            description: "Revisão de contratos de financiamento de veículos com cláusulas abusivas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Busca e Apreensão de Veículo",
            description: "Defesa contra ações de busca e apreensão de veículos financiados",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Defesas Administrativas no DETRAN",
            description: "Elaboração de defesas e recursos em processos administrativos de trânsito",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Responsabilidade em Acidentes",
            description: "Defesa e reparação de danos em casos de acidentes de trânsito",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultoria e Assistência",
            description: "Consultoria preventiva para motoristas e empresas com frotas",
          },
        },
      ],
    },
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://guganpimentel.adv.br/#person",
    name: "Dr. Gugan Pimentel Di Garcia",
    jobTitle: "Advogado Especialista em Direito de Trânsito",
    description:
      "Advogado especialista em Direito de Trânsito e Direito Veicular, Vice-Presidente da Comissão de Direito de Trânsito da OAB/DF - Subseção Águas Claras. OAB/DF 79.271.",
    url: "https://guganpimentel.adv.br",
    image: "https://guganpimentel.adv.br/professional-lawyer-in-elegant-suit--confident-pos.png",
    worksFor: {
      "@id": "https://guganpimentel.adv.br/#organization",
    },
    memberOf: {
      "@type": "Organization",
      name: "Ordem dos Advogados do Brasil - Seção Distrito Federal",
      alternateName: "OAB/DF",
    },
    knowsAbout: [
      "Direito de Trânsito",
      "Direito Veicular",
      "Defesa de Multas",
      "Suspensão de CNH",
      "Cassação de CNH",
      "Busca e Apreensão de Veículos",
      "Revisão de Financiamento",
      "Lei Seca",
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://guganpimentel.adv.br",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Posso recorrer de uma multa de trânsito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, toda multa de trânsito pode ser contestada através de defesa prévia e recursos administrativos. É importante observar os prazos legais e fundamentar tecnicamente o recurso.",
        },
      },
      {
        "@type": "Question",
        name: "O que acontece se minha CNH for suspensa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Com a CNH suspensa, o condutor fica impedido de dirigir pelo período determinado. É possível recorrer da decisão ou, em alguns casos, solicitar o direito de dirigir durante o recurso.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona a defesa contra busca e apreensão de veículo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A defesa analisa irregularidades no contrato, falhas na notificação de mora, cobranças abusivas e outras questões que podem anular ou suspender a ordem de apreensão.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva um processo de revisão de financiamento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O tempo varia conforme a complexidade do caso e a comarca. Em média, processos de revisão de financiamento levam de 6 meses a 2 anos para conclusão.",
        },
      },
      {
        "@type": "Question",
        name: "O advogado atende em todo o Brasil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, o Dr. Gugan Pimentel Di Garcia oferece atendimento online para clientes de todo o Brasil, além do atendimento presencial em Brasília/DF.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
