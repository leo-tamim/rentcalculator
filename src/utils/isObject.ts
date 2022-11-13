export default function isObject(val: any): boolean {
  return typeof val === "object" && val !== null;
}
