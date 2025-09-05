
import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		screens: {
				'sm': '360px',
				'md': '810px',
				'lg': '1152px'
			},
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
				inter: ['Inter', 'sans-serif']
			},
			colors: {
				black: '#121212',
				white: '#ffffff',
				gray: '#898989',
				darkgray: '#252525',
				blue: '#3B82F6'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'glow': {
					'0%, 100%': {
						'box-shadow': '0 0 5px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
					},
					'50%': {
						'box-shadow': '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)'
					}
				},
				'blur-motion': {
					'0%': {
						filter: 'blur(15px)',
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						filter: 'blur(0)',
						transform: 'translateY(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s ease-out forwards',
				'glow': 'glow 2s ease-in-out infinite',
				'blur-motion': 'blur-motion 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
