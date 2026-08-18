module.exports = {
  forbidden: [{ name: "no-circular", severity: "warn", from: {}, to: { circular: true } }],
  options: { doNotFollow: { path: "node_modules" }, tsPreCompilationDeps: true }
};
