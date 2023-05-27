
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react'

export default function GMapsFunctional() {
  const refMap = useRef(null)
  const refUserLocation = useRef(null)


  const initMyMap = () => {
    new Loader({
      apiKey: String(process.env.NEXT_PUBLIC_GMAPS_API_KEY),
      version: "weekly",
    }).load().then(() => {
      // init map
      if (refMap.current) {
        new google.maps.Map(refMap.current, {
          zoom: 1,
          center: { lat: -34.397, lng: 150.644 }
          // mapTypeId: 'satellite'
        });
      }
    })
  }

  useEffect(() => {
    initMyMap()
  }, [])



  return (
    <div>
      <div
        className='h-screen w-screen'
        ref={refMap}
      />
    </div>
  )
}
