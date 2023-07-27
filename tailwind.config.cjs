const defaultTheme = require('tailwindcss/defaultTheme');
const scrollbarHide = require('tailwind-scrollbar-hide');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        container: false
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary1: '#37797b',
                primary2: '#ed7138',
                primary3: '#67b687',
                primary4: '#5c82e3',
                primary5: {
                    DEFAULT: '#6E6DF6',
                    light: '#8C88FF',
                    dark: '#292858'
                },
                gray: '#979ea2',
                lightGray: '#E5E5E5',
                black: '#16171B',
                white: '#ffffff',
                middle: {
                    blue: '#3A6CF6',
                    lightGreen: '#A8F010'
                }
            },
            zIndex: {
                '-1': '-1',
                60: 60
            }
        },
        screens: {
            xs: '475px',
            ...defaultTheme.screens
        }
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    width: '100%',
                    maxWidth: '1460px',
                    padding: '0 20px',
                    margin: '0 auto',
                    boxSizing: 'border-box'
                }
            });
        },
        scrollbarHide
    ]
};
