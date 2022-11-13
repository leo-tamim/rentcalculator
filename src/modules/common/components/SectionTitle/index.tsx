import { Fonts } from "@/shared/constants/AppEnums";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Styles from "./styles.module.scss";
import { FcOk } from "react-icons/fc";

interface ISectionTitleProps {
  children: string;
}

export default function SectionTitle({ children }: ISectionTitleProps) {
  return (
    <Box sx={{ display: "flex", margin: ".5rem 0 0.25rem" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: 14,
          fontWeight: Fonts.BOLD,
          marginBottom: 0,
          color: "rgb(235, 141, 52)",
        }}
      >
        <span className={Styles.tag}>
          Set <FcOk className={Styles.iconMargin} />
        </span>{" "}
        {children}
      </Typography>
    </Box>
  );
}
