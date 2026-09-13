// Paraglide silently falls back to the base locale for missing messages,
// so make sure every locale defines exactly the base locale's keys.
import { readFileSync } from "node:fs";

const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));
const settings = readJson("project.inlang/settings.json");
const messageKeys = (locale) =>
  new Set(Object.keys(readJson(`messages/${locale}.json`)).filter((key) => key !== "$schema"));

const baseKeys = messageKeys(settings.baseLocale);
let failed = false;

for (const locale of settings.locales) {
  const keys = messageKeys(locale);
  const missing = [...baseKeys].filter((key) => !keys.has(key));
  const extra = [...keys].filter((key) => !baseKeys.has(key));

  if (missing.length > 0)
    console.error(`messages/${locale}.json is missing: ${missing.join(", ")}`);
  if (extra.length > 0)
    console.error(`messages/${locale}.json has unknown keys: ${extra.join(", ")}`);
  failed ||= missing.length > 0 || extra.length > 0;
}

process.exit(failed ? 1 : 0);
