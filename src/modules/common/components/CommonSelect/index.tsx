import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import isUndefined from "@/utils/isUndefined";
import { KEY_INPUT_VARIANT } from "@/config/keys";

export interface ISelectOptions {
  value: any;
  label: React.ReactNode;
}

interface ICommonSelect {
  onChange?: (event: SelectChangeEvent) => void;
  value?: any;
  name: string;
  label: React.ReactNode;
  options: ISelectOptions[];
  errorText?: string;
  helperText?: string;
  formik?: any;
  required?: boolean;
  disabled?: boolean;
}

export default function CommonSelect({
  onChange,
  value,
  name,
  label,
  options,
  errorText,
  helperText,
  formik,
  required,
  disabled,
}: ICommonSelect) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        variant={KEY_INPUT_VARIANT}
        required={required}
        error={Boolean((formik && name && formik.errors[name]) || errorText)}
      >
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={name}
          name={name}
          value={
            !isUndefined(value)
              ? value
              : formik && name
              ? formik.values[name]
              : undefined
          }
          label={label}
          onChange={
            onChange
              ? onChange
              : formik && formik.handleChange
              ? formik.handleChange
              : undefined
          }
          disabled={disabled}
        >
          {options.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {(formik && name && formik.errors[name]) || errorText || helperText ? (
          <FormHelperText>
            {(formik && name && formik.errors[name]) || errorText || helperText}
          </FormHelperText>
        ) : (
          ""
        )}
      </FormControl>
    </Box>
  );
}
