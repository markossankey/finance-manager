import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { ConfigProviderProps } from "antd/es/config-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./context/User";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
]);
const theme: ConfigProviderProps["theme"] = {
  token: { colorText: "#FFFFF", colorBgContainer: "#242424" },
};

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <UserContextProvider>
            <RouterProvider router={router} />
          </UserContextProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
