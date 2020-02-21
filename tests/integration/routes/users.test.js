const request = require("supertest");
const { User } = require("../../../models/user");
let server;

describe("POST", () => {
  beforeEach(() => {
    server = require("../../../server");
  });
  afterEach(async () => {
    server.close();
    await User.remove({});
  });
  let nom;
  const exec = () => {
    return request(server)
      .post("/api/users")
      .send({ nom: `${nom}` });
  };
  beforeEach(() => {
    token = new User().generateAuthToken();
  });

  it("return 400 if nom is less than 5 caracter", async () => {
    nom = "walid";

    const res = await exec();

    expect(res.status).toBe(400);
  });
  it("return 400 if nom is mor than 50 caracter", async () => {
    nom = new Array(52).join("a");

    const res = await exec();

    expect(res.status).toBe(400);
  });
  it("return 400 if the user already exist", async () => {
    const email = { email: "walid@gmail.com" };
    new User(email);
    const res = await request(server)
      .post("/api/users")
      .send(email);

    expect(res.status).toBe(400);
  });
});
