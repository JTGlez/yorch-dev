import es from "./es.json";
import en from "./en.json"
import { Locales } from "./types";

const locales: Locales = { es, en };

export function getLocaleStrings(locale: string) {
    return locales[locale];
}