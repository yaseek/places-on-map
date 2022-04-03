import React, {useEffect, useLayoutEffect, useRef, useState, useMemo, useCallback, MouseEventHandler} from 'react';
import { renderToString } from 'react-dom/server';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TPoint} from '../types';
import style from './map.module.scss';
import PopupContent from './PopupContent';

const MAPBOX_TOKEN = 'pk.eyJ1IjoieWFzZWVrIiwiYSI6ImNsMWIzeGl2NDA1Yzgzam1odW4xMzAzaDUifQ.1i8HpQRftMU5pYrJEv73Tg';

const Map = ({ points }: { points: TPoint[] }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const markerIcon = useMemo(() => L.divIcon({ className: style.marker }), []);

  const enterFullScreenMode = useCallback<MouseEventHandler>(() => {
    mapRef.current?.requestFullscreen();
  }, []);

  useLayoutEffect(() => {
    if (mapRef.current && !map) {
      setMap(L.map(mapRef.current));
    }
    map?.setView([48.12, 11.55], 12)
  }, [map]);

  useEffect(() => {
    if (!map) {
      return;
    }
    console.log('MMM', mapRef.current);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: MAPBOX_TOKEN,
    }).addTo(map);

    L.control.scale().addTo(map);
  }, [map]);

  useEffect(() => {
    if (!map || !points.length) {
      return;
    }

    points.forEach((point) => {
      const { latitude, longitude, name } = point;
      L.marker([latitude, longitude], { icon: markerIcon })
        .bindTooltip(name)
        .bindPopup(renderToString(<PopupContent {...point}/>))
        .addTo(map);
    });
  }, [map, markerIcon, points]);

  return (
    <div className={style.container}>
      <div ref={mapRef} className={style.map}/>
      <button type="button" style={{ display: 'contents', cursor: 'pointer' }} onClick={enterFullScreenMode} title="Full Screen mode">
        <div className={style.fullScreenButton}>[&nbsp;&nbsp;&nbsp;]</div>
      </button>
    </div>
  );
}

export default Map;
