import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { LANGUAGES } from "@/i18n/config"
import Icon from "@/components/ui/icon"

export default function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  if (variant === "mobile") {
    return (
      <div className="grid grid-cols-2 gap-2">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-medium tracking-wider transition-colors ${
              lang.code === i18n.language ? "bg-red-700 text-white" : "bg-white/5 text-white/50 hover:text-white"
            }`}
          >
            <span>{lang.flag}</span>
            <span className="truncate">{lang.label}</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase"
      >
        <span>{current.flag}</span>
        <Icon name="ChevronDown" size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-3 w-48 max-h-80 overflow-y-auto bg-[#0c0c0c] border border-white/10 rounded-sm shadow-2xl z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-left text-xs font-medium tracking-wider transition-colors ${
                lang.code === i18n.language ? "bg-red-700/20 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
