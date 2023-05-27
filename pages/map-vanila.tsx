import Script from 'next/script';
import React, { useEffect, useRef } from 'react'
declare global {
    interface Window { initMap: Function }
}


export default function GMapsVanila() {
    const refMap = useRef(null)


    useEffect(() => {
        if ((typeof window) != 'undefined') {
            window.initMap = () => {
                if (refMap.current) {
                    new google.maps.Map((refMap.current), {
                        zoom: 1,
                        center: { lat: -34.397, lng: 150.644 }
                    });
                }
            }
        }
    }, [refMap])


    return (
        <>
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GMAPS_API_KEY}&callback=initMap&v=weekly`}
                defer
            />
            <div
                className='h-screen w-screen'
                ref={refMap}
            />
        </>
    )
}