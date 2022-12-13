import { useQuery } from "@tanstack/react-query";
import { Table, Typography } from "antd";
import { ColumnType } from "antd/es/table";
import { Transaction } from "plaid";
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
    <Table
      rowKey="transaction_id"
      columns={columns}
      dataSource={data.transactions}
      expandable={{
        expandedRowRender: (record) => (
          <pre>{JSON.stringify(record, null, 4)}</pre>
        ),
      }}
    />
  );
};

const columns: ColumnType<Transaction>[] = [
  { title: "Date", dataIndex: "date", key: "date" },
  {
    title: "Authorized Date",
    dataIndex: "authorized_date",
    key: "authorized_date",
  },
  { title: "Amount", dataIndex: "amount", key: "amount" },
  {
    title: "Account",
    dataIndex: "account_id",
    render: (value, record, index) => value.slice(-4),
    key: "account_id",
  },
  {
    title: "Categories",
    dataIndex: "category",
    render: (value) => value.join(", "),
    key: "category",
  },
  {
    title: "Merchant",
    dataIndex: "merchant_name",
    render: (value, record) => value || record["name"],
    key: "merchant_name",
  },
];
