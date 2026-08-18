const headers = { "User-Agent": "ttps-proof-suite", Accept: "application/vnd.github+json" };

async function get(url) {
  const res = await fetch(url, { headers });
  const body = await res.json().catch(() => ({}));
  console.log(url, "->", res.status);
  return { ok: res.ok, status: res.status, body };
}

const nest = await get("https://api.github.com/repos/nestjs/nest");
const release = await get("https://api.github.com/repos/nestjs/nest/releases/latest");
const npm = await get("https://api.npmjs.org/downloads/point/last-month/@nestjs/core");

console.log("nest full_name:", nest.body.full_name || nest.body.message);
console.log("latest release:", release.body.tag_name || release.body.message);
console.log("npm downloads:", npm.body.downloads);

process.exit(nest.ok && release.ok && npm.ok ? 0 : 1);
