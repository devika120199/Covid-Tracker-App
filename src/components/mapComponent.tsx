import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import { CovidData } from '../types';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { stateCoordinates } from '../utils/mockData';
interface MapViewProps {
  data: CovidData[];
  selectedState: string | null;
}

const MapView: React.FC<MapViewProps> = ({ data, selectedState }) => {
  
  const center: LatLngExpression = [20.5937, 78.9629]; // Center of India

  return (
    <MapContainer center={center} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((item) => {
        const coordinates = stateCoordinates[item.state];
        if (!coordinates) return null;

        const radius = Math.sqrt(item.totalCases) / 50;
        const color = selectedState === item.state ? '#FF0000' : '#3388ff';

        return (
          <CircleMarker
            key={item.state}
            center={coordinates}
            radius={radius}
            fillColor={color}
            color={color}
            weight={1}
            opacity={0.8}
            fillOpacity={0.5}
          >
            <Tooltip>
              <h3>{item.state}</h3>
              <p>Total Cases: {item.totalCases.toLocaleString()}</p>
              <p>Active Cases: {item.activeCases.toLocaleString()}</p>
              <p>Recovered: {item.recovered.toLocaleString()}</p>
              <p>Deaths: {item.deaths.toLocaleString()}</p>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;