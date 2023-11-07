import User from "../entities/userEntity.js";
export default (databaseService) => {
  function Execute(email, password, firstName, lastName, phone, address) {
    // if (!email || !password) {
    //   throw new Error("Validation faild");
    // }
    const user = databaseService.getByEmail(email);
    if (user) {
      throw new Error("email alreay exist");
    }
    let newUser = new User(
      email,
      password,
      firstName,
      lastName,
      phone,
      address
    );
    newUser = databaseService.add(newUser);
    return "user added successfully";
  }
  return { Execute };
};
