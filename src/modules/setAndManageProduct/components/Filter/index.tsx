import { useState } from "react";
import DebouncedTextField from "@/modules/common/components/DebouncedTextField";
import { IProductAttributeFilterInputs } from "../complain";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Fonts } from "../../../../shared/constants/AppEnums";
import { FcClearFilters, FcFilledFilter, FcOk } from "react-icons/fc";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./styles.module.scss";
interface IProps {
  filters: IProductAttributeFilterInputs;
  onChangeFilters: (filters: IProductAttributeFilterInputs) => void;
}

export default function Filters({ filters, onChangeFilters }: IProps) {
  const [en, setEn] = useState<boolean>(false);
  const [bn, setBn] = useState<boolean>(false);
  const [id, setID] = useState<boolean>(false);

  const handleChange = (val: string, key: string) => {
    onChangeFilters({ ...filters, [key]: val ? val : null });
    key === "code" && val != "" ? setEn(true) : setEn(false);
    key === "namew" && val != "" ? setBn(true) : setBn(false);
    key === "uid" && val != "" ? setID(true) : setID(false);
  };

  return (
    <>
      <Grid item xs={12} md={2}>
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
          value={filters.code}
          onChange={(val) => handleChange(val, "code")}
          label="Filter in Code"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          focused={true}
          color={"primary"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                Code
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
          value={filters.name}
          onChange={(val) => handleChange(val, "name")}
          label="Fiter in Product Name"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          focused={true}
          color={"primary"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                Name
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
      {/* <Grid item xs={12} md={3}>
        <DebouncedTextField
          value={filters.rentPeriod}
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
      </Grid> */}
      <Grid item xs={12} md={4}></Grid>
    </>
  );
}
