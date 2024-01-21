"use client"

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./map.css"
import L from "leaflet"
import carIcon from "../../../public/topview_car_wagon.png";

function Map() {

  const center: L.LatLngExpression = [35.68131, 139.76716];

  const ic = L.icon({
    iconUrl: carIcon.src,
    iconSize: [56.7, 80],
    iconAnchor: [28, 40]
  })
  
  return (
    <MapContainer className='map-container' center={center} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={ic} />
    </MapContainer>
  )
}

export default Map
