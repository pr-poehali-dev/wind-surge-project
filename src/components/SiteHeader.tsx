import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/shimmer-button"
import Icon from "@/components/ui/icon"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { getLangFromPath, getBasePath, localizedPath } from "@/i18n/langRouting"

const PHONE_DISPLAY = "+7 (902) 255-77-53"

export default function SiteHeader() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const lang = getLangFromPath(pathname)
  const basePath = getBasePath(pathname)
  const isAbout = basePath === "/about"
  const homePath = localizedPath("/", lang)
  const aboutPath = localizedPath("/about", lang)

  const NAV_ITEMS = [
    { label: t("nav.services"), href: `${homePath}#services`, hash: true },
    { label: t("nav.works"),    href: `${homePath}#works`,    hash: true },
    { label: t("nav.about"),    href: aboutPath,               hash: false },
    { label: t("nav.contacts"), href: `${homePath}#contacts`, hash: true },
  ]

  return (
    <>
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-b border-white/5">
        <Link to={homePath} className="flex items-center gap-3">
          <div className="w-1 h-7 bg-red-600 rounded-full" />
          <span className="text-white font-black text-xl sm:text-2xl tracking-[0.2em] uppercase">
            МОЙ<span className="text-red-500"> КАСТОМ</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map(({ label, href, hash }) => {
            const active = !hash && href === aboutPath ? isAbout : false
            return hash ? (
              <a
                key={href}
                href={isAbout ? href : href.replace(homePath, "")}
                className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors ${active ? "text-white" : "text-white/50 hover:text-white"}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <div className="hidden md:flex">
            <ShimmerButton
              className="text-white px-6 py-2 rounded-none text-sm font-bold tracking-widest uppercase pointer-events-none"
              background="rgba(185,28,28,1)"
              shimmerColor="rgba(255,255,255,0.3)"
              borderRadius="4px"
            >
              {t("nav.order")}
            </ShimmerButton>
          </div>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto" style={{ background: "#080808" }}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <Link to={homePath} className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <div className="w-1 h-7 bg-red-600 rounded-full" />
              <span className="text-white font-black text-xl tracking-[0.2em] uppercase">
                МОЙ<span className="text-red-500"> КАСТОМ</span>
              </span>
            </Link>
            <button className="text-white p-2" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-10 gap-1">
            {NAV_ITEMS.map(({ label, href, hash }) => {
              const active = !hash && href === aboutPath ? isAbout : false
              const resolvedHref = isAbout ? href : href.replace(homePath, "")
              return hash ? (
                <a
                  key={href}
                  href={resolvedHref}
                  onClick={() => setOpen(false)}
                  className={`py-4 text-2xl font-black uppercase tracking-widest border-b border-white/5 transition-colors ${active ? "text-white" : "text-white/40 hover:text-white"}`}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className={`py-4 text-2xl font-black uppercase tracking-widest border-b border-white/5 transition-colors ${active ? "text-white" : "text-white/40 hover:text-white"}`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="px-6 pt-8">
            <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("nav.language")}</p>
            <LanguageSwitcher variant="mobile" />
          </div>

          <div className="px-6 pt-8 pb-8">
            <Button className="w-full bg-red-700 text-white py-4 rounded-sm text-sm font-bold tracking-widest uppercase border-0 pointer-events-none">
              {t("messengers.whatsappButton")}
            </Button>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/40">
              <Icon name="Phone" size={14} className="text-red-600" />
              <span className="text-sm tracking-wider">{PHONE_DISPLAY}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}