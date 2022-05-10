module.exports = {
  plugins: [
    "postcss-import",
    { "tailwindcss/nesting": {} },
    "tailwindcss",
    "postcss-flexbugs-fixes",
    "postcss-nesting",
    "postcss-custom-properties",
    "autoprefixer",
  ],
}

// postcss.config.js
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-flexbugs-fixes": {},
    "postcss-nesting": {},
    "postcss-custom-properties": {},
  },
}
