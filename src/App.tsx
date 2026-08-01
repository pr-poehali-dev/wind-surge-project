
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { LocalizedPage } from "@/i18n/langRouting";
import { LANGUAGES } from "@/i18n/config";
import AutoLangRedirect from "@/components/AutoLangRedirect";
import CookieBanner from "@/components/CookieBanner";

const queryClient = new QueryClient();

const NON_RU_LANGUAGES = LANGUAGES.filter((l) => l.code !== "ru");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AutoLangRedirect />
        <Routes>
          <Route path="/" element={<LocalizedPage code="ru"><Index /></LocalizedPage>} />
          <Route path="/about" element={<LocalizedPage code="ru"><About /></LocalizedPage>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {NON_RU_LANGUAGES.map((lang) => (
            <Route
              key={lang.code}
              path={`/${lang.code}`}
              element={<LocalizedPage code={lang.code}><Index /></LocalizedPage>}
            />
          ))}
          {NON_RU_LANGUAGES.map((lang) => (
            <Route
              key={`${lang.code}-about`}
              path={`/${lang.code}/about`}
              element={<LocalizedPage code={lang.code}><About /></LocalizedPage>}
            />
          ))}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;