import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeContextType, ThemeColor } from "../types/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
}

const ThemeContextProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<ThemeColor>("light");

    const handleThemeChange = (newThemeValue: ThemeColor) => {
        setTheme((prevValue) => {
            document.body.classList.remove(prevValue);
            document.body.classList.add(newThemeValue);
            localStorage.setItem("theme", newThemeValue);
            return newThemeValue;
        });
    };

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme") || "light";
        const osTheme = window.matchMedia("(prefers-color-scheme : dark)").matches;

        if (localStorageTheme === "dark" || osTheme) {
            handleThemeChange("dark");
            document.body.classList.add("dark");
        } else {
            handleThemeChange("light");
            document.body.classList.add("light");
        }
    }, []);

    const themeContext: ThemeContextType = {
        theme: theme,
        handleThemeChange: handleThemeChange,
    };

    return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
