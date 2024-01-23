/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                customGray: "#e8e8e8",
                lightGray: "#f7f7f7", //"#f0f0f0", //"#f7f7f7",
                headerDark: "#2b3844",
                bodyDark: "#202c36",
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
