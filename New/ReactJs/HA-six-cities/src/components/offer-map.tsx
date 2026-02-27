import { useRef } from 'react';
import { LayerGroup, layerGroup } from 'leaflet';
import useMap from '../hooks/useMap';
import useMapSet from '../hooks/useMapSet';
import { Offer } from '../types/types';
import { offers } from '../mocks/offers';

type OffermapProps = {
  activeCard: string;
  nearPlaces: Offer[];
};

const Offermap = ({ activeCard, nearPlaces }: OffermapProps) => {
  const mapRef = useRef(null);
  const currentCityLocation = nearPlaces[0] || offers[0];
  const map = useMap(mapRef, currentCityLocation);

  const markerLayer = useRef<LayerGroup>(layerGroup());

  useMapSet(map, currentCityLocation, activeCard, markerLayer, nearPlaces);

  return (
    <section
      className="offer__map map"
      ref={mapRef}
      style={{
        width: '1144px',
        maxWidth: '100%',
        margin: '0 auto',
        marginBottom: '50px',
      }}></section>
  );
};

export default Offermap;
