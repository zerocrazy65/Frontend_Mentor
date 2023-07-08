/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontSize: {
            10: "10px",
            14: "14px",
            18: "18px",
            24: "24px",
            36: "36px",
         },
         colors: {
            //Primary
            Strong_cyan: "hsl(172, 67%, 45%)",
            //Neutral
            Very_dark_cyan: "hsl(183, 100%, 15%)",
            Dark_grayish_cyan: "hsl(186, 14%, 43%)",
            Grayish_cyan: "hsl(184, 14%, 56%)",
            Light_grayish_cyan: "hsl(185, 41%, 84%)",
            Very_light_grayish_cyan: "hsl(189, 41%, 97%)",
            White: "hsl(0, 0%, 100%)",
         },
         backgroundImage: {
            profile: "url('../assets/profile.svg')",
            dollar: "url('../assets/dollar.svg')",
         },
         backgroundPosition: {
            "left-4": "center left 1rem ",
         },
      },
   },
   plugins: [],
};
