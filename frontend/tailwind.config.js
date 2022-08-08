/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js, jsx, ts, tsx, html}"],
   theme: {
      extend: {
         colors: {
            sitedarkblue: "#323a45",
            sitelightblue: "#3f6184",
            sitedarkgray: "#778899",
            sitelightgray: "#f6f7f9",
            sitemedgray: "#dddee0",
            sitegray: "#5e6c82",
            siteteal: "#5faeb6",
         },
      },
   },
   plugins: [],
};
