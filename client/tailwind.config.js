/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
       
        extend: {
            fontFamily: {
                larissa: ['Larissa', 'cursive'],
            },
            fontSize: {
                'xlxl': '14rem'
            },
        },
    },

    plugins: [],
}