import styles from "./AppLogo.module.scss";

interface IAppLogo {
  size?: "full-width" | "small" | "medium" | "full-height";
}

export default function AppLogo({ size = "full-width" }: IAppLogo) {
  return (
    <>
      <p className={styles.logo}>
        Re<b className={styles.logoCartColor}>nt</b>
      </p>
      <p className={styles.portalName}>Calculator</p>
    </>
  );
}
