// Import Node.js Dependencies
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
import path from "node:path";

// Import Third-party Dependencies
import { Policy, PolicyContext } from "@nodelint/policy";
import * as npm from "@npm/types";

// Import Events
import * as events from "./events/index.js";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function readPackageJSON(fileLocation: string) {
  const packageJSONStr = await fs.readFile(fileLocation, "utf-8");
  const packageJSON = JSON.parse(packageJSONStr) as npm.PackageJson;

  return packageJSON;
}

async function* main(ctx: PolicyContext) {
  if (ctx.scope !== "package.json") {
    return;
  }

  const packageJSON = await readPackageJSON(
    path.join(ctx.scopeLocation, ctx.scope)
  );
  console.log(packageJSON);

  yield events.foo.id;
}

const i18n = await Policy.loadi18n(
  path.join(__dirname, "src/i18n")
);

export default new Policy({
  name: "package-json",
  defaultLang: "french",
  scope: ["package.json"],
  i18n,
  events,
  main
});
