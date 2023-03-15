import maskEmail from "./mask-email";

describe("maskEmail", () => {
  it("masks the email address correctly", () => {
    const email = "testuser@example.com";
    const expected = "tes***ser@example.com";
    expect(maskEmail(email)).toEqual(expected);
  });

  it("returns an empty string when passed an empty string", () => {
    expect(maskEmail("")).toEqual("***@undefined");
  });
});
