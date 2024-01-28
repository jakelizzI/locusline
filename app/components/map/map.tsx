"use client"

import { MapContainer, TileLayer } from 'react-leaflet'
import { CarMarker } from '../marker'
import "leaflet/dist/leaflet.css"
import "./map.css"
import L from "leaflet"

function Map() {

  const center: L.LatLngExpression = [35.68131,139.76716]
  
  return (
    <MapContainer className='map-container' center={center} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CarMarker />
    </MapContainer>
  )
}

export default Map
