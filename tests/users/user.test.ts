import request from "supertest";
import app from "../../src/app";
import IUser from "../../src/interface/Iuser";
import jwt from "jwt-simple";
import UserService from "../../src/services/userService";
const MAIN_ROUTE = "/sign-up";

let user: IUser = {
  firstName: "Jorel",
  lastName: "Silva",
  birthDate: new Date("1990-05-15"),
  city: "São Paulo",
  country: "Brasil",
  email: "1234566df.silva@example.com",
  password: "senha123",
  confirmPassword: "senha123",
};

beforeAll(async () => {
  const res = await UserService.signUp(user);
});

test("Deve inserir usuário com sucesso", () => {
  return request(app)
    .post(MAIN_ROUTE)
    .send({
      firstName: "Jorel",
      lastName: "Silva",
      birthDate: "1990-05-15",
      city: "São Paulo",
      country: "Brasil",
      email: "1234566df.silva@example.com",
      password: "senha123",
      confirmPassword: "senha123",
    })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe("Jorel");
      expect(res.body).not.toHaveProperty("password");
    });
});
