import { useQueryClient } from "@tanstack/react-query";
import { createContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface UserContextType {
  isLoggedIn: boolean;
  logout: () => void;
  login: (jwt: string) => void;
}
export const UserContext = createContext<UserContextType>(
  null as unknown as UserContextType
);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [userJwt, setUserJwt, removeUserJwt] = useLocalStorage("user.sid");
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

  return (
    <UserContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};
