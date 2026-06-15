import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/shimmer-button"
import Icon from "@/components/ui/icon"

const PHONE = "+79022557753"
const PHONE_DISPLAY = "+7 (902) 255-77-53"

const NAV_ITEMS = [
  { label: "Услуги",   href: "/#services" },
  { label: "Работы",   href: "/#works"    },
  { label: "О нас",    href: "/about"     },
  { label: "Контакты", href: "/#contacts" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isAbout = pathname === "/about"

  return (
    <>
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-b border-white/5">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-1 h-7 bg-red-600 rounded-full" />
          <span className="text-white font-black text-xl sm:text-2xl tracking-[0.2em] uppercase">
            PRO<span className="text-red-500">CUSTOM</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = href === "/about" ? isAbout : false
            const isRoute = href.startsWith("/about")
            return isRoute ? (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors ${active ? "text-white" : "text-white/50 hover:text-white"}`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={href}
                href={isAbout ? href : href.replace("/#", "#")}
                className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase"
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ShimmerButton
            className="hidden md:flex text-white px-6 py-2 rounded-none text-sm font-bold tracking-widest uppercase"
            background="rgba(185,28,28,1)"
            shimmerColor="rgba(255,255,255,0.3)"
            borderRadius="4px"
          >
            Заказать
          </ShimmerButton>
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
        <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "#080808" }}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <div className="w-1 h-7 bg-red-600 rounded-full" />
              <span className="text-white font-black text-xl tracking-[0.2em] uppercase">
                PRO<span className="text-red-500">CUSTOM</span>
              </span>
            </Link>
            <button className="text-white p-2" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-10 gap-1">
            {NAV_ITEMS.map(({ label, href }, i) => {
              const active = href === "/about" ? isAbout : false
              const isRoute = href.startsWith("/about")
              const resolvedHref = isAbout ? href : href.replace("/#", "#")
              return isRoute ? (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className={`py-4 text-2xl font-black uppercase tracking-widest border-b border-white/5 transition-colors ${active ? "text-white" : "text-white/40 hover:text-white"}`}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={href}
                  href={resolvedHref}
                  onClick={() => setOpen(false)}
                  className={`py-4 text-2xl font-black uppercase tracking-widest border-b border-white/5 transition-colors ${active ? "text-white" : "text-white/40 hover:text-white"}`}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          <div className="px-6 pt-10">
            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-red-700 hover:bg-red-600 text-white py-4 rounded-sm text-sm font-bold tracking-widest uppercase border-0">
                Написать в WhatsApp
              </Button>
            </a>
            <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 mt-4 text-white/40 hover:text-white transition-colors">
              <Icon name="Phone" size={14} className="text-red-600" />
              <span className="text-sm tracking-wider">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
