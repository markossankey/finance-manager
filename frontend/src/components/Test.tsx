import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import { get } from "../api/axios";

export const Test = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["test"],
    queryFn: () => get("/api/test"),
    retry: false,
    staleTime: Infinity,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      {isError ? (
        "not authenticated"
      ) : isLoading ? (
        <Skeleton active />
      ) : (
        data.data
      )}
    </div>
  );
};
