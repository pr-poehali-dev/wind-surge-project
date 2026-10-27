import { createFileRoute } from "@tanstack/react-router"
import RvConversion from "@/pages/RvConversion"

export const Route = createFileRoute("/dom-na-kolesah")({
  head: () => ({
    meta: [
      { title: "Переоборудование автомобилей и автобусов в дома на колёсах — под ключ | МОЙ КАСТОМ" },
      { name: "description", content: "Переоборудование фургонов и автобусов в дома на колёсах: автономное питание, кухня, спальные места, санузел. Полный цикл под ключ. Звоните: +7 (902) 255-77-53" },
    ],
  }),
  component: RvConversion,
})
