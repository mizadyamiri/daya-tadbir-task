import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormInputProps } from './CheckoutForm';

export default function TextInput({ name, label, control }: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={renderProps => (
        <TextField
          id={name}
          label={label}
          variant="outlined"
          type="text"
          fullWidth
          margin="dense"
          value={renderProps.field.value}
          onChange={renderProps.field.onChange}
          error={!!renderProps.fieldState.error}
          helperText={renderProps.fieldState.error?.message ?? null}
        />
      )}
    />
  );
}
