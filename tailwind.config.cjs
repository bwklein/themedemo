const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms')({strategy: "class"});
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md}','mdsvex.config.js'],
    mode: "jit",
	theme: {
		extend: {
            fontFamily: {
              sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
              'teci-blue-dark': '#002b7f',
              'teci-blue-light': '#0072C6',
              'teci-gray': '#b1b1b1',
              'pyrosim': '#990000',
              'pathfinder': '#006000'
            }
        }
	},
    variants: {},
	plugins: [forms, typography]
};

module.exports = config;
