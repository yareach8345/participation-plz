import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'n-bg': '#ECF0F3',
                'n-light-shadow': '#FFF',
                'n-dark-shadow': '#D1D9E6',
            },
            backgroundColor: {
                neumorphism: 'theme("colors.n-bg")'
            },
            boxShadow: {
                neumorphism: '0.625rem 0.625rem 0.875rem 0 theme("colors.n-dark-shadow"), -0.5rem -0.5rem 1.125rem 0 theme("colors.n-light-shadow")'
            }
        }
    },
}