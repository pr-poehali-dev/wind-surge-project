import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { LineShadowText } from "@/components/line-shadow-text"
import { ShimmerButton } from "@/components/shimmer-button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const BG_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/f4e2af9f-2472-495d-bd1a-ce84c9006624.jpg"

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
    <div className="min-h-screen relative overflow-hidden font-sans">

      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5">
        <div className="flex items-center">
          <span className="text-white font-extrabold text-xl sm:text-2xl tracking-widest drop-shadow-lg">
            NAMAKS <span className="text-orange-400">CUSTOM</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Услуги", "Работы", "О нас", "Контакты"].map((item, i) => (
            <a
              key={i}
              href={`#${["services", "works", "about", "contacts"][i]}`}
              className="text-white/80 hover:text-white transition-colors text-sm lg:text-base font-medium drop-shadow"
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
          className="hidden md:flex text-white px-5 lg:px-7 py-2 rounded-xl text-sm lg:text-base font-semibold shadow-xl"
          background="rgba(234,88,12,0.9)"
          shimmerColor="#fff"
        >
          Заказать
        </ShimmerButton>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/90 backdrop-blur-md z-10 flex flex-col items-center justify-center space-y-8">
          {["Услуги", "Работы", "О нас", "Контакты"].map((item, i) => (
            <a
              key={i}
              href={`#${["services", "works", "about", "contacts"][i]}`}
              className="text-white text-2xl font-semibold hover:text-orange-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <ShimmerButton
            className="text-white px-8 py-3 rounded-xl text-base font-semibold shadow-xl mt-4"
            background="rgba(234,88,12,0.9)"
          >
            Заказать
          </ShimmerButton>
        </div>
      )}

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-80px)] px-6 sm:px-10 lg:px-20 max-w-5xl">
        <div className="mb-5">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/40 rounded-full px-4 py-2">
            <span className="text-orange-300 text-xs font-bold tracking-widest uppercase">Кастомизация авто</span>
          </div>
        </div>

        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 drop-shadow-2xl">
          Твой автомобиль —
          <br />
          твоё{" "}
          <LineShadowText className="italic font-light text-orange-300" shadowColor="rgba(251,146,60,0.8)">
            правило
          </LineShadowText>
        </h1>

        <p className="text-white/80 text-base sm:text-xl lg:text-2xl mb-10 max-w-xl leading-relaxed drop-shadow">
          Кастомные фары, бампера, обвесы и кузова —<br />
          от идеи до готового изделия под ваш стиль.
        </p>

        <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-3 border border-orange-400/40 shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
          Обсудить проект
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </main>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">Что мы делаем</p>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
              Полный спектр{" "}
              <span className="text-orange-400">кастомизации</span>
            </h2>
            <p className="text-white/60 mt-4 text-base sm:text-lg max-w-xl mx-auto">
              Каждый элемент — ручная работа. Каждый проект — уникален.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-black/40 hover:bg-black/55 backdrop-blur-md border border-white/15 hover:border-orange-400/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/15"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-500/25 flex items-center justify-center mb-4 group-hover:bg-orange-500/40 transition-colors shadow-lg shadow-orange-500/20">
                  <Icon name={service.icon} size={22} className="text-orange-400" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacts" className="relative z-10 px-6 sm:px-10 lg:px-20 pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-md border border-orange-400/25 rounded-3xl px-8 py-16 shadow-2xl shadow-orange-500/10">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Готовы создать что-то{" "}
              <span className="text-orange-400">эксклюзивное?</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg mb-10 max-w-lg mx-auto">
              Расскажите об идее — мы воплотим её в металле и пластике.
            </p>
            <Button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl text-lg font-bold flex items-center gap-3 mx-auto border border-orange-400/40 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
              Связаться с нами
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
