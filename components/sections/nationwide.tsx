"use client"

import { MapPin, Video, Clock, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Nationwide() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#11114E] to-[#1a1a5e] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D2D3D5] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D2D3D5] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#D2D3D5]/10 backdrop-blur-sm px-6 py-2 rounded-full border border-[#D2D3D5]/20 mb-6">
            <MapPin className="w-4 h-4 text-[#D2D3D5]" />
            <span className="text-[#D2D3D5] text-sm font-medium">Atendimento Nacional</span>
            <img src="/logo-brasil.png" alt="" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#D2D3D5] mb-6">Atendimento em Todo o Brasil.  </h2>
          <p className="text-[#848688] text-lg max-w-3xl mx-auto leading-relaxed">
            Onde quer que você esteja, oferecemos atendimento jurídico especializado em Direito de Trânsito com a mesma
            qualidade e eficiência, utilizando tecnologia para estar sempre próximo.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left side - Benefits */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a1a5e] to-[#11114E] p-8 rounded-2xl border border-[#D2D3D5]/10 hover:border-[#D2D3D5]/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D2D3D5]/10 flex items-center justify-center group-hover:bg-[#D2D3D5]/20 transition-colors">
                  <Video className="w-6 h-6 text-[#D2D3D5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-[#D2D3D5] mb-3">Atendimento Online</h3>
                  <p className="text-[#848688] leading-relaxed">
                    Consultas por videoconferência, WhatsApp ou telefone. Você não precisa se deslocar para ter acesso a
                    um atendimento jurídico de excelência.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a5e] to-[#11114E] p-8 rounded-2xl border border-[#D2D3D5]/10 hover:border-[#D2D3D5]/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D2D3D5]/10 flex items-center justify-center group-hover:bg-[#D2D3D5]/20 transition-colors">
                  <Clock className="w-6 h-6 text-[#D2D3D5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-[#D2D3D5] mb-3">Agilidade e Praticidade</h3>
                  <p className="text-[#848688] leading-relaxed">
                    Documentos enviados digitalmente, acompanhamento em tempo real e respostas rápidas. Economize tempo
                    e resolva seu caso com eficiência.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a5e] to-[#11114E] p-8 rounded-2xl border border-[#D2D3D5]/10 hover:border-[#D2D3D5]/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D2D3D5]/10 flex items-center justify-center group-hover:bg-[#D2D3D5]/20 transition-colors">
                  <Shield className="w-6 h-6 text-[#D2D3D5]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-[#D2D3D5] mb-3">Mesma Qualidade</h3>
                  <p className="text-[#848688] leading-relaxed">
                    O atendimento remoto mantém o mesmo padrão de excelência, com análise técnica detalhada e
                    estratégias personalizadas para cada caso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Coverage map */}
          <div className="bg-gradient-to-br from-[#1a1a5e] to-[#11114E] p-8 rounded-2xl border border-[#D2D3D5]/10">
            <h3 className="text-2xl font-serif text-[#D2D3D5] mb-6">Atuação em Todos os Estados</h3>
            <p className="text-[#848688] mb-8 leading-relaxed">
              Com experiência em processos administrativos e judiciais em todo o território nacional, oferecemos suporte
              completo independente da sua localização.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Defesas administrativas em qualquer DETRAN do Brasil",
                "Ações judiciais em todas as comarcas",
                "Acompanhamento de processos online",
                "Recursos em instâncias superiores",
                "Consultoria preventiva para todo o país",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#848688]">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#D2D3D5]/5 backdrop-blur-sm p-6 rounded-xl border border-[#D2D3D5]/10">
              <p className="text-[#D2D3D5] text-center mb-4 font-medium">
                Não importa onde você esteja, estamos prontos para defender seus direitos.
              </p>
              <Button
                className="w-full bg-[#D2D3D5] text-[#11114E] hover:bg-[#D2D3D5]/90 font-semibold py-6 text-lg"
                onClick={() => window.open("https://wa.me/5561999999999", "_blank")}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Consulte Sua Região
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#D2D3D5]/5 to-[#D2D3D5]/10 backdrop-blur-sm p-8 rounded-2xl border border-[#D2D3D5]/20">
          <h3 className="text-2xl font-serif text-[#D2D3D5] mb-4">Primeira Consulta Gratuita para Todo o Brasil</h3>
          <p className="text-[#848688] mb-6 max-w-2xl mx-auto">
            Entre em contato agora e receba uma análise inicial do seu caso sem compromisso, independente do estado onde
            você se encontra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#D2D3D5] text-[#11114E] hover:bg-[#D2D3D5]/90 font-semibold"
              onClick={() => window.open("https://wa.me/5561999999999", "_blank")}
            >
              <Video className="w-5 h-5 mr-2" />
              Agendar Consulta Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D2D3D5] text-[#D2D3D5] hover:bg-[#D2D3D5]/10 bg-transparent"
              onClick={() => window.open("tel:+5561999999999", "_blank")}
            >
              <Clock className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
