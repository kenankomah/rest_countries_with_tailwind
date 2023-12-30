/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                customGray: "#e8e8e8",
                lightGray: "#ededed", //"#f0f0f0", //"#f7f7f7",
            },
        },
    },
    plugins: [],
};
