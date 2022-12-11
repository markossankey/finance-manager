export const convertObjToQueryStr = (obj: AnyObject) =>
  Object.entries(obj)
    .reduce(
      (acc, [key, value]) => (value ? acc + `${key}=${value}&` : acc),
      "?"
    )
    .slice(0, -1);

type AnyObject = { [key: string]: string };
