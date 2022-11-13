import isUndefined from "@/utils/isUndefined";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import React, { ReactNode, useCallback } from "react";
import CommonTextField from "../CommonTextField";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import styles from "./CommonAutocomplete.module.scss";
export interface AutocompleteOption {
  label: string;
  value: any;
}

interface ICommonAutocomplete {
  label?: ReactNode;
  options: AutocompleteOption[];
  formik?: any;
  value?: any;
  name: any;
  className?: string;
  required?: boolean;
  onChange?: (value: any) => void;
  fullWidth?: boolean;
  errorText?: string;
  helperText?: string;
  multiple?: boolean;
  placeholder?: string;
  disableCloseOnSelect?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onInputChange?: (value?: string) => void;
  freeSolo?: boolean;
  isDisabledSearch?: boolean;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CommonAutocomplete({
  label,
  formik,
  value,
  name,
  required,
  onChange,
  fullWidth = true,
  errorText,
  helperText,
  multiple,
  placeholder,
  disableCloseOnSelect,
  onInputChange,
  isDisabledSearch,
  ...restProps
}: ICommonAutocomplete) {
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputChange = useCallback(
    (
      event: React.SyntheticEvent,
      newValue: string | undefined,
      reason: string
    ) => {
      console.log({ newValue, reason, type: event?.type });
      setInputValue(newValue ?? "");
      if (
        onInputChange &&
        event?.type &&
        (event.type === "change" || event.type === "click")
      )
        onInputChange(newValue);
    },
    [onInputChange]
  );

  return (
    <Autocomplete
      disablePortal
      clearOnBlur={false}
      disableCloseOnSelect={disableCloseOnSelect ?? multiple}
      renderInput={(params) => (
        <CommonTextField
          {...params}
          name={name}
          required={required}
          label={label}
          error={Boolean(
            errorText ||
              (formik &&
                name &&
                formik.errors[name] &&
                (formik.errors[name].value ||
                  formik.errors[name].label ||
                  formik.errors[name]))
          )}
          helperText={
            (formik &&
              name &&
              formik.errors[name] &&
              (formik.errors[name].value ||
                formik.errors[name].label ||
                formik.errors[name])) ||
            errorText ||
            helperText
          }
          placeholder={placeholder}
        />
      )}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      value={
        !isUndefined(value)
          ? value
          : formik && name
          ? formik.values[name]
          : null
      }
      onChange={(e, val) => {
        onChange
          ? onChange(val)
          : formik && formik.setFieldValue
          ? formik.setFieldValue(name, val)
          : undefined;
      }}
      fullWidth={fullWidth}
      multiple={multiple}
      isOptionEqualToValue={(option, value) =>
        (!multiple && value !== undefined) ||
        (!multiple && value !== "") ||
        Boolean(multiple && value.value && value.value === option.value)
      }
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          {multiple ? (
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          ) : (
            ""
          )}
          {option.label}
        </li>
      )}
      getOptionLabel={(option) => (option?.label ? option.label : "")}
      filterOptions={isDisabledSearch ? (options) => options : undefined}
      classes={{ popper: styles.popper }}
      {...restProps}
    />
  );
}
