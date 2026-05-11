/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1DB954",
        "spotify-green-hover": "#1ed760",
        "spotify-black": "#121212",
        "spotify-base": "#000000",
        "spotify-card": "#181818",
        "spotify-card-hover": "#282828",
        "spotify-text-primary": "#FFFFFF",
        "spotify-text-secondary": "#B3B3B3",
        "primary": "#1DB954", 
        "surface": "#121212",
        "surface-container": "#181818",
        "surface-container-high": "#282828"
      },
      borderRadius: {
        "DEFAULT": "8px",
        "lg": "12px",
        "xl": "16px",
        "md": "8px",
        "sm": "4px",
        "full": "9999px"
      },
      fontFamily: {
        "sans": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
