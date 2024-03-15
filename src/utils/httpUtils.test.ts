import { processErrorResponse } from "./httpUtils";

describe("processErrorResponse", () => {
  it("throws an error for client error status codes (4xx)", () => {
    const status = 404;
    expect(() => processErrorResponse(status)).toThrow(
      new Error(
        "Make sure you provided right params :) Client error: " + status
      )
    );
  });

  it("throws an error for server error status codes (5xx)", () => {
    const status = 503;
    expect(() => processErrorResponse(status)).toThrow(
      new Error("Server error: " + status)
    );
  });

  it("throws an error for unexpected error status codes", () => {
    const status = 300;
    expect(() => processErrorResponse(status)).toThrow(
      new Error("Unexpected error: " + status)
    );
  });
});
