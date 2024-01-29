import request from "supertest";
import app from "../src/app";

test("It should return status 200", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
});
