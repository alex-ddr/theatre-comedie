/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'radial-orange-pink': 'radial-gradient(1200px 600px at 10% 20%, rgba(255,153,0,0.25), transparent 60%), radial-gradient(900px 500px at 80% 10%, rgba(255,0,128,0.18), transparent 70%), radial-gradient(1200px 700px at 50% 100%, rgba(255,105,180,0.18), transparent 60%)'
      }
    },
  },
  plugins: [],
}