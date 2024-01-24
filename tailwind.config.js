/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                customGray: "#e8e8e8",
                lightGray: "#f7f7f7",
                headerDark: "#2b3844",
                bodyDark: "#202c36",
                darkHover: "#374757",
                lightHover: "#f0f0f0",
            },
            backgroundImage: {
                "chevron-light":
                    "url('/public/assets/chevron_down_icon_white.svg')",
                "chevron-dark": "url('/public/assets/chevron_down_icon.svg')",
                "searchIcon-light":
                    "url('/public/assets/search_icon_white.svg')",
                "searchIcon-dark": "url('/public/assets/search_icon.svg')",
                "arrowLeft-light": "url('/public/assets/arrow-left-white.svg')",
                "arrowLeft-dark": "url('/public/assets/arrow-left.svg')",
            },
        },
        screens: {
            xs: "320px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
        },
    },
    darkMode: "class",
    plugins: [],
};
