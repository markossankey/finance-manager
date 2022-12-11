import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { ConfigProviderProps } from "antd/es/config-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/User";
import { Dashboard } from "./pages/Dashboard";
import { dashboardRoutes } from "./pages/Dashboard/routes";
import { Login } from "./pages/Login";
import { loginRoutes } from "./pages/Login/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30 * 1000 },
  },
});

const routes = createBrowserRouter([
  { path: "/", element: <Login />, children: loginRoutes },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: dashboardRoutes,
  },
]);

const theme: ConfigProviderProps["theme"] = {};

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme}>
          <UserContextProvider>
            <RouterProvider router={routes} />
          </UserContextProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
