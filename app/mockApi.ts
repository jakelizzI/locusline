export type CarPosition = Position

export type Position = {
  lat: number,
  lng: number
}

const CENTER = { lat: 35.68131, lng: 139.76716}
export default async function getCarPosition(): Promise<CarPosition> {

  const rand = Math.random() / 100;
  const newLat = CENTER.lat - rand;
  const newLng = CENTER.lng - rand;
  return {
    lat: newLat,
    lng: newLng
  };
}
