import { describe, it, expect } from "vitest";
import { Service } from "../src/service";

describe("Service (vitest)", () => {
  it("processes message", () => {
    const out = new Service().processMessage("Vitest");
    expect(out).toBe("Processed: Vitest");
  });
});
