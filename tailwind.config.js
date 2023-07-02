import withMT from "@material-tailwind/react/utils/withMT";
 
// eslint-disable-next-line no-undef
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgmobile: "url('/images/bgmb.jpg')",
        bgfull: "url('/images/hero-section.jpg')"
      }
    },
  },
  plugins: [],
});