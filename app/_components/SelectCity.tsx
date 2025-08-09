import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import allCities from '@/app/_libs/allCities.json';
import { FormInputProps } from './CheckoutForm';
import { Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';

interface PropType extends FormInputProps {
  provinceId: number;
}

export default function SelectCity({ provinceId, name, label, control }: PropType) {
  const selectedProvinceCities = allCities.filter(
    city => city.province_id === provinceId,
  );

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
          <InputLabel id="city">{label}</InputLabel>
          <Select
            id={name}
            label={label}
            value={renderProps.field.value}
            onChange={renderProps.field.onChange}
          >
            {selectedProvinceCities.map(city => (
              <MenuItem key={city.id} value={city.id}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{renderProps.formState.errors[name]?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
