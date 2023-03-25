import { serialize } from "@/common/utils/serialize";

describe("serialize", () => {
  it("should JSON.stringify an object", () => {
    const obj = { foo: "bar" };
    const result = serialize(obj);
    expect(result).toStrictEqual(JSON.parse(JSON.stringify(obj)));
  });
});
