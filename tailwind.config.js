/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Update to include dynamic route files
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Update to include components
    "./styles/**/*.{js,ts,jsx,tsx,mdx,}", // Ensure styles are also included
    "./global.css", // Include global CSS if it contains Tailwind directives
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Keep this if needed
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure any additional files are included
    './styles/**/*.css', // Add this to include your CSS module
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true,
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
        "4xl": ['24px', '32px']
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
};
