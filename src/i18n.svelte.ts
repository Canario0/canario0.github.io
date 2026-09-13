import {
  baseLocale,
  extractLocaleFromNavigator,
  isLocale,
  locales,
  overwriteGetLocale,
  type Locale
} from "./paraglide/runtime";

export { locales, type Locale };

export const LOCALE_NAMES: Record<Locale, string> = { en: "English", es: "Español" };

const STORAGE_KEY = "locale";

// Paraglide's localStorage strategy persists the detected locale on first visit,
// which would freeze detection; only an explicit choice is stored here.
function getStoredLocale(): Locale | undefined {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : undefined;
  } catch {
    return undefined;
  }
}

export const i18n = $state({
  locale: getStoredLocale() ?? extractLocaleFromNavigator() ?? baseLocale
});

overwriteGetLocale(() => i18n.locale);
document.documentElement.lang = i18n.locale;

export function setLocale(locale: Locale) {
  i18n.locale = locale;
  document.documentElement.lang = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Storage blocked (e.g. private mode): the choice still applies for this visit
  }
}
