import { UserType } from "../../@types/user";
import { get, post } from "./config";

const User = {
  postLogin: (googleCredential: string) =>
    post(
      "auth/login",
      { googleCredential },
      {
        validateStatus(status) {
          return status < 400;
        },
      }
    ),
  getWhoAmI: () => get<UserType>("general/user/who-am-i"),
};

export default User;
