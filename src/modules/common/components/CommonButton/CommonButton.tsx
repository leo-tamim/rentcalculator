import styles from "./CommonButton.module.scss";
import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | (string | Element)[];
  size?: "small" | "medium" | "large";
  className?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  fullHeight?: boolean;
};

const CommonButton = (props: IButtonProps) => {
  const handleClick = (event: any) => {
    if (!props.onClick) return;
    props.onClick(event);
  };
  return (
    <Button
      variant={props.variant}
      color={props.color}
      size={props.size}
      onClick={handleClick}
      disabled={props.disabled || props.isLoading}
      fullWidth={props.fullWidth}
      className={props.fullHeight ? styles.fullHeight : ""}
      sx={{
        borderRadius: "4px",
        marginLeft: "2px",
      }}
    >
      <>
        {props.isLoading ? (
          <div className={`spinner-border ${styles.spinner}`} role="status" />
        ) : props.icon ? (
          <span className={styles.icon}>{props.icon}</span>
        ) : (
          ""
        )}
        {props.children}
      </>
    </Button>
  );
};

CommonButton.defaultProps = {
  size: "medium",
  color: "primary",
  variant: "contained",
  fullWidth: false,
  preventSvgStrokeColor: false,
  isLoading: false,
  isFullWidthOnMobile: false,
};

export default CommonButton;
