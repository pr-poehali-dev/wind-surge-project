import { useEffect, ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { LANGUAGES, getI18nFor } from "./config"

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

/** Мета-теги и hreflang/canonical для локализованной страницы — для head() маршрута */
export function localizedHead(basePath: string, code: string, metaKey: "meta" | "about.meta") {
  const t = getI18nFor(code).t
  const title = t(`${metaKey}.title`)
  const description = t(`${metaKey}.description`)
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
    links: [
      ...LANGUAGES.map((l) => ({
        rel: "alternate",
        hrefLang: l.code,
        href: `${SITE_URL}${localizedPath(basePath, l.code)}`,
      })),
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${basePath}` },
      { rel: "canonical", href: `${SITE_URL}${localizedPath(basePath, code)}` },
    ],
  }
}

/** Синхронизирует язык документа с URL */
export function useLocalizedRoute(code: string) {
  useEffect(() => {
    document.documentElement.lang = code
  }, [code])
}

export function LocalizedPage({ code, children }: { code: string; children: ReactNode }) {
  useLocalizedRoute(code)
  return <I18nextProvider i18n={getI18nFor(code)}>{children}</I18nextProvider>
}