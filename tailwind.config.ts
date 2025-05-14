import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                link: '#1565C0',
                'n-bg': '#ECF0F3',
                'n-light-shadow': '#FFF',
                'n-dark-shadow': '#D1D9E6',
                yes: '#4CAF50',
                no: '#EF5350',
                submit: '#AB47BC'
            },
            backgroundColor: {
                link: '#E3F2FD',
                'link-hover': '#BBDEFB',
                neumorphism: 'theme("colors.n-bg")',
                yes: '#B9F6CA',
                no: '#FFCDD2',
                submit: '#F3E5F5',
                'submit-hover': '#E1BEE7'
            },
            boxShadow: {
                neumorphism: '0.625rem 0.625rem 0.875rem 0 theme("colors.n-dark-shadow"), -0.5rem -0.5rem 1.125rem 0 theme("colors.n-light-shadow")',
                'neumorphism-inner': 'inset 0.625rem 0.625rem 0.875rem 0 theme("colors.n-dark-shadow"), -0.5rem -0.5rem 1.125rem 0 theme("colors.n-light-shadow")'
            },
            borderWidth: {
                'thin': '1px'
            }
        }
    },
}