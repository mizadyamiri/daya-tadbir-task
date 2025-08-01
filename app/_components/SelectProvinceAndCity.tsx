import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import allProvinces from '@/app/_libs/allProvinces.json';
import allCities from '@/app/_libs/allCities.json';

export default function SelectProvinceAndCity() {
  const [provinceId, setProvinceId] = useState<string>('');
  const [cityId, setCityId] = useState<string>('');

  const selectedProvinceCities = allCities.filter(
    city => city.province_id.toString() === provinceId,
  );

  return (
    <>
      <FormControl fullWidth margin="dense" variant="outlined" required>
        <InputLabel id="province">استان</InputLabel>
        <Select
          id="province"
          label="استان"
          value={provinceId}
          onChange={e => setProvinceId(String(e.target.value))}
        >
          {allProvinces.map(province => (
            <MenuItem key={province.id} value={province.id}>
              {province.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="dense" variant="outlined" required>
        <InputLabel id="city">شهرستان</InputLabel>
        <Select
          id="city"
          label="شهرستان"
          value={cityId}
          onChange={e => setCityId(String(e.target.value))}
        >
          {selectedProvinceCities.map(city => (
            <MenuItem key={city.id} value={city.id}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
