import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		container: {
  			screens: {
  				sm: '600px',
  				md: '728px',
  				lg: '984px',
  				xl: '1240px',
  				'2xl': '1420px'
  			},
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '5rem',
  				'2xl': '6rem'
  			}
  		},
		 backgroundImage: {
        'custom-radial': 'radial-gradient(rgba(0, 290, 258, 1) 0%, rgba(0, 136, 255, 1) 32%)',
      	},
  		colors: {
  			gray: {
  				'100': '#333343',
  				'200': '#575757',
  				'300': '#F8F8F8',
  				'500': '#6b7280',
  				'700': '#374151',
  				'800': '#DFDFDF'
  			},
  			blue: {
				'40':  '#E5F2FF',
				'50':  '#8fa0e4c2',
  				'100': '#F0F3FF',
  				'200': '#CEE7FF',
				'400': '#F0F3FF',
  				'300': '#d1d5db',
  				'500': '#6b7280',
  				'700': '#374151',
  				'800': '#1f2937',
  				default: '#5264ae'
  			},
			  green: {
				'40':  '#b7d5cb',
				'50':  '#11574052',
				'100': '#5a9984',
				'200': '#CEE7FF',
				'300': '#d1d5db',
				'400': '#b7d5cb',
				'500': '#6b7280',
				'700': '#374151',
				'800': '#1f2937',
				default: '#115740'
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
