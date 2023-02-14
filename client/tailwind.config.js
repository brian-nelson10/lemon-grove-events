/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require('flowbite/plugin')
    ],
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
       
        extend: {
            fontFamily: {
                larissa: ['Larissa', 'cursive'],
                roboto: ['Roboto', 'sans-serif']
            },
            fontSize: {
                'xlxl': '14rem'
            },
        },
    },

    plugins: [],
}