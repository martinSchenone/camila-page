/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#BC6C64",
        
"secondary": "#FFE2CA",
        
"accent": "#f9eae5",
        
"neutral": "#1A151E",
        
"base-100": "#FFFFFF",
        
"info": "#8E9CDC",
        
"success": "#FED1B5",
        
"warning": "#F68C13",
        
"error": "#F43434",
        },
      },
    ],
  },
};

