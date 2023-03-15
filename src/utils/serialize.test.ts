import { serialize } from "./serialize";

describe("serialize", () => {
  it("should serialize an object", () => {
    const obj = { a: 1, b: 2 };
    const serialized = serialize(obj);
    expect(serialized).toEqual(obj);
  });

  it("should serialize a nested object", () => {
    const obj = { a: 1, b: { c: 2 } };
    const serialized = serialize(obj);
    expect(serialized).toEqual(obj);
  });
});
