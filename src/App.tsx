import React, {useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import style from './style.module.scss';

const MAPBOX_TOKEN = 'pk.eyJ1IjoieWFzZWVrIiwiYSI6ImNsMWIzeGl2NDA1Yzgzam1odW4xMzAzaDUifQ.1i8HpQRftMU5pYrJEv73Tg';

function App() {
  useEffect(() => {
    const map = L.map('map').setView([48.12, 11.55], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: MAPBOX_TOKEN,
    }).addTo(map);
  }, []);

  return (
    <div className={style.app}>
      <div id={'map'} className={style.map}/>
    </div>
  );
}

export default App;
