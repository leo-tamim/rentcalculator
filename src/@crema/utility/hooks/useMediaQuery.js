import React from "react";

export const useMediaQuery = (query, whenTrue, whenFalse) => {
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  const mediaQuery = window.matchMedia(query);

  if (typeof window === "undefined" || typeof window.matchMedia === "undefined")
    return whenFalse;

  return match ? whenTrue : whenFalse;
};
