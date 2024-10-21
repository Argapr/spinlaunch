/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Pastikan mencakup semua file React di dalam folder 'src'
    ],
    theme: {
        extend: {
            backgroundImage: {
                "card-gradient":
                    "linear-gradient(225deg, #fff, #44444400 52%, #0a0a0a00 81%, #777 94%)",
                "text-rainbow":
                    "linear-gradient(90deg,#ffc5c5 0,#ade3ef 28%,#9120e9 150%)",
                "cardHeader":
                    "linear-gradient(269.23deg,#140536 -9.81%,#371286 84.13%)",
            },
        },
    },
    plugins: [],
};
