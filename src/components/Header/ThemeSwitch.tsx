import useThemeContext from "../../useContextHooks/useThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import * as Switch from "@radix-ui/react-switch";

interface Props {}

const ThemeSwitch = ({}: Props) => {
    const { theme, handleThemeChange } = useThemeContext();
    const isDarkMode = theme === "dark";

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        handleThemeChange(newTheme);
    };

    return (
        <div className="flex items-center justify-center">
            <Switch.Root
                onCheckedChange={toggleTheme}
                className="relative inline-flex h-6 w-11 md:h-7 md:w-12 lg:h-8 lg:w-14 items-center rounded-full bg-headerThemeBackground"
            >
                <Switch.Thumb
                    className={`inline-flex h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 items-center justify-center rounded-full bg-white/30  shadow-lg transform transition-transform duration-200 ${
                        isDarkMode ? "translate-x-6  lg:translate-x-7" : "translate-x-0"
                    }`}
                >
                    {isDarkMode ? (
                        <FontAwesomeIcon icon={faSun} className="text-headerThemeIcon" />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className="text-headerThemeIcon" />
                    )}
                </Switch.Thumb>
            </Switch.Root>
        </div>
    );
};

export default ThemeSwitch;
