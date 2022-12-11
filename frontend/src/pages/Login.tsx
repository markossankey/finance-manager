import { Form, Skeleton } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../context/User";

const { Item: FormItem } = Form;

export const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const jwt = params.get("token");
    jwt && login(jwt);
    navigate("/");
  }, []);
  return (
    <div>
      <Skeleton active />
    </div>
  );
};
