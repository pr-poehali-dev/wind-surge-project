import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const STORAGE_KEY = "cookie_consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const handleChoice = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#0a0a0a]/98 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed flex-1">
          Мы используем файлы cookie и обрабатываем обезличенные данные (в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных») исключительно для статистики посещаемости через сервисы Яндекс.Метрика (Вебмастер Яндекс) и Google Search Console. Продолжая пользоваться сайтом, вы соглашаетесь с обработкой таких данных согласно{" "}
          <Link to="/privacy" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
            Политике обработки персональных данных
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => handleChoice("declined")}
            className="flex-1 sm:flex-none px-5 py-2.5 border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-xs font-bold tracking-widest uppercase rounded-sm transition-colors"
          >
            Отклонить
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="flex-1 sm:flex-none px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-colors"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  )
}