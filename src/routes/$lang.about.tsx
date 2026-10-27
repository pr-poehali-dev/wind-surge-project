import { createFileRoute, notFound } from "@tanstack/react-router"
import About from "@/pages/About"
import { LANGUAGES } from "@/i18n/config"
import { LocalizedPage, localizedHead } from "@/i18n/langRouting"

export const Route = createFileRoute("/$lang/about")({
  beforeLoad: ({ params }) => {
    if (params.lang === "ru" || !LANGUAGES.some((l) => l.code === params.lang)) throw notFound()
  },
  head: ({ params }) => localizedHead("/about", params.lang, "about.meta"),
  component: LangAbout,
})

function LangAbout() {
  const { lang } = Route.useParams()
  return (
    <LocalizedPage code={lang}>
      <About />
    </LocalizedPage>
  )
}
