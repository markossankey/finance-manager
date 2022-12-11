import { useQuery } from "@tanstack/react-query";
import { Typography } from "antd";
import Finances from "../../../api/finance";

const { getAccounts } = Finances;

const { Title, Text } = Typography;

export const Accounts = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["finance", "accounts"],
    queryFn: getAccounts,
    select: ({ data }) => data,
  });

  return isLoading ? (
    <Text>"Loading..."</Text>
  ) : isError ? (
    <Text>"Error"</Text>
  ) : (
    <>
      {data.accounts.map((account) => (
        <>
          <Title
            level={3}
          >{`${account.name} | ${account.official_name}`}</Title>
          <Text>Available Balance ${account.balances.available}</Text>
          <div>
            <Text>{JSON.stringify(account)}</Text>
          </div>
        </>
      ))}
    </>
  );
};
