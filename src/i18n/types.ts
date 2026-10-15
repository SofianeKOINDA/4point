export type Lang = "fr" | "en";

export type Localized = string | { fr: string; en: string };

export function pick(value: Localized, lang: Lang): string {
  if (typeof value === "string") return value;
  return value[lang] || value.fr;
}
