import { generateId } from "../utils/task";

describe("Generate Random ID", () => {
  test("get random id in alphanumeric characters", () => {
    const uid = generateId();

    expect(uid).toMatch(/([a-z0-9])\w+/);
  });
});
