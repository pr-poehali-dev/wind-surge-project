import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import SiteHeader from "@/components/SiteHeader"
import { ContactCTA } from "@/components/ContactBlock"

const steps = [
  { num: "01", title: "Концепция", desc: "Обсуждаем идею, референсы, технические задачи — вы становитесь соавтором изделия." },
  { num: "02", title: "3D-проект", desc: "Моделируем деталь именно под геометрию вашего автомобиля — никаких универсальных форм." },
  { num: "03", title: "Производство", desc: "Карбон, стекловолокно, ABS-пластик или 3D-печать — выбираем материал под задачу." },
  { num: "04", title: "Финиш", desc: "Подгонка, грунт, покраска, полировка — изделие готово к установке «под ключ»." },
]

const reasons = [
  {
    icon: "Shield",
    title: "Эксклюзивные бампера «ни у кого больше»",
    desc: "Проектируем и изготавливаем бампера на заказ, которые идеально интегрируются в дизайн авто. Никаких готовых форм — только 3D-моделирование под вашу геометрию и пожелания.",
  },
  {
    icon: "Layers",
    title: "Кузовные обвесы — чистая индивидуальность",
    desc: "Пороги, сплиттеры, диффузоры, расширители арок. Создаём кузовные обвесы любой сложности: от агрессивного тюнинг-стайл до утонченной классики. Каждый элемент — в единственном экземпляре.",
  },
  {
    icon: "Zap",
    title: "Кастомные фары — свет, который выделяет",
    desc: "Разрабатываем кастомные фары с уникальной графикой, DRL-светодиодами, проекционными линзами и лазерными технологиями. Это не просто свет — это архитектура.",
  },
  {
    icon: "PenTool",
    title: "Полный цикл «под ключ»",
    desc: "От эскиза и 3D-печати до покраски и установки. Вы получаете готовый уникальный кастом без необходимости искать других мастеров.",
  },
]

const useCases = [
  "Выставки и шоу-кары",
  "Личные проекты «для души»",
  "Рестомод классических авто",
  "Создание подписного стиля бренда",
]

const works = [
  {
    img: "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/bd5930f8-3e06-48a1-bd91-421e7ed5a176.png",
    title: "Infiniti FX — «Горилла»",
    desc: "Бампер + капот с агрессивным дизайном и полной интеграцией в кузов.",
  },
  {
    img: "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/c774ad16-b2d9-43fb-9dcc-cd526eea672d.png",
    title: "Land Cruiser — «Горилла»",
    desc: "Полный обвес в брутальном внедорожном стиле с агрессивным характером.",
  },
  {
    img: "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/cb82a27f-e4fb-40d7-a11a-235ece41d02b.png",
    title: "Infiniti FX — «Кобра»",
    desc: "Карбоновые клыки, расширение арок, полный body kit в единственном экземпляре.",
  },
]

export default function About() {
  useEffect(() => {
    document.title = "Уникальный кастом авто в России | Эксклюзивные бампера и обвесы на заказ — МОЙ КАСТОМ"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", "Кастомные фары, кузовные обвесы и бампера в единственном экземпляре. Мы не повторяемся — создаём искусство для вашего автомобиля. Индивидуальный проект под ключ. Тел: +7 (902) 255-77-53")
    const kw = document.querySelector('meta[name="keywords"]')
    if (kw) kw.setAttribute("content", "уникальный кастом, эксклюзивные бампера, кузовные обвесы на заказ, кастомные фары, обвес в единственном экземпляре, тюнинг на заказ")
    return () => {
      document.title = "МОЙ КАСТОМ — Кастомный тюнинг автомобилей: уникальные бампера, обвесы, фары на заказ"
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ background: "#080808", fontFamily: "'Inter', sans-serif" }}>

      <SiteHeader />

      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-20 pt-20 pb-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs tracking-widest uppercase mb-8 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            На главную
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">О мастерской</p>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
            Уникальный кастом —<br />
            <span className="text-white/20">только для вас</span>
          </h1>

          <div className="max-w-3xl space-y-5">
            <p className="text-white/60 text-lg leading-relaxed">
              Мы создаём эксклюзивные бампера, кузовные обвесы и кастомные фары, которые невозможно купить в магазине. Каждое изделие рождается в единственном экземпляре — специально под ваш автомобиль и ваш стиль.
            </p>
            <p className="text-white/40 text-base leading-relaxed">
              Мастерская PROCUSTOM — это место, где серийные решения не имеют значения. Только ручная работа, только персональный подход и только уникальный кастом.
            </p>
          </div>
        </div>
      </section>

      {/* Почему выбирают */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Наши преимущества</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-12">
            Почему выбирают нас?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {reasons.map((r, i) => (
              <div key={i} className="bg-[#0c0c0c] hover:bg-[#111] p-8 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-red-700/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={r.icon} size={18} className="text-red-500" />
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
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Процесс создания</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3">
            Как создаётся
          </h2>
          <h2 className="text-white/20 text-3xl sm:text-4xl font-black uppercase tracking-tight mb-12">
            ваш уникальный экземпляр?
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
            <p className="text-white/25 text-xs font-bold tracking-[0.3em] uppercase mb-3">Гарантия уникальности</p>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              Вы не встретите таких же фар или такого же бампера на другой машине — потому что каждое изделие создаётся под вас. Эскиз уходит в архив, чертежи не продаются повторно, матриц нет. Даже если кто-то закажет второй такой же обвес — мы откажем.
            </p>
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Кастом или тюнинг?</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
            Тюнинг на заказ —<br />
            <span className="text-white/20">вы соавтор</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-white/50 text-base leading-relaxed mb-6">
                Если нужны готовые детали из каталога — это не к нам. Мы создаём тюнинг на заказ, где вы — соавтор. Уникальный кастом подходит для:
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
              <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-2">Почему «единственный экземпляр» — это технология</p>
              {[
                { icon: "X", text: "Нет матриц и пресс-форм — каждый проект с нуля" },
                { icon: "Lock", text: "Нет повторной продажи чертежей — эскиз ваш" },
                { icon: "User", text: "Вы владеете макетом — деталь принадлежит вам" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon name={item.icon} size={14} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-white/50 text-sm">{item.text}</p>
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
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Наши работы</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            В единственном экземпляре
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {works.map((w, i) => (
              <div key={i} className="group relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={w.img}
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
              <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Как заказать</p>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              Заказать эксклюзивные бампера<br />
              <span className="text-white/20">или кастомные фары</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-4">
              Свяжитесь с нами — ответим в течение 24 часов. Для расчёта стоимости пришлите:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Фото автомобиля (общий вид)",
                "Референсы желаемого стиля",
                "Список деталей (бампера, обвесы, фары или полный комплект)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-0.5 bg-red-600/60 shrink-0" />
                  <p className="text-white/50 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-xs italic mb-8 tracking-wide max-w-md">
              «Ваша машина — холст. Мы — художники, которые не делают копий».
            </p>

            <ContactCTA />
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-white/5 px-6 sm:px-10 lg:px-20 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs tracking-wider uppercase">© 2024 ProCustom — эксклюзивный кастомный тюнинг</p>
          <Link to="/" className="text-white/20 hover:text-white/50 text-xs tracking-wider uppercase transition-colors">
            На главную
          </Link>
        </div>
      </footer>
    </div>
  )
}