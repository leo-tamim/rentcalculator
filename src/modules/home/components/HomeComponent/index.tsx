import { AppComponentCard, AppComponentHeader } from "@/@crema";
import {
  decrementCount,
  getCommonState,
  incrementCount,
} from "@/modules/common/slices/commonSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { Button } from "@mui/material";
import { ReactElement } from "react";
import styles from "./HomeComponent.module.scss";

export default function HomeComponent(): ReactElement {
  const { count } = useAppSelector(getCommonState);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <AppComponentHeader title="Home" />
      <AppComponentCard title="Count Numbers">
        <div className={styles.actions}>
          <Button
            variant="contained"
            onClick={() => dispatch(decrementCount(1))}
          >
            Decrease Count
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch(incrementCount(1))}
          >
            Increase Count
          </Button>
        </div>

        <h2 className={styles.count}>{count}</h2>
      </AppComponentCard>
    </div>
  );
}
