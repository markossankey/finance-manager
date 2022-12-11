import { useState } from "react";

export function useLocalStorage(key: string) {
  const [item, setItem] = useState(localStorage.getItem(key));

  const updateItem = (newVal: any) => {
    localStorage.setItem(
      key,
      typeof newVal === "string" ? newVal : JSON.stringify(newVal)
    );
    setItem(newVal);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setItem(null);
  };

  return [item, updateItem, removeItem] as [
    typeof item,
    typeof updateItem,
    typeof removeItem
  ];
}
