import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { get } from "../api/axios";

export const PlaidButton = () => {
  const { data } = useQuery({
    queryKey: ["token"],
    queryFn: () => get("/api/finance/auth"),
    onSuccess: () => console.log("fetched token"),
    staleTime: Infinity,
  });

  const config: PlaidLinkOptions = {
    onSuccess: (public_token) => {
      console.log(public_token);
      return get("api/finance/auth/token/public/exchange", {
        params: { public_token },
      });
    },
    token: data?.data?.token,
  };
  const { open, ready } = usePlaidLink(config);

  return (
    <div>{ready && <Button onClick={() => open()}>Open Plaid</Button>}</div>
  );
};
