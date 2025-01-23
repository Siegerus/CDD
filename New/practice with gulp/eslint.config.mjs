import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: { globals: globals.browser },
        rules: {
            "camelcase" : "error",
            "indent": "warn",
            "curly": "error",
            "quotes": ["error", "double"],
            "semi": ["error", "always"]
        }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];