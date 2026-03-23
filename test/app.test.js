import "dotenv/config";
import request from "supertest";
import app from "../src/app.js";

describe("GET /test", () => {
  it("should return status 200", () => {
    return request(app).get("/test").expect(200);
  });
});
