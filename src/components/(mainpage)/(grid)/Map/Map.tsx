
import maplibregl = require('maplibre-gl');
import React, { useEffect, useRef } from 'react';
import './Map.css';
import { Map } from 'maplibre-gl';

const MapInv = ({ mapIsReadyCallback }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    // This API key is for use only in stackblitz.com
    // Get your Geoapify API key on https://www.geoapify.com/get-started-with-maps-api
    // The Geoapify service is free for small projects and the development phase.
    const myAPIKey = '6bf6dd42bb874f30b3d13d5924f5afc5';
    const mapStyle =
      'https://maps.geoapify.com/v1/styles/dark-matter/style.json';

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4,
    };

    const map = new Map({
      container: mapContainer.current!,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    mapIsReadyCallback(map);
  }, [mapContainer.current]);

  return <div className="map-container" ref={mapContainer}></div>;
};

export default MapInv;
