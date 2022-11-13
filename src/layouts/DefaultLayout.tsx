import { ReactNode } from "react";

/**
 * We will be using this as a common layout.
 * So, any modification to this will reflect to the
 * maximum (most of the) pages of this app.
 * @param children JSX.Element | JSX.Element[]
 * @returns JSX.Element
 */
export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
