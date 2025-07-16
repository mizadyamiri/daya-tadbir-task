"use client";

import { useFormStatus } from "react-dom";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type='submit'
      variant='contained'
      fullWidth
      sx={{ fontSize: 18, mt: 5 }}
    >
      {pending ? <CircularProgress size='30px' /> : `${label}`}
    </Button>
  );
}
