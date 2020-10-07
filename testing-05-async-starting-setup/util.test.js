jest.mock("./http");
const { loadTitle } = require("./util");
test("check title", () => {
  loadTitle().then((title) => expect(printTitle()).toBe("DELECTUS AUT AUTEM"));
});
