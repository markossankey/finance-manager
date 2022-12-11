import { useQuery } from "@tanstack/react-query";
import { Typography } from "antd";
import Finances from "../../../api/finance";

const { getTransactions } = Finances;
const { Title, Text } = Typography;

export const Transactions = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["finance", "transactions"],
    queryFn: getTransactions,
    select: ({ data }) => data,
  });

  return isLoading ? (
    <Text>"Loading..."</Text>
  ) : isError ? (
    <Text>"Error"</Text>
  ) : (
    <>
      {data.transactions.map((transaction) => (
        <>
          <Title level={3}>{`${transaction.name}`}</Title>
          <Text>Transaction Amount ${transaction.amount}</Text>
          <div>
            <Text>{JSON.stringify(transaction)}</Text>
          </div>
        </>
      ))}
    </>
  );
};
