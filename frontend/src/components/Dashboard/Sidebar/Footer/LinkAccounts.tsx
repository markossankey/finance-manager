import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { PlaidLinkOptions, usePlaidLink } from "react-plaid-link";
import { get } from "../../../../api/config";
import { btnStyleProps } from "../styles";

export const LinkAccountsBtn = () => {
  const { data } = useQuery({
    queryKey: ["token"],
    queryFn: () => get("/finance/auth"),
    onSuccess: () => console.log("fetched token"),
    staleTime: Infinity,
  });

  const config: PlaidLinkOptions = {
    onSuccess: (public_token) => {
      console.log(public_token);
      return get("finance/auth/token/public/exchange", {
        params: { public_token },
      });
    },
    token: data?.data?.token,
  };
  const { open, ready } = usePlaidLink(config);

  return (
    <div>
      {ready && (
        <Button {...btnStyleProps} onClick={() => open()}>
          Link Accounts
        </Button>
      )}
    </div>
  );
};
