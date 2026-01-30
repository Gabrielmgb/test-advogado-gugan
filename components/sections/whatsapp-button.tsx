import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 glow"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  )
}
