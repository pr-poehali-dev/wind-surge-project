import { createFileRoute } from "@tanstack/react-router"
import FoodTruck from "@/pages/FoodTruck"

export const Route = createFileRoute("/food-truck")({
  head: () => ({
    meta: [
      { title: "Переоборудование автомобилей и автобусов в фуд-траки — под ключ | МОЙ КАСТОМ" },
      { name: "description", content: "Переоборудование фургонов и автобусов в фуд-траки: профессиональная кухня, вытяжка, брендирование. Полный цикл под ключ. Звоните: +7 (902) 255-77-53" },
    ],
  }),
  component: FoodTruck,
})
