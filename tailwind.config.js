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
        "tertiary": "#94d0da",
        "on-tertiary": "#00363c",
        "on-primary": "#5e170c",
        "primary-fixed": "#ffdad4",
        "surface": "#131313",
        "on-tertiary-fixed-variant": "#014f57",
        "secondary-container": "#474746",
        "tertiary-fixed-dim": "#94d0da",
        "primary-container": "#7b2c1f",
        "outline": "#a38b87",
        "on-surface-variant": "#dbc1bc",
        "surface-tint": "#ffb4a6",
        "on-secondary-fixed-variant": "#474746",
        "error-container": "#93000a",
        "on-secondary": "#303030",
        "inverse-on-surface": "#313030",
        "error": "#ffb4ab",
        "secondary": "#c8c6c5",
        "tertiary-container": "#004e56",
        "surface-dim": "#131313",
        "primary": "#ffb4a6",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-high": "#2a2a2a",
        "surface-container-low": "#1c1b1b",
        "on-background": "#e5e2e1",
        "inverse-primary": "#9b4334",
        "tertiary-fixed": "#b0edf6",
        "on-error": "#690005",
        "background": "#131313",
        "surface-container-highest": "#353534",
        "surface-variant": "#353534",
        "on-primary-container": "#ff9986",
        "on-tertiary-container": "#82bec7",
        "surface-container": "#201f1f",
        "on-error-container": "#ffdad6",
        "outline-variant": "#55423f",
        "on-tertiary-fixed": "#001f23",
        "on-surface": "#e5e2e1",
        "inverse-surface": "#e5e2e1",
        "secondary-fixed": "#e5e2e1",
        "primary-fixed-dim": "#ffb4a6",
        "on-secondary-container": "#b7b5b4",
        "secondary-fixed-dim": "#c8c6c5",
        "on-primary-fixed-variant": "#7c2d20",
        "on-secondary-fixed": "#1b1c1c",
        "on-primary-fixed": "#400200",
        "surface-bright": "#3a3939"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "md": "0px",
        "sm": "0px",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Inter"],
        "body": ["Inter"],
        "label": ["Inter"],
        "sans": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwindcss-animate') // Keep in case shadcn uses this
  ],
}
