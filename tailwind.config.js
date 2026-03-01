/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                darkBg: "#0B0C10",
                darkSurface: "#1F2833",
                accentLight: "#66FCF1",
                accentMuted: "#45A29E",
                textMain: "#C5C6C7"
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
