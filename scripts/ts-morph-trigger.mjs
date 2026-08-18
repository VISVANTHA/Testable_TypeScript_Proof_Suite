import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { Project } = require("ts-morph");
const project = new Project({ tsConfigFilePath: "tsconfig.json" });
const sources = project.getSourceFiles("src/**/*.ts");
console.log(`ts-morph parsed ${sources.length} source files`);
for (const sf of sources) {
  console.log(`- ${sf.getBaseName()} classes=${sf.getClasses().length} functions=${sf.getFunctions().length}`);
}
process.exit(sources.length > 0 ? 0 : 1);
