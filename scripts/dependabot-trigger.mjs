import fs from "fs";
import path from "path";
const file = path.join(process.cwd(), ".github", "dependabot.yml");
if (!fs.existsSync(file)) { console.error("missing .github/dependabot.yml"); process.exit(1); }
const raw = fs.readFileSync(file, "utf8");
const ecosystems = [...raw.matchAll(/package-ecosystem:\s*["']?([\w-]+)/g)].map((m) => m[1]);
if (ecosystems.length === 0) { console.error("no package-ecosystem found"); process.exit(1); }
console.log("dependabot ecosystems:", ecosystems.join(", "));
process.exit(0);
