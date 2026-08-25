import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import SiteHeader from "@/components/SiteHeader"
import { ContactCTA } from "@/components/ContactBlock"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/e5912122-c117-4908-902c-eb3d207cfdc6.jpg"
const INTERIOR_IMAGE = "https://cdn.poehali.dev/projects/a7a9b322-91c5-4a07-a1ed-edf5a69cbdde/files/9a811bb2-07b5-48f3-8336-d52f462b466a.jpg"

const BUS_GROUPS = [
  {
    title: "Европейские туристические",
    desc: "Setra, MAN, Neoplan, Volvo, Scania, Mercedes-Benz Tourismo, Irisbus, VDL Bova — надёжные машины с отличной ходовой частью и большим ресурсом.",
  },
  {
    title: "Американские школьные",
    desc: "Blue Bird, Thomas Built Buses, International (IC Bus) — легендарные «жёлтые» машины с узнаваемым дизайном, огромным салоном и высоким кузовом, идеальная база для Тусобас.",
  },
  {
    title: "Американские туристические и междугородние",
    desc: "MCI, Prevost, Van Hool — класс «премиум» для люксовых проектов.",
  },
  {
    title: "Отечественные и постсоветские",
    desc: "ПАЗ (большие модели, например ПАЗ-4238), ЛиАЗ, ЛАЗ, Икарус — бюджетный вход в мир мобильных баров.",
  },
]

const STAGES = [
  { num: "01", title: "Консультация и концепция", desc: "Обсуждаем идею, бюджет, желаемую вместимость (от 20 до 50+ гостей) и функционал." },
  { num: "02", title: "Подбор автобуса", desc: "Поможем найти автобус в России, Европе или США, проведём растаможку и установку «ЭРА-ГЛОНАСС»." },
  { num: "03", title: "Проектирование интерьера", desc: "Планировка салона, барная стойка, диджейский пульт, звук и свет. Для школьных автобусов — замена дверей и окон." },
  { num: "04", title: "Демонтаж и подготовка", desc: "Освобождаем салон, усиливаем шасси, проводим шумо- и теплоизоляцию." },
  { num: "05", title: "Монтаж инженерных систем", desc: "Электрика, освещение, кондиционирование, водоснабжение, холодильное оборудование." },
  { num: "06", title: "Отделка салона", desc: "Премиальные материалы, кожаные диваны, барная стойка, LED-подсветка, тонировка, панорамные люки." },
  { num: "07", title: "Установка мультимедиа", desc: "Акустика, диджейский пульт, экраны, световое и лазерное оборудование, караоке." },
  { num: "08", title: "Юридическое оформление", desc: "Полное сопровождение по изменению конструкции ТС и получению новых документов." },
]

const EQUIPMENT_ROWS = [
  { label: "Барная стойка", basic: true, comfort: true, premium: true },
  { label: "Холодильное оборудование", basic: true, comfort: true, premium: true },
  { label: "Звуковая система", basic: "3000 Вт", comfort: "8000 Вт", premium: "15000+ Вт" },
  { label: "Световое оборудование", basic: "Базовая подсветка", comfort: "Цветодинамика", premium: "Лазеры + экраны + шоу" },
  { label: "Диджейский пульт", basic: false, comfort: true, premium: true },
  { label: "Караоке", basic: false, comfort: true, premium: true },
  { label: "Санузел", basic: false, comfort: "опция", premium: "с душем" },
  { label: "Выдвижные стены / терраса", basic: false, comfort: false, premium: true },
  { label: "Кухонное оборудование", basic: false, comfort: false, premium: true },
]

const PROJECTS = [
  { emoji: "🚌", title: "Тусобас на базе Blue Bird", desc: "Жёлтый американский школьный автобус, превращённый в танцевальный бар на 40 гостей. Барная стойка, диджейский пульт, светодиодный танцпол, мощная акустика." },
  { emoji: "🍸", title: "Бухобас на базе Setra S 516 HD", desc: "Роскошный туристический автобус с панорамными окнами. Коктейль-бар с мраморной стойкой, холодильным оборудованием, лаунж-зоной и санузлом." },
  { emoji: "🎉", title: "Тусабас на базе Neoplan Starliner", desc: "Двухосный гигант с выдвижной террасой. Дискотека со светомузыкой, караоке и зоной отдыха. Для корпоративов и ночных туров." },
  { emoji: "🥂", title: "Бухбас на базе ПАЗ-4238", desc: "Бюджетное, но надёжное решение для старта бизнеса. Просторный салон, барная стойка, звук и свет." },
]

const PRICING = [
  { level: "Эконом", price: "от 1 500 000 ₽", desc: "Демонтаж, шумоизоляция, базовая отделка, барная стойка, холодильник, простая звуковая система" },
  { level: "Стандарт", price: "от 2 500 000 ₽", desc: "Всё из эконома + качественные материалы, диджейский пульт, светодинамика, улучшенная акустика, кондиционер" },
  { level: "Премиум", price: "от 4 500 000 ₽", desc: "Всё из стандарта + кожаные диваны, профессиональный звук и свет, санузел, экраны, выдвижные террасы, кухня" },
]

const ORDER_STEPS = [
  { num: "1", title: "Оставьте заявку", desc: "Позвоните нам или отправьте заявку через сайт. Расскажите о своих пожеланиях — мы предложим несколько вариантов концепции." },
  { num: "2", title: "Встреча и обсуждение", desc: "Встречаемся в офисе или выезжаем к вам. Обсуждаем детали, бюджет, выбираем базовый автобус." },
  { num: "3", title: "Проектирование", desc: "Разрабатываем дизайн-проект и смету. Согласовываем все детали до мелочей." },
  { num: "4", title: "Переоборудование", desc: "Приступаем к работам. Сроки — от 3 до 8 месяцев в зависимости от сложности проекта." },
  { num: "5", title: "Приёмка и документы", desc: "Вы получаете готовый бар на колёсах с полным пакетом оформленных документов." },
]

const FAQ = [
  { q: "Сколько времени занимает переоборудование?", a: "От 3 до 8 месяцев в зависимости от сложности проекта и объёма работ. Для американских автобусов срок может увеличиться из-за доставки и растаможки." },
  { q: "Можно ли использовать автобус во время движения для вечеринок?", a: "Да, при условии соблюдения правил безопасности. Мы устанавливаем специальные крепления для фиксации мебели и оборудования." },
  { q: "Нужно ли вносить изменения в ПТС?", a: "Да, все изменения в конструкции транспортного средства должны быть официально оформлены. Мы оказываем полное юридическое сопровождение, включая перерегистрацию импортных автобусов." },
  { q: "Какие гарантии вы даёте?", a: "Предоставляем гарантию на все виды работ и установленное оборудование — от 1 года." },
  { q: "Можно ли переоборудовать старый автобус?", a: "Да, мы работаем с автобусами любого возраста. Главное — техническое состояние шасси и кузова." },
]

const WHY_US = [
  { icon: "Award", title: "Опыт", desc: "Специализируемся именно на переоборудовании больших автобусов, знаем их конструктивные особенности" },
  { icon: "PenTool", title: "Индивидуальный подход", desc: "Каждый проект уникален, от дизайна до инженерии" },
  { icon: "Layers", title: "Полный цикл", desc: "От идеи до готового автомобиля с документами" },
  { icon: "FileCheck", title: "Прозрачные цены", desc: "Фиксированная смета без скрытых платежей" },
  { icon: "MapPin", title: "Работа по всей России", desc: "Москва, Санкт-Петербург, регионы, доставка автобусов из США и Европы" },
]

export default function PartyBus() {
  useEffect(() => {
    document.title = "Кастомные автобусы в бары на колёсах — переоборудование под ключ | МОЙ КАСТОМ"
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", "Переоборудование больших автобусов в мобильные бары: Тусобас, Бухобас, Бухбас, Тусабас. Полный цикл под ключ — от подбора автобуса до документов. Звоните: +7 (902) 255-77-53")
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
          <img src={HERO_IMAGE} alt="Тусобас — автобус переоборудованный в бар на колёсах" className="w-full h-full object-cover opacity-25" />
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
            Кастомные автобусы в бары<br />на колёсах — переоборудование под ключ
          </h1>

          <div className="space-y-4 text-white/60 text-base leading-relaxed max-w-3xl">
            <p>
              Хотите устроить незабываемую вечеринку, которая будет двигаться по городу, собирая восторженные взгляды? Мечтаете о собственном мобильном баре, который можно арендовать для корпоративов, свадеб, дней рождений и фестивалей?
            </p>
            <p>
              Кастомные автобусы, переделанные в бары на колёсах — это тренд, который завоевал мир и уверенно шагает по России. Мы предлагаем услуги по переоборудованию любых больших автобусов в тусовочные мобильные пространства: от легендарного <b className="text-white/80">Тусобас</b> до стильного <b className="text-white/80">Бухобас</b> и динамичного <b className="text-white/80">Бухбас</b>. Ваш Тусабас ждёт своего часа!
            </p>
          </div>

          <div className="mt-8">
            <WhyUsButton />
          </div>
        </div>
      </section>

      {/* Что такое бар на колёсах */}
      <section className="px-6 sm:px-10 lg:px-20 py-20 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">О формате</p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
            Что такое бар на колёсах?
          </h2>
          <div className="space-y-4 text-white/50 text-base leading-relaxed">
            <p>
              Бар на колёсах — это переоборудованный автобус, внутри которого создано полноценное пространство для вечеринок: барная стойка, диджейский пульт, мощная звуковая и световая техника, удобные зоны для сидения и танцев. Это не просто транспорт — это мобильная площадка для ярких мероприятий, которая может появиться в любом месте и в любое время.
            </p>
            <p>
              В России такие проекты уже набирают популярность. Например, питерские умельцы превратили старый «Икарус» в передвижной бар BarBus MAXI, а московский «Шикарус» предлагает частный клуб на колёсах с пространством до 40 кв.м, мощным звуком, светом, лазером, DJ, караоке, кухней и санузлом. Команда Party Bus Custom создала мобильный бар из хиппи-автобуса Volkswagen 1971 года. Теперь и у вас есть возможность стать обладателем собственного Тусобас или Бухобас на базе по-настоящему большого автобуса!
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
            Мы предлагаем полный цикл переоборудования любого крупногабаритного автобуса в бар на колёсах — от выбора базы до финальной отделки и юридического оформления. Работаем исключительно с большими автобусами — туристическими, междугородними, городскими, а также с культовыми американскими школьными автобусами. Именно они дают простор для настоящего размаха.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-6">
            {BUS_GROUPS.map((g, i) => (
              <div key={i} className="bg-[#0c0c0c] hover:bg-[#111] p-6 transition-colors group">
                <h3 className="text-white font-black text-sm uppercase tracking-wide mb-2">{g.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors">{g.desc}</p>
              </div>
            ))}
          </div>

          <div className="border border-white/5 bg-[#0c0c0c] p-6">
            <p className="text-white/40 text-sm leading-relaxed">
              <span className="text-red-500 font-bold">Важно:</span> мы не работаем с микроавтобусами, минивэнами и малотоннажными фургонами (Sprinter, Crafter, Transit, Ducato и т.п.) — только полноразмерные автобусы дают нужный простор для настоящей вечеринки.
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
            <img src={INTERIOR_IMAGE} alt="Интерьер бара на колёсах" className="w-full h-full object-cover" />
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
            Преимущества вашего собственного Тусобас
          </h2>

          <div className="space-y-6">
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Уникальность и эксклюзивность</h3>
              <p className="text-white/40 text-sm leading-relaxed">Ваш Тусобас или Бухбас будет единственным в своём роде. Мы создаём индивидуальные проекты, полностью соответствующие вашим пожеланиям и задачам. Американский школьный автобус в качестве базы — это уже само по себе заявление, а после нашей переделки он станет настоящей звездой любой тусовки.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Мобильность и гибкость</h3>
              <p className="text-white/40 text-sm leading-relaxed">Бар на колёсах может работать где угодно: в центре города, на набережной, в парке, на фестивальной площадке, у офиса или за городом. С вашим Тусабас вы не привязаны к одному месту — вы там, где ваши гости.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Экономическая эффективность</h3>
              <p className="text-white/40 text-sm leading-relaxed">Переоборудованный автобус — это не только развлечение, но и бизнес. Сдавайте свой Бухобас в аренду для корпоративов, свадеб, дней рождений, девичников и фестивалей. Окупаемость проекта — от 1–2 сезонов активной работы.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Полное юридическое сопровождение</h3>
              <p className="text-white/40 text-sm leading-relaxed">Мы не просто переоборудуем автобус — мы делаем это легально. Все изменения вносятся в конструкцию с последующим оформлением документов. Для американских автобусов помогаем с перерегистрацией и получением российского ПТС.</p>
            </div>
            <div className="border border-white/5 bg-[#0c0c0c] p-6">
              <h3 className="text-white font-black text-base uppercase tracking-wide mb-2">Работаем с любым бюджетом</h3>
              <p className="text-white/40 text-sm leading-relaxed">Стоимость переоборудования «под ключ» варьируется в широком диапазоне: от эконом-вариантов на базе ПАЗ или ЛиАЗ до премиальных проектов на базе Setra, Prevost или школьного Blue Bird.</p>
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
            Цены указаны ориентировочно, без учёта стоимости базового автобуса. Точная стоимость рассчитывается индивидуально после утверждения проекта.
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
              Создайте свой Тусобас<br /><span className="text-white/20">уже сегодня</span>
            </h2>

            <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-8">
              Переоборудуйте туристический, городской или американский школьный автобус в бар на колёсах и откройте для себя мир мобильных вечеринок, ярких эмоций и новых возможностей. Звоните, пишите — мы ждём вас!
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