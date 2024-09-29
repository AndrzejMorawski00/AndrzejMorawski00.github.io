import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { ThemeContextType } from "../types/types";

const useThemeContext = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("Theme Context is undefined");
    }
    return context;
};

export default useThemeContext;
