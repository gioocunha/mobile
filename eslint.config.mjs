import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [
        "error",
        {
          "extensions": [".js", ".jsx"]
        }
      ],
      "import/prefer-default-export": "off"
    }
  }

 ,{
  "extends": [
      "plugin:prettier/recommended"
    ],
  
    "plugins": ["prettier"],
  
    "rules": {
      "prettier/prettier": "error"
    }
  }
];