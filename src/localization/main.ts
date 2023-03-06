import lang from "./json/langs.json";

/**
 * Automatically translates strings based on their original form in english.
 * @param engInput 
 */
export function LocaleString(engInput: string) {
  const systemLanguage = navigator.language;
  
  return lang[systemLanguage][engInput] ?? engInput;
}
