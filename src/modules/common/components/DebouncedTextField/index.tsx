import React, { useEffect, useRef, useState } from "react";
import CommonTextField, { ICommonTextField } from "../CommonTextField";

type DebouncedTextFieldProps = Omit<ICommonTextField, "onChange" | "value"> & {
  onChange: (value: string) => void;
  value?: string;
};

/**
 * This component will wait for the user's typing
 * then should invoke the onChange()
 */
export default function DebouncedTextField({
  value,
  onChange,
  ...restProps
}: DebouncedTextFieldProps) {
  const [localValue, setLocalValue] = useState<string>(value ?? "");
  const debounce = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (debounce.current) clearTimeout(debounce.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value);

    if (debounce.current) clearTimeout(debounce.current);

    debounce.current = setTimeout(() => {
      if (onChange) onChange(event.target.value);
    }, 800);
  };

  return (
    <CommonTextField
      value={localValue}
      onChange={handleChange}
      {...restProps}
    />
  );
}
