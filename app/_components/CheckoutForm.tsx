'use client';

import { Control, Path, useForm } from 'react-hook-form';
import SelectProvince from '@/app/_components/SelectProvince';
import SelectCity from './SelectCity';
import Map from './map';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextInput from './TextInput';
import { CacheProvider } from '@emotion/react';
import { rtlCache } from '../_libs/utiles';

interface FormValues {
  firstname: string;
  lastname: string;
  mobile: string;
  postalnum: string;
  address: string;
  province: number | '';
  city: number | '';
  coords: object;
}

export interface FormInputProps {
  name: Path<FormValues>;
  control: Control<FormValues>;
  label: string;
}

const defaultValues: FormValues = {
  firstname: '',
  lastname: '',
  mobile: '',
  postalnum: '',
  address: '',
  province: '',
  city: '',
  coords: [35.71, 51.4],
};

export default function CheckoutForm() {
  const { handleSubmit, control, watch, reset } = useForm<FormValues>({
    defaultValues,
  });
  const provinceId = watch('province');

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <CacheProvider value={rtlCache}>
      <Paper
        elevation={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }}
      >
        <Typography variant="h1" fontSize={{ md: 50, xs: 30 }} gutterBottom>
          تکمیل خرید
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput name="firstname" label="نام" control={control} />
          <TextInput name="lastname" label="نام خانوادگی" control={control} />
          <TextInput name="mobile" label="موبایل" control={control} />
          <TextInput name="postalnum" label="کد پستی" control={control} />
          <SelectProvince name="province" label="استان" control={control} />
          <SelectCity
            name="city"
            label="شهر"
            control={control}
            provinceId={provinceId as number}
          />
          <TextInput name="address" label="آدرس" control={control} />
          <Map name="coords" label="نقشه" control={control} />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ fontSize: 18, mt: 5 }}
          >
            پرداخت
          </Button>
        </form>
      </Paper>
    </CacheProvider>
  );
}
