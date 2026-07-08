import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"
import { LineShadowText } from "@/components/line-shadow-text"
import Icon from "@/components/ui/icon"
import SiteHeader from "@/components/SiteHeader"
import { PHONE, PHONE_DISPLAY, ContactCTA, WhatsAppButton, MessengerLinks } from "@/components/ContactBlock"

const BG_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/1b2659b9-995d-4c2f-bec2-f7aecfdbbc77.png"

const SERVICE_ICONS = ["Zap", "Shield", "Grid2x2", "Triangle", "Car", "PenTool", "Box", "Layers"]

const GALLERY_IMAGES = [
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/bd5930f8-3e06-48a1-bd91-421e7ed5a176.png",
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/05f30e56-b0be-4fe8-bf07-72d7a81b8a93.png",
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/c774ad16-b2d9-43fb-9dcc-cd526eea672d.png",
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/cb82a27f-e4fb-40d7-a11a-235ece41d02b.png",
  "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/7664a75e-f98d-40e6-9969-17d71178475b.png",
]

export default function Index() {
  const { t } = useTranslation()
  const galleryItems = t("gallery.items", { returnObjects: true }) as { title: string; desc: string }[]
  const services = t("services.items", { returnObjects: true }) as { title: string; description: string }[]
  const golodItems = t("golod.items", { returnObjects: true }) as { animal: string; desc: string; tag: string }[]
  const footerServices = t("footer.servicesList", { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#080808", fontFamily: "'Inter', sans-serif" }}>

      {/* Background — hero image bottom half */}
      <div
        className="fixed inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      />
      {/* Light overlay — car stays visible */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#080808]/85 via-transparent to-[#080808]/60" />
      {/* Left side gradient for text readability */}
      <div className="fixed inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)" }} />

      <SiteHeader />

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-72px)] px-6 sm:px-10 lg:px-20">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 border border-red-800/60 bg-red-950/30 px-4 py-1.5 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-bold tracking-[0.3em] uppercase">{t("hero.badge")}</span>
          </div>
        </div>

        <h1 className="text-white font-black leading-tight mb-6 uppercase tracking-tight"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>
          {t("hero.title1")}
          <br />
          <span className="text-red-600">{t("hero.titleAccent")}&nbsp;</span>
          <LineShadowText className="italic font-black text-white" shadowColor="rgba(185,28,28,0.6)">
            {t("hero.titleEnd")}
          </LineShadowText>
        </h1>

        <p className="text-white/45 text-base sm:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed tracking-wide">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton label={t("hero.ctaDiscuss")} />
            <a href="#works" className="text-white/40 hover:text-white/80 text-sm font-medium tracking-widest uppercase transition-colors flex items-center gap-2 self-center">
              {t("hero.ctaWorks")}
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <MessengerLinks />
        </div>
      </main>

      {/* Gallery Section */}
      <section id="works" className="relative z-10 px-6 sm:px-10 lg:px-20 pt-24 sm:pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("gallery.label")}</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3">
            {t("gallery.title1")}
          </h2>
          <h2 className="text-white/20 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-12">
            {t("gallery.title2")}
          </h2>

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-3 auto-rows-[220px] sm:auto-rows-[260px]">

            {/* 1. Финик Горилла — большой слева */}
            <div className="col-span-2 lg:col-span-7 row-span-2 group relative overflow-hidden">
              <img
                src={GALLERY_IMAGES[0]}
                alt={galleryItems[0]?.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-sm font-black tracking-widest uppercase">{galleryItems[0]?.title}</p>
                <p className="text-white/50 text-xs mt-1 tracking-wider uppercase">{galleryItems[0]?.desc}</p>
              </div>
            </div>

            {/* 2. CLS Волк — правый верх */}
            <div className="col-span-1 lg:col-span-5 group relative overflow-hidden">
              <img
                src={GALLERY_IMAGES[1]}
                alt={galleryItems[1]?.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-black tracking-widest uppercase">{galleryItems[1]?.title}</p>
              </div>
            </div>

            {/* 3. Land Cruiser Горилла — правый низ */}
            <div className="col-span-1 lg:col-span-5 group relative overflow-hidden">
              <img
                src={GALLERY_IMAGES[2]}
                alt={galleryItems[2]?.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-black tracking-widest uppercase">{galleryItems[2]?.title}</p>
              </div>
            </div>

            {/* 4. Финик Кобра — нижний левый */}
            <div className="col-span-1 lg:col-span-6 group relative overflow-hidden">
              <img
                src={GALLERY_IMAGES[3]}
                alt={galleryItems[3]?.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-black tracking-widest uppercase">{galleryItems[3]?.title}</p>
                <p className="text-white/50 text-xs mt-0.5 tracking-wider uppercase">{galleryItems[3]?.desc}</p>
              </div>
            </div>

            {/* 5. BMW Акула — нижний правый */}
            <div className="col-span-1 lg:col-span-6 group relative overflow-hidden">
              <img
                src={GALLERY_IMAGES[4]}
                alt={galleryItems[4]?.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-black tracking-widest uppercase">{galleryItems[4]?.title}</p>
                <p className="text-white/50 text-xs mt-0.5 tracking-wider uppercase">{galleryItems[4]?.desc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("services.label")}</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3">
            {t("services.title1")}
          </h2>
          <h2 className="text-white/20 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-16">
            {t("services.title2")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0c0c0c] hover:bg-[#111] p-6 transition-all duration-300 hover:shadow-inner relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <Icon name={SERVICE_ICONS[index]} size={22} className="text-red-600/80 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">{service.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacts" className="relative z-10 px-6 sm:px-10 lg:px-20 pb-28">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden border border-white/8 p-12 sm:p-16"
            style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)" }}
          >
            {/* Accent corner */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-700" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-700" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5 bg-red-600" />
              <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("cta.label")}</p>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3">
              {t("cta.title1")}
            </h2>
            <h2 className="text-white/20 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
              {t("cta.title2")}
            </h2>

            <p className="text-white/40 text-sm sm:text-base mb-10 max-w-md leading-relaxed tracking-wide">
              {t("cta.desc")}
            </p>

            <ContactCTA />
          </div>
        </div>
      </section>

      {/* Голод — линейка */}
      <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">{t("golod.label")}</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3">
            {t("golod.title1")}
          </h2>
          <h2 className="text-white/20 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
            {t("golod.title2")}
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
            {t("golod.desc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {golodItems.map((item, i) => (
              <div key={i} className="group bg-[#0c0c0c] hover:bg-[#111] p-8 transition-all duration-300 relative overflow-hidden cursor-default">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
                <div className="text-red-600/30 font-black text-6xl sm:text-7xl uppercase tracking-tighter leading-none mb-4 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white font-black text-xl uppercase tracking-widest mb-1">«{item.animal}»</h3>
                <p className="text-red-500/70 text-xs font-bold tracking-widest uppercase mb-4">{item.tag}</p>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-white/5 bg-[#0c0c0c] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold tracking-wider uppercase text-sm mb-1">{t("golod.wantBeast")}</p>
              <p className="text-white/40 text-xs tracking-wide">{t("golod.wantBeastDesc")}</p>
            </div>
            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <Button className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase border-0 transition-all duration-300 hover:scale-[1.03]">
                {t("golod.orderButton")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="relative z-10 border-t border-white/5 px-6 sm:px-10 lg:px-20 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-7 bg-red-600 rounded-full" />
                <span className="text-white font-black text-xl tracking-[0.2em] uppercase">PRO<span className="text-red-500">CUSTOM</span></span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                {t("footer.brandDesc")}
              </p>
            </div>

            {/* Contacts */}
            <div>
              <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-5">{t("contact.ctaText")}</p>
              <a href={`tel:${PHONE}`} className="text-white font-bold text-lg tracking-wider hover:text-red-400 transition-colors block mb-4">
                {PHONE_DISPLAY}
              </a>
              <MessengerLinks className="flex-col" />
            </div>

            {/* Services nav */}
            <div>
              <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-5">{t("footer.servicesTitle")}</p>
              <div className="space-y-2">
                {footerServices.map(s => (
                  <p key={s} className="text-white/35 text-sm">{s}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/20 text-xs tracking-wider uppercase">{t("footer.copyright")}</p>
            <p className="text-white/15 text-xs">procustom.ru</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
