/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: ["./src/**/*.{js, jsx, ts, tsx, html}"],
   theme: {
      extend: {
         colors: {
            sitewhite: "#f3f4f7",
            sitelightgray: "#caccd1",
            sitedarkgray: "#52565e",
            sitedarkgreen: "#0a8ea0",
            siteblue: "#037ef3",
            siteredorange: "#f85a40",
            siteorange: "#f48924",
            siteyellow: "#ffc845",
            sitelightgreen: "#30c39e",
         },
      },
   },
   plugins: [],
};
