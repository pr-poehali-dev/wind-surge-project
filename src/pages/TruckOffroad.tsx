import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import SiteHeader from "@/components/SiteHeader"
import { ContactCTA } from "@/components/ContactBlock"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/7ee51452-28e9-4398-beae-1611ce9f5a26.jpg"
const ORIGINAL_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/bucket/8a240937-cda8-4bab-af3d-7aac607f2588.jpg"
const DETAIL_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/4ac567af-09e0-43c3-bbae-efafc197e6f6.jpg"

const BASE_GROUPS = [
  {
    title: "Советские и постсоветские грузовики",
    desc: "ЗИЛ-130, ЗИЛ-131, ГАЗ-53, ГАЗ-66, КамАЗ, Урал — культовые кабины с характером, идеальная база для монструозного внедорожника.",
  },
  {
    title: "Бортовые и самосвальные грузовики",
    desc: "Любой бортовой кузов или самосвал мы перестраиваем в единый цельный силуэт, сросшийся с кабиной в монолитный off-road корпус.",
  },
  {
    title: "Европейские и американские грузовики",
    desc: "MAN, Mercedes-Benz, Scania, Ford, Chevrolet — тяжёлые капотные и бескапотные шасси для премиальных проектов.",
  },
  {
    title: "Военные и спецшасси",
    desc: "ЗИЛ-157, ГАЗ-69, КрАЗ — полноприводные грузовики повышенной проходимости как основа для экспедиционных монстров.",
  },
]

const STAGES = [
  { num: "01", title: "Консультация и концепция", desc: "Обсуждаем базовый грузовик, желаемые габариты, цветовое решение и назначение будущего внедорожника." },
  { num: "02", title: "Подбор и диагностика шасси", desc: "Проверяем техническое состояние рамы, двигателя и подвески — фундамент будущего монстра должен быть надёжным." },
  { num: "03", title: "Проектирование цельного кузова", desc: "Разрабатываем 3D-модель, где кабина и задняя часть сливаются в единый бескомпромиссный силуэт внедорожника." },
  { num: "04", title: "Демонтаж и усиление рамы", desc: "Снимаем родной кузов, усиливаем раму под увеличенные колёса и новую геометрию корпуса." },
  { num: "05", title: "Лифт подвески и колёса", desc: "Устанавливаем портальные мосты или лифт-комплекты, огромные внедорожные колёса, усиленные амортизаторы." },
  { num: "06", title: "Формовка цельного кузова", desc: "Стеклопластик, карбон и металл формируют заднюю часть так, чтобы она составляла единое целое с кабиной." },
  { num: "07", title: "Покраска в цвет кабины", desc: "Весь корпус окрашивается в один тон с оригинальной кабиной — никаких визуальных швов между кабиной и кузовом." },
  { num: "08", title: "Юридическое оформление", desc: "Полное сопровождение по внесению изменений в конструкцию ТС и получению документов." },
]

const EQUIPMENT_ROWS = [
  { label: "Увеличение колёс", basic: "до 38 дюймов", comfort: "до 44 дюймов", premium: "50+ дюймов" },
  { label: "Лифт подвески", basic: "Базовый комплект", comfort: "Портальные мосты", premium: "Полная кастом-подвеска" },
  { label: "Цельный кузов с кабиной", basic: true, comfort: true, premium: true },
  { label: "Внедорожные бамперы и защита", basic: true, comfort: true, premium: true },
  { label: "Лебёдка", basic: false, comfort: true, premium: true },
  { label: "Шноркель и защита двигателя", basic: false, comfort: true, premium: true },
  { label: "Светодиодная балка и фары", basic: false, comfort: true, premium: true },
  { label: "Интерьер под заказ", basic: false, comfort: false, premium: true },
  { label: "Пневмоподвеска", basic: false, comfort: false, premium: true },
]

const PROJECTS = [
  { emoji: "🚛", title: "ЗИЛ-130 — «Монстр»", desc: "Классическая белая кабина ЗИЛ-130 и цельный задний кузов того же цвета, слитые в единый off-road силуэт. Огромные колёса, лифт подвески, мощная защита." },
  { emoji: "🏔️", title: "ГАЗ-66 — «Экспедиция»", desc: "Легендарный вездеход переосмыслен в гигантский внедорожник для дальних экспедиций: усиленная рама, шноркель, автономность на бездорожье." },
  { emoji: "⚙️", title: "КамАЗ — «Титан»", desc: "Тяжёлое шасси КамАЗ превращено в внедорожного гиганта с портальными мостами и колёсами свыше 50 дюймов." },
  { emoji: "🔥", title: "Урал — «Левиафан»", desc: "Армейский грузовик Урал в новом амплуа: монолитный кузов, агрессивный дизайн, полная внедорожная экипировка." },
]

const PRICING = [
  { level: "Эконом", price: "от 2 000 000 ₽", desc: "Лифт подвески, увеличенные колёса, базовая защита, покраска в цвет кабины" },
  { level: "Стандарт", price: "от 3 500 000 ₽", desc: "Всё из эконома + цельный формованный кузов, портальные мосты, лебёдка, LED-освещение" },
  { level: "Премиум", price: "от 6 000 000 ₽", desc: "Всё из стандарта + колёса 50+ дюймов, кастомный интерьер, пневмоподвеска, шноркель" },
]

const ORDER_STEPS = [
  { num: "1", title: "Оставьте заявку", desc: "Расскажите, какой грузовик хотите превратить в гигантский внедорожник — мы предложим концепцию." },
  { num: "2", title: "Встреча и обсуждение", desc: "Встречаемся в офисе или выезжаем к вам, осматриваем грузовик, обсуждаем бюджет и дизайн." },
  { num: "3", title: "Проектирование", desc: "Разрабатываем 3D-проект цельного кузова и смету. Согласовываем цвет и комплектацию." },
  { num: "4", title: "Переоборудование", desc: "Приступаем к работам. Сроки — от 3 до 7 месяцев в зависимости от сложности проекта." },
  { num: "5", title: "Приёмка и документы", desc: "Вы получаете готового гиганта с полным пакетом оформленных документов." },
]

const FAQ = [
  { q: "Какие грузовики можно превратить во внедорожник?", a: "Практически любой бортовой, самосвальный или капотный грузовик — от советских ЗИЛ и ГАЗ до современных европейских шасси." },
  { q: "Сколько времени занимает переоборудование?", a: "От 3 до 7 месяцев в зависимости от сложности формовки цельного кузова и уровня оснащения." },
  { q: "Можно ли сохранить родной цвет кабины для всего кузова?", a: "Да, это наш фирменный подход: задняя часть всегда окрашивается в цвет кабины, чтобы кузов выглядел монолитным, единым целым." },
  { q: "Нужно ли вносить изменения в ПТС?", a: "Да, все изменения конструкции оформляются официально. Мы берём на себя полное юридическое сопровождение." },
  { q: "Можно ли использовать такой внедорожник на бездорожье по-настоящему?", a: "Да, мы не просто меняем внешний вид — усиливаем раму, подвеску и защиту так, чтобы машина реально могла ездить по бездорожью." },
]

const WHY_US = [
  { icon: "Award", title: "Опыт", desc: "Знаем специфику переоборудования тяжёлых грузовых шасси в экстремальные внедорожники" },
  { icon: "PenTool", title: "Индивидуальный подход", desc: "Каждый кузов формуется индивидуально под конкретную кабину и её цвет" },
  { icon: "Layers", title: "Полный цикл", desc: "От 3D-проекта до готового гиганта с документами" },
  { icon: "FileCheck", title: "Прозрачные цены", desc: "Фиксированная смета без скрытых платежей" },
  { icon: "MapPin", title: "Работа по всей России", desc: "Москва, Санкт-Петербург, регионы — подбор и доставка базовых грузовиков" },
]

export default function TruckOffroad() {
  useEffect(() => {
    document.title = "Переоборудование грузовиков в кастомные внедорожники — под ключ | МОЙ КАСТОМ"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", "Переделываем любые грузовики в гигантские кастомные внедорожники: цельный кузов в цвет кабины, лифт подвески, огромные колёса. Полный цикл под ключ. Звоните: +7 (902) 255-77-53")
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
          <img src={HERO_IMAGE} alt="Гигантский кастомный внедорожник из грузовика" className="w-full h-full object-cover opacity-25" />
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
            Переоборудование грузовиков<br />в кастомные внедорожники
          </h1>

          <div className="space-y-4 text-white/60 text-base leading-relaxed max-w-3xl">
            <p>
              Хотите автомобиль, которого больше ни у кого нет? МОЙ КАСТОМ переделывает любые грузовики в гигантские внедорожники — настоящих монстров дорог и бездорожья, которые собирают толпы и заставляют оборачиваться каждого встречного.
            </p>
            <p>
              Мы берём обычный грузовик — бортовой, самосвал, капотный или бескапотный — и превращаем его в единый, монолитный внедорожный силуэт: задняя часть кузова формуется как цельное продолжение кабины, в её же цвете, без единого визуального шва.
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
            Что такое кастомный внедорожник из грузовика?
          </h2>
          <div className="space-y-4 text-white/50 text-base leading-relaxed">
            <p>
              Это полная трансформация обычного рабочего грузовика в гигантский внедорожник: мы увеличиваем колёсную базу, поднимаем подвеску, устанавливаем огромные колёса — и самое главное, перестраиваем заднюю часть кузова так, чтобы она составляла единое целое с кабиной. Никакого отдельного борта или кузова — только цельный, агрессивный силуэт в одном цвете.
            </p>
            <p>
              Любой грузовик — хоть легендарный ЗИЛ-130, хоть ГАЗ-66, хоть тяжёлый КамАЗ — может стать основой для настоящего монстра. Мы сохраняем узнаваемую кабину и строим вокруг неё абсолютно новый, единый кузов, превращая рабочую машину в произведение кастомного искусства на колёсах.
            </p>
          </div>
        </div>
      </section>

      {/* До/После пример */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Пример трансформации</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            ЗИЛ-130 — до и после
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            <div className="bg-[#0c0c0c]">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={ORIGINAL_IMAGE} alt="ЗИЛ-130 — исходный бортовой грузовик" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-2">До</p>
                <p className="text-white/50 text-sm leading-relaxed">Классический бортовой ЗИЛ-130: белая кабина и отдельный синий деревянный кузов.</p>
              </div>
            </div>
            <div className="bg-[#0c0c0c]">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={DETAIL_IMAGE} alt="ЗИЛ-130 после переоборудования в кастомный внедорожник" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-2">После</p>
                <p className="text-white/50 text-sm leading-relaxed">Цельный белый корпус в цвет кабины, огромные внедорожные колёса, лифт подвески — монолитный силуэт гиганта.</p>
              </div>
            </div>
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
            Какие грузовики мы переоборудуем
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-3xl mb-10">
            Мы работаем с любыми грузовиками — от советской классики до современных европейских и американских шасси. Главное условие — крепкая рама и исправный двигатель, остальное мы берём на себя.
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
              <span className="text-red-500 font-bold">Наш принцип:</span> задняя часть кузова никогда не остаётся отдельным элементом — мы формуем её как продолжение кабины, в идентичном цвете, чтобы получился единый, бескомпромиссный силуэт внедорожника.
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

      {/* Варианты оснащения */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
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
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Почему это впечатляет</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-10">
            Преимущества собственного грузовика-гиганта
          </h2>

          <div className="space-y-6">
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Абсолютная уникальность</h3>
              <p className="text-white/40 text-sm leading-relaxed">Ни одного похожего автомобиля в мире — кузов формуется индивидуально под конкретную кабину и её цвет, превращая рабочий грузовик в единственный в своём роде арт-объект.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Реальная проходимость</h3>
              <p className="text-white/40 text-sm leading-relaxed">Это не просто визуальный тюнинг — усиленная рама, лифт подвески и огромные колёса дают настоящую внедорожную способность, а не только эффектный вид.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Монолитный визуальный эффект</h3>
              <p className="text-white/40 text-sm leading-relaxed">Отсутствие визуального шва между кабиной и кузовом создаёт эффект цельнолитого гиганта — машина выглядит так, будто изначально была задумана именно такой.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Полное юридическое сопровождение</h3>
              <p className="text-white/40 text-sm leading-relaxed">Все изменения конструкции оформляются официально — вы получаете документы, позволяющие сразу начать легальную эксплуатацию внедорожника.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Работаем с любым бюджетом</h3>
              <p className="text-white/40 text-sm leading-relaxed">От базового лифта и увеличенных колёс до полного формования цельного кузова с премиальной экипировкой — подберём решение под ваш бюджет.</p>
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
            Цены указаны ориентировочно, без учёта стоимости базового грузовика. Точная стоимость рассчитывается индивидуально после утверждения проекта.
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
              Создайте своего гиганта<br /><span className="text-white/20">уже сегодня</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-8">
              Переоборудуйте любой грузовик в гигантский кастомный внедорожник и станьте обладателем автомобиля, которого больше нет ни у кого. Звоните, пишите — мы ждём вас!
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
