import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "max-len": ["error", { code: 100, ignoreComments: true }],
      "import/order": [
        "error",
        {
          groups: [
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "type",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "clsx",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    ignores: [
      "build",
      "node_modules",
      "coverage",
      "eslint.config.mjs",
      "*.d.ts",
    ],
  },
];
