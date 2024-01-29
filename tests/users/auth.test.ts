import { Response } from "supertest";
import request from "supertest";
import app from "../../src/app";
import IUser from "../../src/interface/Iuser";
describe("User Controller", () => {
  test("Sign Up", async () => {
    const newUser = {
      firstName: "John",
      lastName: "Doe",
      birthDate: "1990-01-01",
      city: "New York",
      country: "USA",
      email: "sdfsdfdsfdsf.f@example.com",
      password: "password123",
      confirmPassword: "password123",
    };

    await request(app)
      .post("/user/sign-up")
      .send(newUser)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual({ message: "User created" });
      });
  }, 20000);
});
