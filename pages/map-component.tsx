
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import React, { useEffect, useRef } from 'react'


function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  }, []);

  return (
    <div ref={ref} id="map" className='w-screen h-screen' />
  )
}

export default function Home() {
  return (
    <div>
      <Wrapper
        apiKey={String(process.env.NEXT_PUBLIC_GMAPS_API_KEY)}
        render={(status) => {
          if (status == Status.SUCCESS) {
            return (
              <MyMapComponent
                center={{ lat: 10, lng: 10 }}
                zoom={12}
              />
            )
          } else {
            return (
              <div>
                Loading...
              </div>
            )
          }
        }}
      />
    </div>
  )
}
