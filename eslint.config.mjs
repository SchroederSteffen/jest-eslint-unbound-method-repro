import eslint from "@eslint/js";
import jest from "eslint-plugin-jest";
import { globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  globalIgnores(["eslint.config.mjs"]),
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.spec.ts"],
    extends: [jest.configs["flat/recommended"], jest.configs["flat/style"]],
    rules: {
      "@typescript-eslint/unbound-method": "off",
      "jest/unbound-method": "error",
    },
  }
);
