import { createFileRoute } from "@tanstack/react-router"
import TruckOffroad from "@/pages/TruckOffroad"

export const Route = createFileRoute("/truck-offroad")({
  head: () => ({
    meta: [
      { title: "Переоборудование грузовиков в кастомные внедорожники — под ключ | МОЙ КАСТОМ" },
      { name: "description", content: "Переделываем любые грузовики в гигантские кастомные внедорожники: цельный кузов в цвет кабины, лифт подвески, огромные колёса. Полный цикл под ключ. Звоните: +7 (902) 255-77-53" },
    ],
  }),
  component: TruckOffroad,
})
