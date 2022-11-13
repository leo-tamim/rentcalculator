import { useState } from "react";
import DebouncedTextField from "@/modules/common/components/DebouncedTextField";
import { IGetFilter } from "@/types/models/product/commonSettings";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Fonts } from "../../../../shared/constants/AppEnums";
import { FcClearFilters, FcFilledFilter, FcOk } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./styles.module.scss";
interface IProps {
  filters: IGetFilter;
  onChangeFilters: (filters: IGetFilter) => void;
}

export default function Filters({ filters, onChangeFilters }: IProps) {
  const [en, setEn] = useState<boolean>(false);
  const [bn, setBn] = useState<boolean>(false);
  const [id, setID] = useState<boolean>(false);

  const handleChange = (val: string, key: string) => {
    onChangeFilters({ ...filters, [key]: val ? val : null });
    key === "enName" && val != "" ? setEn(true) : setEn(false);
    key === "bnName" && val != "" ? setBn(true) : setBn(false);
    key === "uid" && val != "" ? setID(true) : setID(false);
  };

  return (
    <>
      <Grid item xs={12} md={3}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <FcFilledFilter fontSize="32px" color="#009688" />
          <Typography
            component="h2"
            sx={{
              fontSize: 14,
              fontWeight: Fonts.BOLD,
              marginLeft: 2,
            }}
          >
            Filter Attribute :
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={3}>
        <DebouncedTextField
          value={filters.enName}
          onChange={(val) => handleChange(val, "enName")}
          label="Name in English"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          focused={true}
          color={"primary"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                EN
                {en === true ? (
                  <FcOk fontSize={"15px"} className={styles.iconAdjust} />
                ) : (
                  <FcClearFilters fontSize={"15px"} color="#009688" />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <DebouncedTextField
          value={filters.bnName}
          onChange={(val) => handleChange(val, "bnName")}
          label="Name in Bangla"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          focused={true}
          color={"primary"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                BN
                {bn === true ? (
                  <FcOk fontSize={"15px"} className={styles.iconAdjust} />
                ) : (
                  <FcClearFilters fontSize={"15px"} color="#009688" />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <DebouncedTextField
          value={filters.uid}
          onChange={(val) => handleChange(val, "uid")}
          label="UID"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          focused={true}
          color={"primary"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                ID
                {id === true ? (
                  <FcOk fontSize={"15px"} className={styles.iconAdjust} />
                ) : (
                  <FcClearFilters fontSize={"15px"} color="#009688" />
                )}
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </>
  );
}
