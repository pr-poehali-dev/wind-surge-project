import { ArrowLeft } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import SiteHeader from "@/components/SiteHeader"
import { ContactCTA } from "@/components/ContactBlock"
import { getLangFromPath, localizedPath } from "@/i18n/langRouting"

const WORK_IMAGES = [
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/bd5930f8-3e06-48a1-bd91-421e7ed5a176.png",
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/c774ad16-b2d9-43fb-9dcc-cd526eea672d.png",
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/cb82a27f-e4fb-40d7-a11a-235ece41d02b.png",
]

const REASON_ICONS = ["Shield", "Layers", "Zap", "PenTool"]
const WHY_ICONS = ["X", "Lock", "User"]

export default function About() {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const homePath = localizedPath("/", lang)
  const reasons = t("about.reasons.items", { returnObjects: true }) as { title: string; desc: string }[]
  const steps = t("about.process.steps", { returnObjects: true }) as { num: string; title: string; desc: string }[]
  const useCases = t("about.forWho.useCases", { returnObjects: true }) as string[]
  const whyItems = t("about.forWho.whyItems", { returnObjects: true }) as string[]
  const works = t("about.works.items", { returnObjects: true }) as { title: string; desc: string }[]
  const howToOrderList = t("about.howToOrder.list", { returnObjects: true }) as string[]

  useEffect(() => {
    document.title = t("about.meta.title")
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", t("about.meta.description"))
    return () => {
      document.title = "МОЙ КАСТОМ — Кастомный тюнинг автомобилей: уникальные бампера, обвесы, фары на заказ"
    }
  }, [t])

  return (
    <div className="min-h-screen" style={{ background: "#080808", fontFamily: "'Inter', sans-serif" }}>

      <SiteHeader />

      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-20 pt-20 pb-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <Link to={homePath} className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs tracking-widest uppercase mb-8 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            {t("nav.home")}
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("about.hero.label")}</p>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
            {t("about.hero.title1")}<br />
            <span className="text-white/20">{t("about.hero.title2")}</span>
          </h1>

          <div className="max-w-3xl space-y-5">
            <p className="text-white/60 text-lg leading-relaxed">
              {t("about.hero.p1")}
            </p>
            <p className="text-white/40 text-base leading-relaxed">
              {t("about.hero.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Почему выбирают */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("about.reasons.label")}</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-12">
            {t("about.reasons.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {reasons.map((r, i) => (
              <div key={i} className="bg-[#0c0c0c] hover:bg-[#111] p-8 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-red-700/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={REASON_ICONS[i]} size={18} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-base uppercase tracking-wide mb-3">{r.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("about.process.label")}</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            {t("about.process.title1")}
          </h2>
          <h2 className="text-white/20 text-3xl sm:text-4xl font-black uppercase tracking-tight mb-12">
            {t("about.process.title2")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {steps.map((s, i) => (
              <div key={i} className="bg-[#0c0c0c] p-8 relative group hover:bg-[#111] transition-colors">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
                <div className="text-red-600/20 font-black text-5xl leading-none mb-4">{s.num}</div>
                <h3 className="text-white font-black text-sm uppercase tracking-widest mb-3">{s.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border border-white/5 bg-[#0c0c0c] p-8">
            <p className="text-white/25 text-xs font-bold tracking-[0.3em] uppercase mb-3">{t("about.process.guaranteeLabel")}</p>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              {t("about.process.guaranteeText")}
            </p>
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("about.forWho.label")}</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
            {t("about.forWho.title1")}<br />
            <span className="text-white/20">{t("about.forWho.title2")}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-white/50 text-base leading-relaxed mb-6">
                {t("about.forWho.p1")}
              </p>
              <div className="space-y-3">
                {useCases.map((u, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-5 h-0.5 bg-red-600 shrink-0" />
                    <p className="text-white/70 text-sm font-medium">{u}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/5 bg-[#0c0c0c] p-8 space-y-4">
              <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-2">{t("about.forWho.whyLabel")}</p>
              {whyItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon name={WHY_ICONS[i]} size={14} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-white/50 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Работы */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("about.works.label")}</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            {t("about.works.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {works.map((w, i) => (
              <div key={i} className="group relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={WORK_IMAGES[i]}
                  alt={w.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <div className="w-4 h-0.5 bg-red-600 mb-2" />
                  <p className="text-white text-xs font-black tracking-widest uppercase mb-1">{w.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Как заказать */}
      <section className="px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden border border-white/5 p-10 sm:p-16"
            style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)" }}
          >
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-700" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-700" />

            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-0.5 bg-red-600" />
              <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("about.howToOrder.label")}</p>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              {t("about.howToOrder.title1")}<br />
              <span className="text-white/20">{t("about.howToOrder.title2")}</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-4">
              {t("about.howToOrder.p1")}
            </p>

            <div className="space-y-2 mb-8">
              {howToOrderList.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-0.5 bg-red-600/60 shrink-0" />
                  <p className="text-white/50 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-xs italic mb-8 tracking-wide max-w-md">
              {t("about.howToOrder.quote")}
            </p>

            <ContactCTA />
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-white/5 px-6 sm:px-10 lg:px-20 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs tracking-wider uppercase">{t("about.footer.copyright")}</p>
          <Link to={homePath} className="text-white/20 hover:text-white/50 text-xs tracking-wider uppercase transition-colors">
            {t("nav.home")}
          </Link>
        </div>
      </footer>
    </div>
  )
}