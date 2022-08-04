// Import Node.js Dependencies
import { fileURLToPath } from "url";
import path from "path";

// Import Third-party Dependencies
import { Policy } from "@nodelint/policy";

// Import Events
import * as events from "./events/index.js";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function* main() {
  yield events.foo.id;
}

// ESM with top level await
const i18n = await Policy.loadi18n(path.join(__dirname, "src/i18n"));

export default new Policy({
  name: "package-json",
  defaultLang: "french",
  scope: ["package.json"],
  i18n,
  events,
  main
});
