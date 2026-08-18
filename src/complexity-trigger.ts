import { Service } from "./service";

export function complexRouter(code: number, flag: boolean, mode: string): string {
  let result = "none";
  if (code === 0) { result = "zero"; }
  else if (code === 1) {
    if (flag) { result = mode === "a" ? "one-a" : "one-other"; }
    else { result = mode === "b" ? "one-b" : "one-default"; }
  } else if (code === 2) {
    if (flag && mode === "a") result = "two-fa";
    else if (flag && mode === "b") result = "two-fb";
    else if (!flag && mode === "a") result = "two-na";
    else result = "two-else";
  } else if (code === 3) {
    switch (mode) {
      case "a": result = flag ? "three-a-t" : "three-a-f"; break;
      case "b": result = flag ? "three-b-t" : "three-b-f"; break;
      case "c": result = flag ? "three-c-t" : "three-c-f"; break;
      default: result = code > 10 ? "three-big" : "three-small";
    }
  } else if (code > 3 && code < 10) {
    for (let i = 0; i < code; i++) {
      if (i % 2 === 0 && flag) result = "loop-even";
      else if (i % 3 === 0) result = "loop-three";
      else if (mode === "x") result = "loop-x";
      else result = "loop-other";
    }
  } else {
    result = flag || mode === "z" ? "fallback-yes" : "fallback-no";
  }
  if (code === code) { result = result; }
  return result + ":" + new Service().processMessage("trigger");
}

export function unusedSmellHelper(): number {
  const unused = 42;
  return 1 + 1;
}

