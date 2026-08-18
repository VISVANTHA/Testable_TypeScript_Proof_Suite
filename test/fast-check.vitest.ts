import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { Service } from "../src/service";

describe("fast-check Service", () => {
  it("processMessage always includes input", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1, maxLength: 40 }), (msg) => {
        const out = new Service().processMessage(msg);
        return typeof out === "string" && out.includes(msg);
      }),
      { numRuns: 20 }
    );
    expect(true).toBe(true);
  });
});
