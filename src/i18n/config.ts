import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import ru from "@/locales/ru/common.json"
import en from "@/locales/en/common.json"
import zh from "@/locales/zh/common.json"
import hi from "@/locales/hi/common.json"
import es from "@/locales/es/common.json"
import fr from "@/locales/fr/common.json"
import ar from "@/locales/ar/common.json"
import bn from "@/locales/bn/common.json"
import pt from "@/locales/pt/common.json"
import ur from "@/locales/ur/common.json"
import id from "@/locales/id/common.json"
import de from "@/locales/de/common.json"
import ja from "@/locales/ja/common.json"
import sw from "@/locales/sw/common.json"
import mr from "@/locales/mr/common.json"
import te from "@/locales/te/common.json"
import tr from "@/locales/tr/common.json"
import ta from "@/locales/ta/common.json"
import vi from "@/locales/vi/common.json"
import ko from "@/locales/ko/common.json"

export const LANGUAGES = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "ur", label: "اردو", flag: "🇵🇰" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "sw", label: "Kiswahili", flag: "🇰🇪" },
  { code: "mr", label: "मराठी", flag: "🇮🇳" },
  { code: "te", label: "తెలుగు", flag: "🇮🇳" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ta", label: "தமிழ்", flag: "🇮🇳" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: ru },
      en: { common: en },
      zh: { common: zh },
      hi: { common: hi },
      es: { common: es },
      fr: { common: fr },
      ar: { common: ar },
      bn: { common: bn },
      pt: { common: pt },
      ur: { common: ur },
      id: { common: id },
      de: { common: de },
      ja: { common: ja },
      sw: { common: sw },
      mr: { common: mr },
      te: { common: te },
      tr: { common: tr },
      ta: { common: ta },
      vi: { common: vi },
      ko: { common: ko },
    },
    fallbackLng: "ru",
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n
