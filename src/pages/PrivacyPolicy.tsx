import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"
import SiteHeader from "@/components/SiteHeader"

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Политика обработки персональных данных — МОЙ КАСТОМ"
  }, [])

  return (
    <div className="min-h-screen" style={{ background: "#080808", fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader />

      <section className="px-6 sm:px-10 lg:px-20 pt-16 pb-24">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-xs tracking-widest uppercase mb-8 transition-colors">
            <ArrowLeft className="w-3 h-3" />
            На главную
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-0.5 bg-red-600" />
            <p className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">Правовая информация</p>
          </div>

          <h1 className="text-white text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight mb-10">
            Политика обработки<br />персональных данных
          </h1>

          <div className="space-y-8 text-white/60 text-sm leading-relaxed">
            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">1. Общие положения</h2>
              <p className="mb-2">
                Настоящая Политика обработки персональных данных (далее — «Политика») составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению их безопасности, предпринимаемые владельцем сайта moicustom.ru (далее — «Оператор»).
              </p>
              <p>
                Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">2. Какие данные обрабатываются</h2>
              <p className="mb-2">
                Сайт использует файлы cookie и обезличенные технические данные (IP-адрес, тип браузера, страна и язык посетителя) исключительно в целях анализа посещаемости через сервисы Яндекс.Метрика (Вебмастер Яндекс) и Google Search Console.
              </p>
              <p>
                Оператор не собирает и не хранит на своих серверах какие-либо персональные данные, позволяющие прямо идентифицировать пользователя (ФИО, номер телефона, email), если пользователь не передал их добровольно при обращении через мессенджеры, телефон или электронную почту, указанные на сайте.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">3. Цели обработки данных</h2>
              <p>
                Обезличенные данные обрабатываются исключительно для статистики посещаемости сайта, анализа поведения пользователей и улучшения качества сайта. Данные не передаются третьим лицам, за исключением указанных выше сервисов аналитики.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">4. Файлы cookie</h2>
              <p className="mb-2">
                Cookie — это небольшие текстовые файлы, которые сохраняются в браузере посетителя сайта. Они используются для корректной работы сайта и сбора обезличенной статистики.
              </p>
              <p>
                Продолжая использовать сайт после ознакомления с уведомлением о cookie, пользователь даёт согласие на обработку файлов cookie в соответствии с настоящей Политикой. Пользователь может отключить cookie в настройках своего браузера, однако это может повлиять на работу отдельных функций сайта.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">5. Права пользователя</h2>
              <p>
                Пользователь вправе в любой момент отозвать согласие на обработку данных, обратившись к Оператору по контактам, указанным на сайте. Пользователь также вправе запросить информацию об обрабатываемых данных, их уточнение или удаление.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">6. Контакты Оператора</h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с Оператором по электронной почте: moicustom@yandex.ru
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">7. Изменения Политики</h2>
              <p>
                Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента её размещения на сайте, если иное не предусмотрено новой редакцией Политики.
              </p>
            </div>

            <p className="text-white/30 text-xs pt-4 border-t border-white/5">
              Дата последнего обновления: 01.08.2026
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 sm:px-10 lg:px-20 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs tracking-wider uppercase">© 2024 МОЙКАСТОМ — эксклюзивный кастомный тюнинг</p>
          <Link to="/" className="text-white/20 hover:text-white/50 text-xs tracking-wider uppercase transition-colors">
            На главную
          </Link>
        </div>
      </footer>
    </div>
  )
}
