/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            custom_white: "#FAFAFA",
            custom_gray: "#696969",
            custom_black: "#141414",
         },
         boxShadow: {
            "shadow-full": "0 0 0 100vw rgba(0, 0, 0, 0.5)",
         },
      },
   },
   plugins: [],
};
