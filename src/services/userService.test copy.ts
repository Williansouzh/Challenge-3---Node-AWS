import * as UserServie from "../services/Userservice";
import { User, UserInstance } from "../models/User";
describe("Testing user service", () => {
  //senha e email padrão para testes
  const email = "test@jest.com.br";
  const password = "1234";

  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it("Should create a new user", async () => {
    const newUser = (await UserServie.createUser(
      email,
      password
    )) as UserInstance;
    expect(newUser).not.toBeInstanceOf(Error);
    expect(newUser).toHaveProperty("id");
    expect(newUser.email).toBe(email);
  });
  it("Should not allow to create a user with existing email", async () => {
    const newUser = await UserServie.createUser(email, password);
    expect(newUser).toBeInstanceOf(Error);
  });
  it("should find a user by the email", async () => {
    const user = (await UserServie.findByEmail(email)) as UserInstance;
    expect(user.email).toBe(email);
  });
  it("Should match the password from database", async () => {
    const user = (await UserServie.findByEmail(email)) as UserInstance;
    const match = await UserServie.matchPassword(password, user.password);
    expect(match).toBeTruthy();
  });
  it("Should NOT match the password from database", async () => {
    const user = (await UserServie.findByEmail(email)) as UserInstance;
    const match = await UserServie.matchPassword("invalid", user.password);
    expect(match).toBeFalsy();
  });
  it("Should get a list of users", async () => {
    const users = await UserServie.all();
    expect(users).toHaveLength(1);
    for (let i in users) {
      expect(users[i]).toBeInstanceOf(User);
    }
  });
});
