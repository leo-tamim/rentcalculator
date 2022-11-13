import combineClassNames from "@/utils/combineClassNames";
import styles from "./ActiveStatus.module.scss";

export default function ActiveStatus({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className={combineClassNames(styles, {
        root: true,
        active: Boolean(isActive),
      })}
    />
  );
}
