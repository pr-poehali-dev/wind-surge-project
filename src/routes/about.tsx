import { createFileRoute } from "@tanstack/react-router"
import About from "@/pages/About"
import { LocalizedPage, localizedHead } from "@/i18n/langRouting"

export const Route = createFileRoute("/about")({
  head: () => localizedHead("/about", "ru", "about.meta"),
  component: () => (
    <LocalizedPage code="ru">
      <About />
    </LocalizedPage>
  ),
})
