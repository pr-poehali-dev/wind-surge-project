import { createFileRoute, notFound } from "@tanstack/react-router"
import Index from "@/pages/Index"
import { LANGUAGES } from "@/i18n/config"
import { LocalizedPage, localizedHead } from "@/i18n/langRouting"

export const Route = createFileRoute("/$lang/")({
  beforeLoad: ({ params }) => {
    if (params.lang === "ru" || !LANGUAGES.some((l) => l.code === params.lang)) throw notFound()
  },
  head: ({ params }) => localizedHead("/", params.lang, "meta"),
  component: LangIndex,
})

function LangIndex() {
  const { lang } = Route.useParams()
  return (
    <LocalizedPage code={lang}>
      <Index />
    </LocalizedPage>
  )
}
