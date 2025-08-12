import { TextField, type TextFieldProps } from "@mui/material"
import { useFormContext, type FieldValues, useController, type UseControllerProps } from "react-hook-form"

type Props<T extends FieldValues> = {} & UseControllerProps<T> & TextFieldProps;

function AppTextInput<T extends FieldValues>({
  control,
  ...props
}: Props<T>) {
  const formContext = useFormContext<T>();
  const effectiveControl = control || formContext.control;

  if (!effectiveControl) {
    throw new Error("Text must be used within a FormProvider or with a control prop.");
  }

  const { field, fieldState } = useController({
    ...props,
    control: effectiveControl,
  });

  return (
    <TextField 
      {...props}
      {...field}
      value={field.value || ""}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      fullWidth
      variant="outlined"
    />
  )
}

export default AppTextInput