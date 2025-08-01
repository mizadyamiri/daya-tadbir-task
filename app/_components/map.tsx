import Box from '@mui/material/Box';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { FormInputProps } from './CheckoutForm';
import { Controller } from 'react-hook-form';
import { LatLngExpression } from 'leaflet';

export default function Map({ name, control }: FormInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      // rules={{ required: true, }}
      render={renderProps => (
        <Box
          sx={{
            width: '100%',
            height: 200,
            border: 1,
            borderRadius: 1,
            borderColor: 'grey.500',
            mt: 1,
            bgcolor: 'tomato',
          }}
        >
          <MapContainer
            center={[35.71, 51.4]}
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: '100%' }}
            attributionControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <LocationMarker
              position={renderProps.field.value as LatLngExpression}
              setPosition={renderProps.field.onChange}
            />
          </MapContainer>
        </Box>
      )}
    />
  );
}

function LocationMarker({
  position,
  setPosition,
}: {
  position: LatLngExpression;
  setPosition: (latlg: LatLngExpression) => void;
}) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>موقعیت شما</Popup>
    </Marker>
  );
}
