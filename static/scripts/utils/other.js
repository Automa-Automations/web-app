// Helper function to simulate sleep behavior, by returning a promise.
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { sleep };
