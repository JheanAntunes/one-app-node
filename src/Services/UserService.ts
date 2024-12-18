type CreateUserParams = {
  name: string;
  email: string;
};

const db = [{ name: "jhean", email: "jhean@gmail.com" }];

export class UserService {
  createUser = (user: CreateUserParams) => {
    db.push(user);
    console.log("Banco de Dados: ", db);
  };

  getAllUsers = () => {
    return db;
  };
}
