"use client"

import * as L from 'leaflet'
import { Marker, useMapEvent } from 'react-leaflet'
import carIcon from "../../../public/topview_car_wagon.png";
import { useState } from 'react'
import getCarPosition from '../../mockApi'

export function CarMarker() {

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

export default CarMarker
