import React, { useState, useEffect } from 'react';

import GPlace from './GPlace';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export interface IGPACProps {
  id: string;
  name: string;
  label?: string;
  required: boolean;
  defaultValue: string,
  onChange?: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const loadGoogleMapScript = (callback: () => void) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?places&key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const GooglePlaceAutoComplete = (props: IGPACProps) => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <div className="App">{!loadMap ? <div>Loading...</div> : <GPlace {...props} />}</div>
  );
};

export default GooglePlaceAutoComplete;
