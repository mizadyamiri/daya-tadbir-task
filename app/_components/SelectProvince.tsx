import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import allProvinces from '@/app/_libs/allProvinces.json';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './CheckoutForm';
import FormHelperText from '@mui/material/FormHelperText';

export default function SelectProvince({ name, label, control }: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: `${label} ضروریست  `, min: 1 }}
      render={renderProps => (
        <FormControl
          fullWidth
          margin="dense"
          variant="outlined"
          error={!!renderProps.fieldState.error}
        >
          <InputLabel id="province">{label}</InputLabel>
          <Select
            id={name}
            label={label}
            value={renderProps.field.value}
            onChange={renderProps.field.onChange}
          >
            {allProvinces.map(province => (
              <MenuItem key={province.id} value={province.id}>
                {province.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{renderProps.formState.errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
