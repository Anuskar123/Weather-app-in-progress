/** @type {import('tailwindcss').Config} */
// Export Tailwind CSS configuration
export default {
  // Specify files to scan for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Theme extensions
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'light': '#ffffff',
      },
    },
  },
  // Plugins array
  plugins: [],
};
