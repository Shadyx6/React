import { createContext, useContext } from "react";

const ThemeContext = createContext({
    Theme: 'light',
    DarkMode: () => {},
    LightMode: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}