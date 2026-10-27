import { createFileRoute } from "@tanstack/react-router"
import PartyBus from "@/pages/PartyBus"

export const Route = createFileRoute("/tusobas")({
  head: () => ({
    meta: [
      { title: "Кастомные автобусы в бары на колёсах — переоборудование под ключ | МОЙ КАСТОМ" },
      { name: "description", content: "Переоборудование больших автобусов в мобильные бары: Тусобас, Бухобас, Бухбас, Тусабас. Полный цикл под ключ — от подбора автобуса до документов. Звоните: +7 (902) 255-77-53" },
    ],
  }),
  component: PartyBus,
})
