import lang from "./json/langs.json";

/**
 * Automatically translates strings based on their original form in english.
 * @param engInput 
 */
export function LocaleString(engInput: string, placeholder?: string) {
  const systemLanguage = navigator.language;
  
  return lang[systemLanguage][engInput]?.replace("{placeholder}", placeholder) ?? 
    engInput?.replace("{placeholder}", placeholder);
}
