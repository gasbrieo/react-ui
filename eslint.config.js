import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import importer from "eslint-plugin-import";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

const ignorePath = fileURLToPath(new URL(".prettierignore", import.meta.url));

export default tseslint.config(
  includeIgnoreFile(ignorePath, "Imported .prettierignore patterns"),
  [
    {
      files: ["**/*.{ts,tsx,js,jsx}"],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        react.configs.flat.recommended,
        react.configs.flat["jsx-runtime"],
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
        jsxA11y.flatConfigs.recommended,
        jestDom.configs["flat/recommended"],
        importer.flatConfigs.recommended,
        sonarjs.configs.recommended,
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          typescript: true,
          node: true,
        },
      },
      rules: {
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            disallowTypeAnnotations: false,
          },
        ],
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
      },
    },
  ],
  {
    files: ["**/*.stories.{ts,tsx}"],
    extends: [storybook.configs["flat/recommended"]],
  },
);
