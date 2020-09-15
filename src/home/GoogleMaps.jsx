import React, {useEffect, useRef} from 'react';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const myLocation = {
    lat: 34.1131834,
    lng: -83.5836865
}

const GoogleMaps = () => {

  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  const createGoogleMap = () => {
      return new window.google.maps.Map(googleMapRef.current, {
          zoom: 15,
          center: {
              lat: myLocation.lat,
              lng: myLocation.lng
          }
      });
  }

  const createMarker = () => {
    return new window.google.maps.Marker({
        position: {
            lat: myLocation.lat,
            lng: myLocation.lng
        },
        map: googleMap.current,
    }
    );
  }

  useEffect(() => {

    const scriptElement = document.getElementById("googleMapScript");

    if (scriptElement !== null) {
      scriptElement.remove();
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.setAttribute("id", "googleMapScript");
    googleMapScript.src = `https://maps.googleapis.com/maps/api` 
    + `/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
        googleMap.current = createGoogleMap();
        marker.current = createMarker();
    })
  });
  

  return (
    <div className="map paper">
      <div id="google-map" ref={googleMapRef}> </div>
      <p>50 Professional Drive, Jefferson, GA 30549</p>
    </div>
  );
}

export default GoogleMaps;
