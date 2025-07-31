"use client";

import SelectProvince from "@/app/_components/SelectProvince";
import { Control, Path, useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextInput from "./TextInput";
import SelectCity from "./SelectCity";

interface FormValues {
  firstname: string;
  lastname: string;
  mobile: string;
  postalnum: string;
  address: string;
  province: number;
  city: number;
}

export interface FormInputProps {
  name: Path<FormValues>;
  control: Control<FormValues>;
  label: string;
}

const defaultValues = {
  firstname: "",
  lastname: "",
  mobile: "",
  postalnum: "",
  address: "",
  province: 0,
  city: 0,
};

export default function CheckoutForm() {
  const { handleSubmit, control, watch } = useForm<FormValues>({
    defaultValues,
  });

  const provinceId = watch("province");

  return (
    <Paper
      elevation={8}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography variant="h1" fontSize={{ md: 50, xs: 30 }} gutterBottom>
        تکمیل خرید
      </Typography>

      <form onSubmit={handleSubmit(data => console.log(data))}>
        <TextInput name="firstname" label="نام" control={control} />
        <TextInput name="lastname" label="نام خانوادگی" control={control} />
        <TextInput name="mobile" label="موبایل" control={control} />
        <TextInput name="postalnum" label="کد پستی" control={control} />

        <SelectProvince name="province" label="استان" control={control} />
        <SelectCity name="city" label="شهر" control={control} provinceId={provinceId} />

        <TextInput name="address" label="آدرس" control={control} />

        <Button type="submit" variant="contained" fullWidth sx={{ fontSize: 18, mt: 5 }}>
          پرداخت
        </Button>
      </form>
    </Paper>
  );
}
