"use client"

import { MapContainer, TileLayer, Marker, useMapEvent } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./map.css"
import L from "leaflet"
import carIcon from "../../../public/topview_car_wagon.png";
import { useState } from 'react'
import getCarPosition from '../../mockApi'

function CarMarker() {

  const [position, setPosition] = useState<L.LatLngExpression>([35.68131,139.76716])

  const ic = L.icon({
    iconUrl: carIcon.src,
    iconSize: [56.7, 80],
    iconAnchor: [28, 40]
  })

  useMapEvent('click', async () => {
    const carPosition = await getCarPosition()
    setPosition([carPosition.lat, carPosition.lng])
  })

  return (
    <Marker position={position} icon={ic} />
  )
}

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
