export type ThemeName = "dark" | "light";

export const THEME_STORAGE_KEY = "alexsanderfarias-theme";
export const DEFAULT_THEME: ThemeName = "dark";

export function isThemeName(value: unknown): value is ThemeName {
  return value === "dark" || value === "light";
}

export function parseStoredTheme(value: unknown): ThemeName {
  return isThemeName(value) ? value : DEFAULT_THEME;
}

export function applyTheme(theme: ThemeName): void {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}else{document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}})();`;
