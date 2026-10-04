import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import SiteHeader from "@/components/SiteHeader"
import { ContactCTA } from "@/components/ContactBlock"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/edd4043f-c8d6-4bf9-9908-85a34f99c673.jpg"
const INTERIOR_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/b55dbb96-38be-4318-a3f0-a2d119f0e041.jpg"

const BASE_GROUPS = [
  {
    title: "Микроавтобусы и фургоны",
    desc: "Mercedes-Benz Sprinter, Volkswagen Crafter, Ford Transit, Fiat Ducato — самая популярная база для компактного автодома на 2–4 человек.",
  },
  {
    title: "Большие автобусы",
    desc: "Setra, MAN, Neoplan, Volvo, ПАЗ, ЛиАЗ, Икарус — просторные дома на колёсах для семьи или передвижного офиса с полноценными комнатами.",
  },
  {
    title: "Американские школьные автобусы",
    desc: "Blue Bird, Thomas Built Buses — культовый формат Skoolie, популярный в США и набирающий популярность в России.",
  },
  {
    title: "Грузовые шасси",
    desc: "МАЗ, КамАЗ, Iveco, MAN TGS — для экспедиционных домов на колёсах повышенной проходимости.",
  },
]

const STAGES = [
  { num: "01", title: "Консультация и концепция", desc: "Обсуждаем образ жизни, количество человек, бюджет и маршруты — подбираем оптимальную планировку." },
  { num: "02", title: "Подбор базового транспорта", desc: "Поможем найти подходящий фургон или автобус, проверим техническое состояние и документы." },
  { num: "03", title: "Проектирование планировки", desc: "3D-проект интерьера: спальные места, кухня, санузел, системы хранения под ваши задачи." },
  { num: "04", title: "Демонтаж и усиление", desc: "Освобождаем кузов, усиливаем пол, проводим шумо- и теплоизоляцию для всесезонного использования." },
  { num: "05", title: "Инженерные системы", desc: "Автономное электропитание, солнечные панели, водоснабжение, отопление, вентиляция." },
  { num: "06", title: "Отделка интерьера", desc: "Экологичные материалы, мебель на заказ, кухонный гарнитур, санузел с душем." },
  { num: "07", title: "Внешняя отделка", desc: "Покраска, обвес, маркизы, выносные ступени, крепления для велосипедов и оборудования." },
  { num: "08", title: "Юридическое оформление", desc: "Внесение изменений в конструкцию ТС и получение документов для легальной эксплуатации." },
]

const EQUIPMENT_ROWS = [
  { label: "Спальное место", basic: "Раскладной диван", comfort: "Отдельная кровать", premium: "Двуспальная + детская" },
  { label: "Кухня", basic: "Плита + мойка", comfort: "Плита + холодильник", premium: "Полная кухня + духовка" },
  { label: "Автономное питание", basic: "AGM-батарея", comfort: "Литий + инвертор", premium: "Литий + солнечные панели" },
  { label: "Отопление", basic: true, comfort: true, premium: true },
  { label: "Санузел", basic: false, comfort: "Биотуалет", premium: "С душем и бойлером" },
  { label: "Кондиционер", basic: false, comfort: true, premium: true },
  { label: "Телевизор / мультимедиа", basic: false, comfort: true, premium: true },
  { label: "Выдвижная терраса / маркиза", basic: false, comfort: false, premium: true },
  { label: "Система «умный дом»", basic: false, comfort: false, premium: true },
]

const PROJECTS = [
  { emoji: "🚐", title: "Автодом на базе Mercedes Sprinter", desc: "Компактный дом на колёсах для путешествий вдвоём: кухня, спальня-трансформер, душевая кабина, автономное питание на 3 дня." },
  { emoji: "🏕️", title: "Семейный дом на базе MAN TGE", desc: "Просторная планировка для семьи из четырёх человек: двухъярусные кровати для детей, отдельная спальня, полноценная кухня." },
  { emoji: "🚌", title: "Skoolie на базе Blue Bird", desc: "Американский школьный автобус, превращённый в лофт на колёсах: высокие потолки, большая гостиная зона, рабочее место." },
  { emoji: "🛻", title: "Экспедиционный дом на базе КамАЗ", desc: "Полноприводное шасси для путешествий по бездорожью: усиленная подвеска, увеличенный клиренс, автономность до 2 недель." },
]

const PRICING = [
  { level: "Эконом", price: "от 900 000 ₽", desc: "Демонтаж, утепление, базовая мебель, спальное место, простая кухонная зона, аккумулятор" },
  { level: "Стандарт", price: "от 1 800 000 ₽", desc: "Всё из эконома + полноценная кухня, автономное отопление, биотуалет, литиевые батареи" },
  { level: "Премиум", price: "от 3 200 000 ₽", desc: "Всё из стандарта + душевая с бойлером, солнечные панели, кондиционер, выдвижная терраса, умный дом" },
]

const ORDER_STEPS = [
  { num: "1", title: "Оставьте заявку", desc: "Расскажите о своих планах на путешествия — мы предложим оптимальную концепцию и базовый автомобиль." },
  { num: "2", title: "Встреча и обсуждение", desc: "Встречаемся в офисе или выезжаем к вам. Обсуждаем планировку, бюджет и сроки." },
  { num: "3", title: "Проектирование", desc: "Разрабатываем 3D-проект интерьера и смету. Согласовываем материалы и комплектацию." },
  { num: "4", title: "Переоборудование", desc: "Приступаем к работам. Сроки — от 2 до 6 месяцев в зависимости от сложности проекта." },
  { num: "5", title: "Приёмка и документы", desc: "Вы получаете готовый дом на колёсах с полным пакетом документов, готовый к путешествиям." },
]

const FAQ = [
  { q: "Сколько времени занимает переоборудование?", a: "От 2 до 6 месяцев в зависимости от сложности планировки и уровня оснащения." },
  { q: "Можно ли жить в автодоме круглый год?", a: "Да, при комплексном утеплении и установке автономного отопления дом на колёсах пригоден для всесезонного проживания." },
  { q: "Нужно ли вносить изменения в ПТС?", a: "Да, все изменения в конструкции транспортного средства оформляются официально. Мы берём на себя полное юридическое сопровождение." },
  { q: "Какой запас автономности у дома на колёсах?", a: "В зависимости от комплектации — от 3 до 14 дней без подключения к внешним источникам воды и электричества." },
  { q: "Можно ли переоборудовать уже имеющийся у меня автомобиль?", a: "Да, мы работаем как с новыми, так и с уже эксплуатируемыми автомобилями и автобусами клиента." },
]

const WHY_US = [
  { icon: "Award", title: "Опыт", desc: "Специализируемся на переоборудовании фургонов и автобусов в полноценные дома на колёсах" },
  { icon: "PenTool", title: "Индивидуальный подход", desc: "Планировка и материалы подбираются под ваш образ жизни и маршруты" },
  { icon: "Layers", title: "Полный цикл", desc: "От 3D-проекта до готового автодома с документами" },
  { icon: "FileCheck", title: "Прозрачные цены", desc: "Фиксированная смета без скрытых платежей" },
  { icon: "MapPin", title: "Работа по всей России", desc: "Москва, Санкт-Петербург, регионы — подбор и доставка базовых автомобилей" },
]

export default function RvConversion() {
  useEffect(() => {
    document.title = "Переоборудование автомобилей и автобусов в дома на колёсах — под ключ | МОЙ КАСТОМ"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", "Переоборудование фургонов и автобусов в дома на колёсах: автономное питание, кухня, спальные места, санузел. Полный цикл под ключ. Звоните: +7 (902) 255-77-53")
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
          <img src={HERO_IMAGE} alt="Дом на колёсах — переоборудованный автомобиль" className="w-full h-full object-cover opacity-25" />
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
            Переоборудование автомобилей и автобусов<br />в дома на колёсах — под ключ
          </h1>

          <div className="space-y-4 text-white/60 text-base leading-relaxed max-w-3xl">
            <p>
              Мечтаете о свободе путешествовать без привязки к отелям и маршрутам? Хотите собственный автодом, в котором можно жить с комфортом в любой точке страны?
            </p>
            <p>
              Мы переоборудуем фургоны, микроавтобусы и большие автобусы в полноценные дома на колёсах: с кухней, спальными местами, санузлом и автономным питанием. От компактного автодома для путешествий вдвоём до просторного семейного дома на базе большого автобуса — мы спроектируем и построим именно то, что нужно вам.
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
            Что такое дом на колёсах?
          </h2>
          <div className="space-y-4 text-white/50 text-base leading-relaxed">
            <p>
              Дом на колёсах — это переоборудованный автомобиль или автобус, внутри которого создано полноценное жилое пространство: спальные места, кухня, зона отдыха, системы хранения и автономные инженерные системы. Это свобода передвижения без потери комфорта привычного дома.
            </p>
            <p>
              В мире такие проекты называют «Van Life» и «Skoolie» — движение, которое объединяет путешественников, удалённых работников и семьи, предпочитающие мобильный образ жизни. В России направление активно растёт: всё больше людей выбирают автодом вместо квартиры для путешествий по стране или даже для постоянного проживания.
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
            Мы предлагаем полный цикл переоборудования любого автомобиля или автобуса в дом на колёсах — от выбора базы до финальной отделки и юридического оформления. Работаем с компактными фургонами для путешествий вдвоём и большими автобусами для семейного или экспедиционного формата.
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
              <span className="text-red-500 font-bold">Важно:</span> подбираем базовый автомобиль индивидуально под задачу — компактный фургон для соло-путешествий или большой автобус для семьи и постоянного проживания.
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
            <img src={INTERIOR_IMAGE} alt="Интерьер дома на колёсах" className="w-full h-full object-cover" />
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
            Преимущества собственного дома на колёсах
          </h2>

          <div className="space-y-6">
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Свобода путешествий</h3>
              <p className="text-white/40 text-sm leading-relaxed">Ваш дом всегда с вами — не нужно бронировать отели и подстраиваться под чужие маршруты. Останавливайтесь там, где красиво, и уезжайте, когда захотите.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Экономия на проживании</h3>
              <p className="text-white/40 text-sm leading-relaxed">Переоборудованный автодом окупается уже за несколько длительных поездок — вы экономите на отелях и съёмном жилье, инвестируя один раз в собственное пространство.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Индивидуальная планировка</h3>
              <p className="text-white/40 text-sm leading-relaxed">Мы проектируем интерьер под ваш образ жизни: соло-путешествия, семья с детьми, удалённая работа в дороге или постоянное проживание — каждый проект уникален.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Полное юридическое сопровождение</h3>
              <p className="text-white/40 text-sm leading-relaxed">Все изменения конструкции оформляются официально — вы получаете документы, позволяющие сразу начать легальную эксплуатацию автодома.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Работаем с любым бюджетом</h3>
              <p className="text-white/40 text-sm leading-relaxed">От компактного переоборудования фургона до премиального автодома на базе большого автобуса с полной автономностью — подберём решение под ваш бюджет.</p>
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
              Создайте свой дом на колёсах<br /><span className="text-white/20">уже сегодня</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-8">
              Переоборудуйте фургон, микроавтобус или большой автобус в полноценный дом на колёсах и откройте для себя свободу путешествий без компромиссов в комфорте. Звоните, пишите — мы ждём вас!
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
