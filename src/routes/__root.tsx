import type {ReactNode} from "react";
import {HeadContent, Outlet, Scripts, createRootRoute} from "@tanstack/react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {PLATFORM_META, PLATFORM_SCRIPTS} from "@/platform/scripts.gen";
import {HMR_CLIENT} from "@/platform/dev-hmr";
import AutoLangRedirect from "@/components/AutoLangRedirect";
import CookieBanner from "@/components/CookieBanner";
import NotFound from "@/pages/NotFound";
import "@/i18n/config";
import appCss from "@/index.css?url";

const TITLE = "МОЙ КАСТОМ — Кастомный тюнинг автомобилей: уникальные бампера, обвесы, фары на заказ";
const DESCRIPTION =
    "МОЙ КАСТОМ — эксклюзивный кастомный тюнинг авто. Уникальные бампера, капоты, обвесы, фары в виде морд животных. Линейка «Голод». Изготовление в единственном экземпляре. Звоните: +7 (902) 255-77-53";
const OG_TITLE = "МОЙ КАСТОМ — Кастомный тюнинг: уникальные бампера и обвесы на заказ";
const OG_DESCRIPTION =
    "Эксклюзивные кастомные бампера, капоты и обвесы в виде морд животных. Линейка «Голод». Каждое изделие — в единственном экземпляре.";
const OG_IMAGE = "https://cdn.poehali.dev/projects/***/bucket/1b2659b9-995d-4c2f-bec2-f7aecfdbbc77.png";
const FAVICON = "https://cdn.poehali.dev/projects/***/files/d01ccc81-6447-4706-bd2f-7dcd0e006fcc.jpg";

const queryClient = new QueryClient();

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {charSet: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {title: TITLE},
            {name: "description", content: DESCRIPTION},
            {
                name: "keywords",
                content:
                    "кастомный тюнинг, кастомные бампера на заказ, уникальный обвес, кастомные фары, тюнинг кузова, расширение арок, body kit на заказ, кастомный капот, бампер морда животного, линейка Голод, 3D тюнинг кузова, МОЙ КАСТОМ",
            },
            {name: "author", content: "МОЙ КАСТОМ"},
            {name: "google-site-verification", content: "X3j4_Krfkz5HfHQ9afP12ctYkPIIwle8QkH-pwd0ykI"},
            {property: "og:title", content: OG_TITLE},
            {property: "og:description", content: OG_DESCRIPTION},
            {property: "og:image", content: OG_IMAGE},
            {property: "og:image:width", content: "4800"},
            {property: "og:image:height", content: "2520"},
            {property: "og:image:alt", content: "МОЙ КАСТОМ — Эксклюзивный кастомный тюнинг автомобилей"},
            {name: "twitter:image", content: OG_IMAGE},
            ...PLATFORM_META,
        ],
        links: [
            {rel: "stylesheet", href: appCss},
            {rel: "icon", type: "image/jpeg", href: FAVICON},
            {rel: "apple-touch-icon", href: FAVICON},
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&subset=cyrillic,cyrillic-ext,latin&display=swap",
            },
        ],
        // IMPORTANT: DO NOT REMOVE PLATFORM SCRIPTS AND THE DEV HMR CLIENT!
        scripts: [
            ...(import.meta.env.DEV ? [{children: HMR_CLIENT}] : []),
            ...PLATFORM_SCRIPTS,
        ],
    }),
    component: RootComponent,
    notFoundComponent: NotFound,
});

function RootComponent() {
    return (
        <RootDocument>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <Toaster/>
                    <Sonner/>
                    <AutoLangRedirect/>
                    <Outlet/>
                    <CookieBanner/>
                </TooltipProvider>
            </QueryClientProvider>
        </RootDocument>
    );
}

function RootDocument({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <HeadContent/>
        </head>
        <body>
        {children}
        <Scripts/>
        </body>
        </html>
    );
}
