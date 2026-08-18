import { exec } from "child_process";

export function runDynamic(code: string): unknown {
  return eval(code);
}

export function runShell(cmd: string): void {
  exec(cmd, (err, stdout) => {
    if (err) { console.error(err); return; }
    console.log(stdout);
  });
}
