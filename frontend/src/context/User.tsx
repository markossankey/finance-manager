import { useQueryClient } from "@tanstack/react-query";
import { createContext, ReactNode, useEffect, useState } from "react";
import { UserType } from "../../@types/user";
import User from "../api/user";
import { useLocalStorage } from "../hooks/useLocalStorage";

const { getWhoAmI } = User;
interface UserContextType {
  isLoggedIn: boolean;
  logout: () => void;
  login: (jwt: string) => void;
  user: UserType | null;
}
export const UserContext = createContext<UserContextType>(
  null as unknown as UserContextType
);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userJwt, setUserJwt, removeUserJwt] = useLocalStorage("user.sid");
  const [user, setUser] = useState<UserContextType["user"]>(null);
  const queries = useQueryClient();

  const isLoggedIn = userJwt ? true : false;

  const login = (jwt: string) => {
    setUserJwt(jwt);
    queries.refetchQueries();
  };

  const logout = () => {
    removeUserJwt();
    queries.refetchQueries();
  };

  useEffect(() => {
    if (isLoggedIn) {
      getWhoAmI().then((res) => setUser(res.data));
    } else setUser(null);
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ isLoggedIn, logout, login, user }}>
      {children}
    </UserContext.Provider>
  );
};
