import combineClassNames from "@/utils/combineClassNames";
import { CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react";
import styles from "./CommonCard.module.scss";

interface ICommonCard {
  children: any;
  title?: ReactNode;
  gutterOnMd?: boolean;
  minHeight?: number;
}

export default function CommonCard({
  children,
  title,
  gutterOnMd,
  minHeight,
}: ICommonCard) {
  return (
    <Card>
      {title ? <CardHeader title={title} /> : ""}
      <CardContent
        className={combineClassNames(styles, {
          rootContent: true,
          gutterOnMd: Boolean(gutterOnMd),
        })}
        sx={{
          minHeight: minHeight,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}
