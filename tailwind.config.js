/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Inter"', "sans-serif"],
            },
            colors: {
                "primary-100": "#754ffe",
                "primary-200": "#6343d8",
                "primary-300": "#5e3fcb",
                "primary-400": "#312b4d",
                "secondary-100": "#64748b",
                "secondary-200": "#556376",
                "secondary-300": "#1e293b",
                "secondary-400": "#0f172a",
                "secondary-500": "#0b1324",
                success: "#379e67",
                "info-100": "#87d2f4",
                "info-200": "#08638c",
                "warning-100": "#facf85",
                "warning-200": "#b88734",
                "warning-300": "#f59e0b",
                "error-100": "#ee9393",
                "error-200": "#9b3333",
                "error-300": "#9b333366",
                "white-100": "#fff",
                "white-200": "#cbd5e1",
                "white-300": "#94a3b8",
            },
            backgroundImage: {
                "hero-gradiant": "url('/img/gradient-bg.png')",
                "checkbox-checked": "url('/img/checked.svg')",
            },
            maxWidth: {
                10: "10%",
                20: "20%",
                30: "30%",
                60: "60%",
                80: "80%",
            },
            width: {
                "row-sm": "calc(100% - 2rem)",
                row: "calc(100% - 10rem)",
                100: "30rem",
            },
            height: {
                "0-2rem": "0.2rem",
            },
            borderWidth: {
                "2rem": "0.125rem",
                "1rem": "0.1rem",
                "1-2rem": "0.120rem",
            },
            lineHeight: {
                12: "4rem",
            },
            boxShadow: {
                "form-input-shadow": "0 0 0 0.125rem rgba(131, 97, 254, 0.5)",
                "form-input-checkbox-shadow":
                    "0 0 0 0.25rem rgba(117, 79, 254, 0.25)",
            },
        },
    },
    plugins: [],
};
