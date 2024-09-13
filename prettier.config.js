// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
    printWidth: 120,
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    plugins: ["prettier-plugin-tailwindcss"],
};
