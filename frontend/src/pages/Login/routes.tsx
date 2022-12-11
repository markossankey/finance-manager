import { RouteObject } from "react-router-dom";
import { GoogleSignIn } from "../../components/Login/GoogleSignIn";
import { Loading } from "../../components/Login/Loading";
import { Register } from "../../components/Login/Register";

export const loginRoutes: RouteObject[] = [
  { path: "/", element: <GoogleSignIn /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Loading /> },
];
