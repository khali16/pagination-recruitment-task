export const processErrorResponse = (status: number) => {
  if (status >= 400 && status < 500) {
    throw new Error(
      "Make sure you provided right params :) Client error: " + status
    );
  } else if (status >= 500 && status < 600) {
    throw new Error("Server error: " + status);
  } else {
    throw new Error("Unexpected error: " + status);
  }
};
