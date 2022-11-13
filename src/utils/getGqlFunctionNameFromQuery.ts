export default function getGqlFunctionNameFromQuery(
  query: string
): string | undefined {
  try {
    const wordsSplittedBySpace = query.split(" ");
    const necessaryPart = wordsSplittedBySpace.find((word) =>
      word.includes("(filter:")
    );
    return necessaryPart?.slice(0, -8);
  } catch (error) {
    console.error("Error in getGqlFunctionNameFromQuery", error);
  }

  return;
}
