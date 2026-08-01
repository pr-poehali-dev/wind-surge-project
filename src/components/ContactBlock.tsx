import { useTranslation } from "react-i18next"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const PHONE = "+79022557753"
export const PHONE_DISPLAY = "+7 (902) 255-77-53"
export const EMAIL = "moicustom@yandex.ru"

function useMessengers() {
  const { t } = useTranslation()
  return [
    { label: t("messengers.call"),     icon: "Phone"         },
    { label: t("messengers.whatsapp"), icon: "MessageCircle" },
    { label: t("messengers.telegram"), icon: "Send"          },
    { label: t("messengers.max"),      icon: "MessageSquare" },
  ]
}

/** Строчка с иконками всех мессенджеров (некликабельно) */
export function MessengerLinks({ className = "" }: { className?: string }) {
  const MESSENGERS = useMessengers()
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {MESSENGERS.map(({ label, icon }) => (
        <div
          key={label}
          className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2.5 rounded-sm"
        >
          <Icon name={icon} size={14} className="text-red-500 shrink-0" />
          <span className="text-white/60 text-xs font-medium tracking-wider uppercase">{label}</span>
        </div>
      ))}
    </div>
  )
}

/** Полный блок CTA: заголовок + номер + email + мессенджеры (некликабельно) */
export function ContactCTA() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("contact.ctaText")}</p>
        <p className="text-white font-black text-2xl sm:text-3xl tracking-wider mb-2">
          {PHONE_DISPLAY}
        </p>
        <p className="text-white/50 text-sm tracking-wide">
          {EMAIL}
        </p>
      </div>
      <MessengerLinks />
    </div>
  )
}

/** Некликабельная кнопка-подпись (визуально как CTA, без перехода) */
export function WhatsAppButton({ label, className = "" }: { label?: string; className?: string }) {
  const { t } = useTranslation()
  return (
    <div className={className}>
      <Button className="group bg-red-700 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase flex items-center gap-3 border-0 shadow-xl shadow-red-900/30 cursor-default hover:bg-red-700">
        {label || t("messengers.whatsappButton")}
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  )
}
