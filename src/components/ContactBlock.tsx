import { useTranslation } from "react-i18next"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const PHONE = "+79022557753"
export const PHONE_DISPLAY = "+7 (902) 255-77-53"

function useMessengers() {
  const { t } = useTranslation()
  return [
    { label: t("messengers.call"),     href: `tel:${PHONE}`,                              icon: "Phone"         },
    { label: t("messengers.whatsapp"), href: `https://wa.me/${PHONE}`,                    icon: "MessageCircle", external: true },
    { label: t("messengers.telegram"), href: `https://t.me/+${PHONE.replace("+", "")}`,   icon: "Send",          external: true },
    { label: t("messengers.max"),      href: `https://max.ru/`,                           icon: "MessageSquare", external: true },
  ]
}

/** Строчка с иконками всех мессенджеров */
export function MessengerLinks({ className = "" }: { className?: string }) {
  const MESSENGERS = useMessengers()
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {MESSENGERS.map(({ label, href, icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="flex items-center gap-2 border border-white/10 hover:border-red-600/60 bg-white/5 hover:bg-red-600/10 px-4 py-2.5 rounded-sm transition-all duration-200 group"
        >
          <Icon name={icon} size={14} className="text-red-500 shrink-0" />
          <span className="text-white/60 group-hover:text-white text-xs font-medium tracking-wider uppercase transition-colors">{label}</span>
        </a>
      ))}
    </div>
  )
}

/** Полный блок CTA: заголовок + номер + мессенджеры */
export function ContactCTA() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("contact.ctaText")}</p>
        <a
          href={`tel:${PHONE}`}
          className="text-white font-black text-2xl sm:text-3xl tracking-wider hover:text-red-400 transition-colors"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
      <MessengerLinks />
    </div>
  )
}

/** Кнопка WhatsApp */
export function WhatsAppButton({ label, className = "" }: { label?: string; className?: string }) {
  const { t } = useTranslation()
  return (
    <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" className={className}>
      <Button className="group bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase flex items-center gap-3 border-0 shadow-xl shadow-red-900/30 hover:shadow-red-700/40 transition-all duration-300 hover:scale-[1.03]">
        {label || t("messengers.whatsappButton")}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </a>
  )
}
