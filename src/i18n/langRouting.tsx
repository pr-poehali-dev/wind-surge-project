import { useEffect, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { LANGUAGES } from "./config"

const SITE_URL = "https://moicustom.ru"

/** Строит URL для заданного базового пути ("/" или "/about") и языка */
export function localizedPath(basePath: string, code: string): string {
  if (code === "ru") return basePath
  return basePath === "/" ? `/${code}` : `/${code}${basePath}`
}

/** Определяет код языка по текущему pathname (по умолчанию "ru") */
export function getLangFromPath(pathname: string): string {
  const seg = pathname.split("/")[1]
  return LANGUAGES.some((l) => l.code === seg) ? seg : "ru"
}

/** Убирает языковой префикс из pathname, возвращая базовый путь */
export function getBasePath(pathname: string): string {
  const seg = pathname.split("/")[1]
  if (LANGUAGES.some((l) => l.code === seg)) {
    const rest = pathname.slice(seg.length + 1)
    return rest === "" ? "/" : rest
  }
  return pathname || "/"
}

/** Синхронизирует i18n-язык с URL и добавляет hreflang/canonical теги в head */
export function useLocalizedRoute(code: string) {
  const { i18n } = useTranslation()
  const location = useLocation()
  const basePath = getBasePath(location.pathname)

  useEffect(() => {
    if (i18n.language !== code) i18n.changeLanguage(code)
    document.documentElement.lang = code
  }, [code, i18n])

  useEffect(() => {
    const created: HTMLLinkElement[] = []

    LANGUAGES.forEach((l) => {
      const link = document.createElement("link")
      link.rel = "alternate"
      link.hreflang = l.code
      link.href = `${SITE_URL}${localizedPath(basePath, l.code)}`
      document.head.appendChild(link)
      created.push(link)
    })

    const xDefault = document.createElement("link")
    xDefault.rel = "alternate"
    xDefault.hreflang = "x-default"
    xDefault.href = `${SITE_URL}${basePath}`
    document.head.appendChild(xDefault)
    created.push(xDefault)

    const canonical = document.createElement("link")
    canonical.rel = "canonical"
    canonical.href = `${SITE_URL}${localizedPath(basePath, code)}`
    document.head.appendChild(canonical)
    created.push(canonical)

    return () => {
      created.forEach((l) => l.remove())
    }
  }, [basePath, code])
}

export function LocalizedPage({ code, children }: { code: string; children: ReactNode }) {
  useLocalizedRoute(code)
  return <>{children}</>
}
