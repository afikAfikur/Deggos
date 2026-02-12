/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Adding Instagram's specific palette
        "insta-black": "#000000",
        "insta-gray": "#121212",
        "insta-border": "#262626",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        synthwave: {
          "primary": "#E1306C",
          "base-100": "#000000", // This replaces your CSS override --b1
          "base-200": "#121212", // This replaces your CSS override --b2
          "base-300": "#262626",
          "base-content": "#ffffff", // Makes text white on black
        },
      },
    ],
  },
}