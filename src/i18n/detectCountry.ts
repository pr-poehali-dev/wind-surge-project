const DETECT_COUNTRY_URL = "https://functions.poehali.dev/86646c21-9a60-4997-a296-6ddf0c65ff23"

export async function detectLangByIp(): Promise<string | null> {
  try {
    const res = await fetch(DETECT_COUNTRY_URL)
    if (!res.ok) return null
    const data = await res.json()
    return typeof data.lang === "string" ? data.lang : null
  } catch {
    return null
  }
}
