import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const BG_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/1b2659b9-995d-4c2f-bec2-f7aecfdbbc77.png"

const services = [
  {
    icon: "Zap",
    title: "Кастомные фары",
    description: "Светодиодная оптика, ангельские глазки, лазерная графика — превратим свет в искусство.",
  },
  {
    icon: "Shield",
    title: "Кастомные бампера",
    description: "Агрессивный дизайн, встроенные воздухозаборники — мощь с первого взгляда.",
  },
  {
    icon: "Grid2x2",
    title: "Решётки радиатора",
    description: "Уникальный паттерн, подсветка, логотипы — лицо вашего автомобиля.",
  },
  {
    icon: "Triangle",
    title: "Кастомные спойлеры",
    description: "Крышки багажника, антикрылья, задние диффузоры — аэродинамика и стиль.",
  },
  {
    icon: "Car",
    title: "Кастомные кузова",
    description: "Расширение арок, переработка линий, body kit — полная трансформация.",
  },
  {
    icon: "PenTool",
    title: "Обвес под заказ",
    description: "От эскиза до готового изделия — эксклюзивный обвес под вашу идею.",
  },
  {
    icon: "Box",
    title: "3D-проектирование",
    description: "3D-моделирование и прототипирование пластиковых обвесов любой сложности.",
  },
  {
    icon: "Layers",
    title: "Эксклюзивные детали",
    description: "Накладки, пороги, вставки, навесные элементы — каждая деталь под вас.",
  },
]

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-1 h-7 bg-red-600 rounded-full" />
          <span className="text-white font-black text-xl sm:text-2xl tracking-[0.2em] uppercase">
            PRO<span className="text-red-500">CUSTOM</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Услуги", "Работы", "О нас", "Контакты"].map((item, i) => (
            <a
              key={i}
              href={`#${["services", "works", "about", "contacts"][i]}`}
              className="text-white/50 hover:text-white transition-colors text-sm font-medium tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white p-2 z-30"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ShimmerButton
          className="hidden md:flex text-white px-6 py-2 rounded-none text-sm font-bold tracking-widest uppercase"
          background="rgba(185,28,28,1)"
          shimmerColor="rgba(255,255,255,0.3)"
          borderRadius="4px"
        >
          Заказать
        </ShimmerButton>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#080808]/97 backdrop-blur-md z-10 flex flex-col items-center justify-center space-y-8">
          {["Услуги", "Работы", "О нас", "Контакты"].map((item, i) => (
            <a
              key={i}
              href={`#${["services", "works", "about", "contacts"][i]}`}
              className="text-white/70 text-2xl font-bold tracking-widest uppercase hover:text-red-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <ShimmerButton
            className="text-white px-10 py-3 text-sm font-bold tracking-widest uppercase mt-4"
            background="rgba(185,28,28,1)"
            borderRadius="4px"
          >
            Заказать
          </ShimmerButton>
        </div>
      )}

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-72px)] px-6 sm:px-10 lg:px-20">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 border border-red-800/60 bg-red-950/30 px-4 py-1.5 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-bold tracking-[0.3em] uppercase">Кастомизация авто</span>
          </div>
        </div>

        <h1 className="text-white font-black leading-tight mb-6 uppercase tracking-tight"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>
          Твой автомобиль —
          <br />
          <span className="text-red-600">твоё&nbsp;</span>
          <LineShadowText className="italic font-black text-white" shadowColor="rgba(185,28,28,0.6)">
            правило
          </LineShadowText>
        </h1>

        <p className="text-white/45 text-base sm:text-lg lg:text-xl mb-10 max-w-lg leading-relaxed tracking-wide">
          Кастомные фары, бампера, обвесы и кузова —<br />
          от идеи до готового изделия под ваш стиль.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="group relative bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase flex items-center gap-3 border-0 shadow-2xl shadow-red-900/40 hover:shadow-red-700/40 transition-all duration-300 hover:scale-[1.03]"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <button className="text-white/40 hover:text-white/80 text-sm font-medium tracking-widest uppercase transition-colors flex items-center gap-2">
            Посмотреть работы
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </main>

      {/* Gallery Section */}
      <section id="works" className="relative z-10 px-6 sm:px-10 lg:px-20 pt-24 sm:pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Наши работы</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3">
            Реализованные
          </h2>
          <h2 className="text-white/20 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-12">
            проекты
          </h2>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">

            {/* Large — full car, front 3/4 */}
            <div className="col-span-2 lg:col-span-2 group relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src="https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/05f30e56-b0be-4fe8-bf07-72d7a81b8a93.png"
                alt="Mercedes CLS кастом — морда волка"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-bold tracking-widest uppercase">Mercedes CLS — кастомный обвес «Волк»</p>
              </div>
            </div>

            {/* Right tall — bumper close-up */}
            <div className="col-span-2 lg:col-span-1 group relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/05f30e56-b0be-4fe8-bf07-72d7a81b8a93.png"
                alt="Кастомный бампер — клыки"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "30% 80%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-bold tracking-widest uppercase">Бампер с клыками</p>
              </div>
            </div>

            {/* Bottom left — hood mask */}
            <div className="col-span-1 group relative overflow-hidden aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/05f30e56-b0be-4fe8-bf07-72d7a81b8a93.png"
                alt="Маска на капоте"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "40% 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-bold tracking-widest uppercase">Маска на капоте</p>
              </div>
            </div>

            {/* Bottom center — wheel arch */}
            <div className="col-span-1 group relative overflow-hidden aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/05f30e56-b0be-4fe8-bf07-72d7a81b8a93.png"
                alt="Расширение арок"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "85% 70%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-bold tracking-widest uppercase">Расширение арок</p>
              </div>
            </div>

            {/* Bottom right — headlight */}
            <div className="col-span-2 lg:col-span-1 group relative overflow-hidden aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/05f30e56-b0be-4fe8-bf07-72d7a81b8a93.png"
                alt="Кастомные фары"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "55% 40%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-xs font-bold tracking-widest uppercase">Кастомные фары</p>
              </div>
            </div>

            {/* Cruiser Gorilla — full width */}
            <div className="col-span-2 lg:col-span-3 group relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
              <img
                src="https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/c774ad16-b2d9-43fb-9dcc-cd526eea672d.png"
                alt="Land Cruiser кастом — горилла"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 p-6 sm:p-10">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-sm sm:text-base font-black tracking-widest uppercase">Land Cruiser — обвес «Горилла»</p>
                <p className="text-white/50 text-xs mt-1 tracking-wider uppercase">Кастомная морда · LED-фары с оранжевыми глазами · лифт подвески</p>
              </div>
            </div>

            {/* BMW Shark — full width */}
            <div className="col-span-2 lg:col-span-3 group relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
              <img
                src="https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/7664a75e-f98d-40e6-9969-17d71178475b.png"
                alt="BMW M6 кастом — акулья пасть"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 p-6 sm:p-10">
                <div className="w-5 h-0.5 bg-red-600 mb-2" />
                <p className="text-white text-sm sm:text-base font-black tracking-widest uppercase">BMW M6 — обвес «Акула»</p>
                <p className="text-white/50 text-xs mt-1 tracking-wider uppercase">Карбоновые зубы · расширение арок · капот с воздухозаборниками</p>
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
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Что мы делаем</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3">
            Полный спектр
          </h2>
          <h2 className="text-white/20 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-16">
            кастомизации
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#0c0c0c] hover:bg-[#111] p-6 transition-all duration-300 hover:shadow-inner relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <Icon name={service.icon} size={22} className="text-red-600/80 group-hover:text-red-500 transition-colors" />
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
              <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Начать проект</p>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-3">
              Готовы создать
            </h2>
            <h2 className="text-white/20 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
              что-то эксклюзивное?
            </h2>

            <p className="text-white/40 text-sm sm:text-base mb-10 max-w-md leading-relaxed tracking-wide">
              Расскажите об идее — мы воплотим её в металле и пластике.
            </p>

            <Button
              className="group bg-red-700 hover:bg-red-600 text-white px-10 py-4 rounded-sm text-sm font-bold tracking-widest uppercase flex items-center gap-3 border-0 shadow-xl shadow-red-900/30 hover:shadow-red-700/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Связаться с нами
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}