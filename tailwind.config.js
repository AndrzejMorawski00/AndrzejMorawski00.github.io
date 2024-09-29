/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    corePlugins: {
        preflight: true,
    },
    theme: {
        extend: {
            fontFamily: {
                textSans: ["Roboto", "sans-serif"],
                textSerif: ["Libre Caslon Text", "serif"],
            },
            colors: {
                // Background Colors:
                backgroundColor: "rgba(var(--backgroundColor))",
                headerBorderColor: "rgba(var(--headerBorderColor))",
                // Header Colors
                headerUnderlineActive: "rgba(var(--headerUnderlineActive))",
                headerUnderlineHover: "rgba(var(--headerUnderlineHover))",
                headerFont: "rgba(var(--headerFont))",
                headerFontHover: "rgba(var(--headerFontHover))",
                headerThemeBackground: "rgba(var(--headerThemeBackground))",
                headerThemeIcon: "rgba(var(--headerThemeIcon))",

                // Main Colors
                mainFont: "rgba(var(--mainFont))",
                mainIcon: "rgba(var(--mainIcon))",
                mainIconHover: "rgba(var(--mainIconHover))",
                dataDescription: "rgba(var(--dataDescription))",
                skillIconColor: "rgba(var(--skillIconColor))",
            },
            keyframes: {
                "slide-down": {
                    "0%": { transform: "translateY(-10px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
                "rotate-down": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(180deg)" },
                },
                "rotate-up": {
                    "0%": { transform: "rotate(180deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
            },
            animation: {
                "slide-down": "slide-down 0.3s ease-out",
                "rotate-down": "rotate-down 0.3s ease-out",
                "rotate-up": "rotate-up 0.3s ease-out",
            },
        },
    },
    plugins: [],
};
