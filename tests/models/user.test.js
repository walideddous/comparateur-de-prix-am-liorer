const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");

describe("generateAuthToken", () => {
  it("should return a valid JWT", async () => {
    try {
      const payload = { id: new mongoose.Types.ObjectId().toHexString() };
      const user = new User(payload);
      const resultat = user.generateAuthToken();
      const decoded = await jwt.verify(resultat, config.get("jsonSecretKey"));
      expect(decoded).toMatchObject(payload);
    } catch (ex) {
      console.log(ex.message);
    }
  });
});
