import { Skeleton } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/User";

export const Loading = ({}) => {
  const { login } = useContext(UserContext);
  const [params, _setParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      login(token);
      navigate("/dashboard");
    }
  }, [params]);

  return <Skeleton active />;
};
