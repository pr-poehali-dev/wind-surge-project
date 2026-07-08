import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { LANGUAGES } from "@/i18n/config"
import { detectLangByIp } from "@/i18n/detectCountry"
import { localizedPath, getLangFromPath } from "@/i18n/langRouting"

const STORAGE_KEY = "lang_auto_redirect_done"

/** Определяет язык посетителя по IP и один раз редиректит на локализованную версию,
 *  если он ещё не был установлен ранее и пользователь открыл корневой путь без префикса. */
export default function AutoLangRedirect() {
  const navigate = useNavigate()
  const location = useLocation()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checked) return

    const alreadyDone = localStorage.getItem(STORAGE_KEY)
    const isRootRu = location.pathname === "/"

    if (alreadyDone || !isRootRu) {
      setChecked(true)
      return
    }

    detectLangByIp().then((lang) => {
      localStorage.setItem(STORAGE_KEY, "1")
      if (lang && lang !== "ru" && LANGUAGES.some((l) => l.code === lang) && getLangFromPath(location.pathname) === "ru") {
        navigate(localizedPath("/", lang), { replace: true })
      }
      setChecked(true)
    })
  }, [checked, location.pathname, navigate])

  return null
}
