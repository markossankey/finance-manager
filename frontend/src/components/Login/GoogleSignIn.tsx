import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../api/config";
import { UserContext } from "../../context/User";

declare var google: any;

export const GoogleSignIn = () => {
  const { isLoggedIn, logout, login } = useContext(UserContext);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const navigate = useNavigate();

  const handleGoogleResponse = async (response: any) => {
    const { data, status } = await post(
      "/auth/login",
      { response },
      {
        // need otherwise axios doesn't allow re routing for 302 status
        validateStatus(status) {
          return status < 400;
        },
      }
    );
    // user doesn't exist
    if (status === 302) {
      navigate("/register", { state: data });
    } else {
      login(data.token);
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      ux_mode: "popup",
      callback: handleGoogleResponse,
    });
    setIsGoogleLoaded(true);
  }, []);

  useEffect(() => {
    if (isGoogleLoaded) {
      google.accounts.id.renderButton(
        document.getElementById("google-sign-in"),
        {
          theme: "outline",
          size: "large",
        }
      );
    }
  }, [isLoggedIn, isGoogleLoaded]);

  return <div id="google-sign-in" style={{ width: "16rem" }} />;
};
