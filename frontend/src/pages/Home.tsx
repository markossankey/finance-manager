import { useContext } from "react";
import { GoogleSignIn } from "../components/GoogleSignIn";
import { PlaidButton } from "../components/PlaidButton";
import { Test } from "../components/Test";
import { UserContext } from "../context/User";

export const Home = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <>
      <p>Home</p>
      <Test />
      <GoogleSignIn />
      {isLoggedIn && <PlaidButton />}
    </>
  );
};
