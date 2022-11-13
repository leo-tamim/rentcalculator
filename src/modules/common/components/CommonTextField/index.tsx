import { KEY_INPUT_VARIANT } from "@/config/keys";
import isUndefined from "@/utils/isUndefined";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export type ICommonTextField = TextFieldProps & {
  formik?: any;
  errorText?: string;
  InputLabelProps?: Object;
  size?: string;
  focused?: Boolean;
  color?: String;
  InputProps?: any;
};

export default function CommonTextField({
  variant = KEY_INPUT_VARIANT,
  name,
  formik,
  errorText,
  helperText,
  label,
  onChange,
  value,
  fullWidth = true,
  rows,
  multiline,
  InputLabelProps,
  size,
  color,
  focused,
  InputProps,
  ...restProps
}: ICommonTextField) {
  return (
    <TextField
      name={name}
      id={name}
      multiline={multiline}
      label={label}
      variant={variant}
      size={size}
      focused={focused}
      color={color}
      rows={multiline && !rows ? 3 : rows}
      error={Boolean(
        errorText || (formik && name && Boolean(formik.errors[name]))
      )}
      helperText={
        (formik && name && formik.errors[name]) || errorText || helperText
      }
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
      value={
        !isUndefined(value)
          ? value
          : formik && name
          ? formik.values[name]
          : undefined
      }
      onChange={
        onChange
          ? onChange
          : formik && formik.handleChange
          ? formik.handleChange
          : undefined
      }
      fullWidth={fullWidth}
      {...restProps}
    />
  );
}
