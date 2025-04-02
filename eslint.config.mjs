import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

<<<<<<< HEAD
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
=======
const eslintConfig = [...compat.extends("next/core-web-vitals")];
>>>>>>> 9c0f7085b535d6d8cf8e47e100a48e2ef7ad3bb2

export default eslintConfig;
