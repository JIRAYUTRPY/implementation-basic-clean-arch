import AddUser from "../useCases/addUser.js";
export default (databaseService) => {
  const addNewUser = (req, res, next) => {
    const { email, password, firstName, lastName, phone, address } = req.body;
    const command = AddUser(databaseService);
    try {
      const response = command.Execute(
        email,
        password,
        firstName,
        lastName,
        phone,
        address
      );
      res.json(response);
    } catch (err) {
      next(err);
    }
  };
  return {
    addNewUser,
  };
};
