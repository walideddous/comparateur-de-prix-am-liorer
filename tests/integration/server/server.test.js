const request = require("supertest");
let server;

describe("/", () => {
  beforeEach(() => {
    server = require("../../../server");
  });
  afterEach(() => {
    server.close();
  });
  it("should return a string if the server is running", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
});
