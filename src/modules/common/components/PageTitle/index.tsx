import { Fonts } from "@/shared/constants/AppEnums";
import combineClassNames from "@/utils/combineClassNames";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./PageTitle.module.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { NextRouter, useRouter } from "next/router";

interface IPageTitle {
  children: any;
  action?: any;
  icon?: any;
  hasBack?: boolean;
  onBack?: Function;
}

export default function PageTitle({
  children,
  action,
  icon,
  hasBack = false,
  onBack,
}: IPageTitle) {
  const router: NextRouter = useRouter();

  const handleClickBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  return (
    <div
      className={combineClassNames(
        styles,
        {
          hasAction: Boolean(action),
          hasBack,
          gutter: Boolean(action || hasBack),
        },
        styles.root
      )}
    >
      {hasBack ? (
        <IconButton className={styles.iconBtn} onClick={handleClickBack}>
          <MdKeyboardArrowLeft />
        </IconButton>
      ) : (
        ""
      )}
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {icon ? (
            <Box sx={{ display: "flex", marginRight: "0.5rem" }}>{icon}</Box>
          ) : (
            <div />
          )}
          <Typography
            component="h3"
            sx={{
              fontSize: 16,
              fontWeight: Fonts.BOLD,
            }}
          >
            {children}
          </Typography>
        </Box>
      </Box>
      {action}
    </div>
  );
}
