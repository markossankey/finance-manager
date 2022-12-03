import { useQuery } from "@tanstack/react-query";
import { get } from "../api/axios";

export const Test = () => {
  const { isLoading, isError, data } = useQuery(["test"], () =>
    get("/api/router")
  );

  return (
    <div>
      {!isError && !isLoading && <pre>{JSON.stringify(data.data)}</pre>}
    </div>
  );
};
