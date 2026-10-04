import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import SiteHeader from "@/components/SiteHeader"
import { ContactCTA } from "@/components/ContactBlock"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/d6ba4790-6fcb-4396-b323-cb16d48b9d7c.jpg"
const INTERIOR_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/03cf7277-2acd-408e-8a8d-e5bfe6243168.jpg"

const BASE_GROUPS = [
  {
    title: "Микроавтобусы и фургоны",
    desc: "Mercedes-Benz Sprinter, Volkswagen Crafter, Ford Transit, Fiat Ducato — оптимальная база для компактного фуд-трака одного формата кухни.",
  },
  {
    title: "Автобусы",
    desc: "ПАЗ, Икарус, Setra, MAN — просторная база для фуд-траков с несколькими рабочими зонами и зоной для гостей внутри.",
  },
  {
    title: "Американские школьные автобусы",
    desc: "Blue Bird, Thomas Built Buses — яркий узнаваемый формат для сетевых проектов и фестивального стрит-фуда.",
  },
  {
    title: "Прицепы и трейлеры",
    desc: "Коммерческие прицепы-кухни — бюджетное решение, которое можно отцепить и оставить на точке без тягача.",
  },
]

const STAGES = [
  { num: "01", title: "Консультация и концепция", desc: "Обсуждаем формат кухни (гриль, пицца, кофе, десерты), меню, проходимость и бюджет." },
  { num: "02", title: "Подбор базового транспорта", desc: "Поможем найти подходящий фургон, автобус или прицеп с учётом будущей нагрузки на кузов." },
  { num: "03", title: "Проектирование кухни", desc: "Разрабатываем эргономичную планировку рабочей зоны по нормам СанПиН и пожарной безопасности." },
  { num: "04", title: "Демонтаж и подготовка", desc: "Освобождаем кузов, усиливаем пол под тяжёлое оборудование, прокладываем вентиляцию." },
  { num: "05", title: "Монтаж кухонного оборудования", desc: "Плиты, грили, фритюрницы, холодильное оборудование, вытяжка, газовое или электрическое подключение." },
  { num: "06", title: "Отделка и гигиенические покрытия", desc: "Нержавеющая сталь, моющиеся поверхности, освещение по нормам общепита." },
  { num: "07", title: "Брендирование и экстерьер", desc: "Яркая аэрография или плёнка с вашим брендом, вывеска, окно выдачи, барная стойка снаружи." },
  { num: "08", title: "Юридическое оформление", desc: "Помощь с документами на изменение конструкции ТС и разрешениями для работы в сфере общепита." },
]

const EQUIPMENT_ROWS = [
  { label: "Плита / гриль", basic: true, comfort: true, premium: true },
  { label: "Холодильное оборудование", basic: "Компактное", comfort: "Расширенное", premium: "Профессиональное" },
  { label: "Вытяжная система", basic: "Базовая", comfort: "Усиленная", premium: "Профессиональная с фильтрами" },
  { label: "Генератор / электропитание", basic: "2–3 кВт", comfort: "5–6 кВт", premium: "8+ кВт" },
  { label: "Водоснабжение", basic: false, comfort: true, premium: true },
  { label: "Окно выдачи с навесом", basic: false, comfort: true, premium: true },
  { label: "Барная стойка снаружи", basic: false, comfort: "опция", premium: true },
  { label: "Брендированная аэрография", basic: false, comfort: false, premium: true },
  { label: "Система видеонаблюдения", basic: false, comfort: false, premium: true },
]

const PROJECTS = [
  { emoji: "🍔", title: "Фуд-трак на базе Ford Transit", desc: "Компактная кухня для бургерной: гриль, фритюрница, холодильная витрина, яркое брендирование под сеть точек." },
  { emoji: "🍕", title: "Пицца-трак на базе Mercedes Sprinter", desc: "Дровяная печь для пиццы, разделочная зона, окно выдачи с навесом — мобильная пиццерия для фестивалей." },
  { emoji: "☕", title: "Кофейный трак на базе Fiat Ducato", desc: "Профессиональная кофемашина, витрина для десертов, стойка для гостей — формат для бизнес-центров и парков." },
  { emoji: "🌮", title: "Фуд-трак на базе ПАЗ", desc: "Просторная кухня с несколькими зонами приготовления для фестивального формата — мексиканская и азиатская кухня одновременно." },
]

const PRICING = [
  { level: "Эконом", price: "от 800 000 ₽", desc: "Демонтаж, базовая отделка, компактная кухонная зона, вытяжка, холодильник, окно выдачи" },
  { level: "Стандарт", price: "от 1 600 000 ₽", desc: "Всё из эконома + профессиональное оборудование, усиленная вытяжка, генератор, брендирование" },
  { level: "Премиум", price: "от 2 800 000 ₽", desc: "Всё из стандарта + полная кухня под ваше меню, барная стойка, аэрография, видеонаблюдение" },
]

const ORDER_STEPS = [
  { num: "1", title: "Оставьте заявку", desc: "Расскажите о формате вашего бизнеса и меню — мы предложим оптимальную концепцию фуд-трака." },
  { num: "2", title: "Встреча и обсуждение", desc: "Встречаемся в офисе или выезжаем к вам. Обсуждаем оборудование, бюджет и сроки." },
  { num: "3", title: "Проектирование", desc: "Разрабатываем проект кухни и сметы с учётом норм общепита. Согласовываем все детали." },
  { num: "4", title: "Переоборудование", desc: "Приступаем к работам. Сроки — от 2 до 5 месяцев в зависимости от сложности проекта." },
  { num: "5", title: "Приёмка и документы", desc: "Вы получаете готовый фуд-трак с оформленными документами, готовый к запуску бизнеса." },
]

const FAQ = [
  { q: "Сколько времени занимает переоборудование?", a: "От 2 до 5 месяцев в зависимости от сложности кухни и объёма работ." },
  { q: "Нужны ли разрешения для работы фуд-трака?", a: "Да, требуется оформление документов на изменение конструкции ТС и соблюдение санитарных норм. Мы помогаем с подготовкой документации." },
  { q: "Можно ли готовить на газу?", a: "Да, устанавливаем газовое оборудование с соблюдением всех норм безопасности, либо полностью электрическую кухню — на ваш выбор." },
  { q: "Какие гарантии вы даёте?", a: "Предоставляем гарантию на все виды работ и установленное оборудование — от 1 года." },
  { q: "Можно ли переоборудовать уже имеющийся у меня автомобиль?", a: "Да, мы работаем как с новыми, так и с уже эксплуатируемыми фургонами, автобусами и прицепами клиента." },
]

const WHY_US = [
  { icon: "Award", title: "Опыт", desc: "Знаем специфику кухонного оборудования и нормы общепита для мобильных точек" },
  { icon: "PenTool", title: "Индивидуальный подход", desc: "Кухня проектируется под ваше конкретное меню и формат работы" },
  { icon: "Layers", title: "Полный цикл", desc: "От проекта кухни до готового фуд-трака с документами" },
  { icon: "FileCheck", title: "Прозрачные цены", desc: "Фиксированная смета без скрытых платежей" },
  { icon: "MapPin", title: "Работа по всей России", desc: "Москва, Санкт-Петербург, регионы — подбор и доставка базовых автомобилей" },
]

export default function FoodTruck() {
  useEffect(() => {
    document.title = "Переоборудование автомобилей и автобусов в фуд-траки — под ключ | МОЙ КАСТОМ"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", "Переоборудование фургонов и автобусов в фуд-траки: профессиональная кухня, вытяжка, брендирование. Полный цикл под ключ. Звоните: +7 (902) 255-77-53")
    return () => {
      document.title = "МОЙ КАСТОМ — Кастомный тюнинг автомобилей: уникальные бампера, обвесы, фары на заказ"
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ background: "#080808", fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader />

      {/* Hero */}
      <section className="relative px-6 sm:px-10 lg:px-20 pt-16 pb-16 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Фуд-трак — переоборудованный автомобиль под мобильную кухню" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/70 to-[#080808]" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs tracking-widest uppercase mb-8 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            На главную
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Новое направление</p>
          </div>

          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
            Переоборудование автомобилей и автобусов<br />в фуд-траки — под ключ
          </h1>

          <div className="space-y-4 text-white/60 text-base leading-relaxed max-w-3xl">
            <p>
              Хотите запустить мобильный бизнес в сфере стрит-фуда? Мечтаете о собственном фуд-траке, который можно перемещать по городу вслед за аудиторией — от бизнес-центров до фестивалей?
            </p>
            <p>
              Мы переоборудуем фургоны, автобусы и прицепы в полноценные фуд-траки: с профессиональной кухней, вытяжкой, холодильным оборудованием и ярким брендированием. От компактной точки для кофе до просторной кухни для фестивального формата — мы спроектируем и построим именно то, что нужно вашему бизнесу.
            </p>
          </div>

          <div className="mt-8">
            <WhyUsButton />
          </div>
        </div>
      </section>

      {/* О формате */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">О формате</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
            Что такое фуд-трак?
          </h2>
          <div className="space-y-4 text-white/50 text-base leading-relaxed">
            <p>
              Фуд-трак — это переоборудованный автомобиль, внутри которого создана полноценная мобильная кухня: рабочие зоны для приготовления, холодильное и тепловое оборудование, вытяжная система и окно выдачи заказов. Это готовый бизнес на колёсах, который может работать в любой точке города.
            </p>
            <p>
              Формат фуд-траков стремительно развивается в России — от уличного стрит-фуда до премиальных гастрономических проектов на фестивалях. Мобильность позволяет не зависеть от аренды стационарного помещения и быстро реагировать на спрос: сегодня у бизнес-центра, завтра — на городском фестивале.
            </p>
          </div>
        </div>
      </section>

      {/* Что мы переоборудуем */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Наши услуги</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Что мы переоборудуем
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-3xl mb-10">
            Мы предлагаем полный цикл переоборудования любого автомобиля, автобуса или прицепа в фуд-трак — от выбора базы до монтажа кухонного оборудования и брендирования. Работаем с компактными фургонами для одной точки и большими автобусами для фестивального формата.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-6">
            {BASE_GROUPS.map((g, i) => (
              <div key={i} className="bg-[#0c0c0c] hover:bg-[#111] p-6 transition-colors group">
                <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">{g.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors">{g.desc}</p>
              </div>
            ))}
          </div>

          <div className="border border-white/5 bg-[#0c0c0c] p-6">
            <p className="text-white/40 text-sm leading-relaxed">
              <span className="text-red-500 font-bold">Важно:</span> планировка кухни всегда разрабатывается под ваше конкретное меню — гриль, выпечка, кофе или полноценный ресторан на колёсах требуют разного оборудования и расстановки.
            </p>
          </div>
        </div>
      </section>

      {/* Этапы переоборудования */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Как это работает</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Этапы переоборудования
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {STAGES.map((s, i) => (
              <div key={i} className="bg-[#0c0c0c] p-6 relative group hover:bg-[#111] transition-colors">
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500" />
                <div className="text-red-600/20 font-black text-4xl leading-none mb-3">{s.num}</div>
                <h3 className="text-white font-black text-xs uppercase tracking-widest mb-2">{s.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Интерьер фото + Варианты оснащения */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <img src={INTERIOR_IMAGE} alt="Кухня внутри фуд-трака" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Комплектация</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Варианты оснащения
          </h2>

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-4 gap-px bg-white/5 border border-white/5 mb-px">
                <div className="bg-[#0c0c0c] p-4">
                  <p className="text-white/30 text-xs font-bold tracking-widest uppercase">Элемент</p>
                </div>
                <div className="bg-[#0c0c0c] p-4">
                  <p className="text-white font-bold text-xs tracking-widest uppercase">Базовый</p>
                </div>
                <div className="bg-[#0c0c0c] p-4">
                  <p className="text-white font-bold text-xs tracking-widest uppercase">Комфорт</p>
                </div>
                <div className="bg-red-950/20 p-4">
                  <p className="text-red-400 font-bold text-xs tracking-widest uppercase">Премиум</p>
                </div>
              </div>
              {EQUIPMENT_ROWS.map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-px bg-white/5 border-x border-b border-white/5">
                  <div className="bg-[#0a0a0a] p-4">
                    <p className="text-white/50 text-xs">{row.label}</p>
                  </div>
                  {[row.basic, row.comfort, row.premium].map((val, j) => (
                    <div key={j} className={`p-4 ${j === 2 ? "bg-red-950/10" : "bg-[#0a0a0a]"}`}>
                      {typeof val === "boolean" ? (
                        val ? <Icon name="Check" size={14} className="text-red-500" /> : <Icon name="X" size={14} className="text-white/15" />
                      ) : (
                        <p className="text-white/50 text-xs">{val}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Почему это выгодно</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Преимущества собственного фуд-трака
          </h2>

          <div className="space-y-6">
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Низкий порог входа в бизнес</h3>
              <p className="text-white/40 text-sm leading-relaxed">Запуск фуд-трака обходится значительно дешевле открытия стационарного кафе — не нужно арендовать помещение и делать капитальный ремонт.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Мобильность и гибкость</h3>
              <p className="text-white/40 text-sm leading-relaxed">Фуд-трак может работать где угодно: у бизнес-центра в будни, на фестивале в выходные, у парка летом. Вы всегда там, где есть спрос.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Яркое брендирование</h3>
              <p className="text-white/40 text-sm leading-relaxed">Фуд-трак сам по себе рекламный носитель — узнаваемый дизайн привлекает внимание издалека и работает на узнаваемость бренда.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Полное юридическое сопровождение</h3>
              <p className="text-white/40 text-sm leading-relaxed">Помогаем с документами на изменение конструкции транспортного средства и подготовкой к проверкам санитарных служб.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Работаем с любым бюджетом</h3>
              <p className="text-white/40 text-sm leading-relaxed">От компактной точки для одного вида продукта до полноценной мобильной кухни с несколькими рабочими зонами — подберём решение под ваш бюджет.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Примеры проектов */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Портфолио</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Примеры реализованных проектов
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {PROJECTS.map((p, i) => (
              <div key={i} className="bg-[#0c0c0c] hover:bg-[#111] p-8 transition-colors group">
                <div className="text-3xl mb-4">{p.emoji}</div>
                <h3 className="text-white font-black text-base uppercase tracking-wide mb-3">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Стоимость */}
      <section id="pricing" className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Инвестиции</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Стоимость переоборудования
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-6">
            {PRICING.map((p, i) => (
              <div key={i} className={`p-8 ${i === 2 ? "bg-red-950/10" : "bg-[#0c0c0c]"}`}>
                <p className={`text-xs font-bold tracking-widest uppercase mb-2 ${i === 2 ? "text-red-400" : "text-white/30"}`}>{p.level}</p>
                <p className="text-white font-black text-2xl mb-4">{p.price}</p>
                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/25 text-xs italic">
            Цены указаны ориентировочно, без учёта стоимости базового автомобиля. Точная стоимость рассчитывается индивидуально после утверждения проекта.
          </p>
        </div>
      </section>

      {/* Как заказать */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Начать проект</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Как заказать переоборудование
          </h2>

          <div className="space-y-4">
            {ORDER_STEPS.map((s, i) => (
              <div key={i} className="flex items-start gap-5 border border-white/5 bg-[#0c0c0c] p-6">
                <div className="text-red-600/30 font-black text-3xl leading-none shrink-0">{s.num}</div>
                <div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Вопросы и ответы</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Часто задаваемые вопросы
          </h2>

          <Accordion type="single" collapsible className="border-t border-white/5">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5">
                <AccordionTrigger className="text-white text-sm sm:text-base font-bold text-left hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-sm leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Наши сильные стороны</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Почему выбирают нас?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {WHY_US.map((w, i) => (
              <div key={i} className="bg-[#0c0c0c] hover:bg-[#111] p-6 transition-colors group">
                <div className="w-10 h-10 rounded-sm bg-red-700/20 flex items-center justify-center mb-4">
                  <Icon name={w.icon} size={18} className="text-red-500" />
                </div>
                <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">{w.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/55 transition-colors">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contacts */}
      <section className="px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden border border-white/5 p-10 sm:p-16"
            style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)" }}
          >
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-700" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-700" />

            <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              Запустите свой фуд-трак<br /><span className="text-white/20">уже сегодня</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-8">
              Переоборудуйте фургон, автобус или прицеп в полноценный фуд-трак и запустите мобильный бизнес в сфере стрит-фуда. Звоните, пишите — мы ждём вас!
            </p>

            <ContactCTA />
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="border-t border-white/5 px-6 sm:px-10 lg:px-20 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs tracking-wider uppercase">© 2024 МОЙКАСТОМ — эксклюзивный кастомный тюнинг</p>
          <Link to="/" className="text-white/20 hover:text-white/50 text-xs tracking-wider uppercase transition-colors">
            На главную
          </Link>
        </div>
      </footer>
    </div>
  )
}

function WhyUsButton() {
  return (
    <a href="#pricing">
      <Button className="group bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase flex items-center gap-3 border-0 shadow-xl shadow-red-900/30 transition-all duration-300 hover:scale-[1.03]">
        Узнать стоимость
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </a>
  )
}
