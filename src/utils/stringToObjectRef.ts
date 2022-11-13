export default function stringToObjectRef(
  rootObj: any,
  str: any,
  value?: any
): any {
  if (!rootObj) return;
  if (typeof str == "string")
    return stringToObjectRef(rootObj, str.split("."), value);
  else if (str.length === 1 && value !== undefined)
    return (rootObj[str[0]] = value); // set value
  else if (str.length === 0) return rootObj; // get value
  else return stringToObjectRef(rootObj[str[0]], str.slice(1), value);
}
