import { createFileRoute } from "@tanstack/react-router"
import Index from "@/pages/Index"
import { LocalizedPage, localizedHead } from "@/i18n/langRouting"

export const Route = createFileRoute("/")({
  head: () => localizedHead("/", "ru", "meta"),
  component: () => (
    <LocalizedPage code="ru">
      <Index />
    </LocalizedPage>
  ),
})
