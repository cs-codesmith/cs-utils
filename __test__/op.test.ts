import { describe, expect, test } from "@jest/globals";
import { Operation } from "../src/index";

describe("Operation Utility Tests", () => {
    test("Add test", () => {
        expect(Operation.add(1, 2)).toBe(3);
    });
});
