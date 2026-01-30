"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ]

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/50 z-50 glow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary via-muted to-secondary rounded-full flex items-center justify-center shadow-lg glow">
            <span className="text-primary-foreground font-bold text-lg md:text-xl font-serif">GP</span>
          </div>
          <div>
            <span className="font-serif font-bold text-base md:text-xl text-foreground">Dr. Gugan Pimentel</span>
            <p className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">
              Especialista em Direito de Trânsito
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleMenuClick(e, item.href)}
              className="hover:text-accent transition-all duration-300 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Button */}
        <Button className="hidden md:flex bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg glow">
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-card/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item.href)}
                className="text-lg hover:text-accent transition-colors py-2 border-b border-border/30 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mt-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
