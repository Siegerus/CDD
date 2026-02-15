import { useRef } from 'react';
import { LayerGroup, layerGroup } from 'leaflet';
import useMap from '../hooks/useMap';
import { Offer } from '../types';
import useMapSet from '../hooks/useMapSet';

type CitiesMapProps = {
  offers: Offer[];
  currentCity: string;
  activeCard: string;
};

const CitiesMap = (props: CitiesMapProps) => {
  const { currentCity, activeCard, offers } = props;

  const mapRef = useRef(null);
  const currentCityLocations =
    offers.filter((offer: Offer) => offer.city.name === currentCity) || offers;

  const map = useMap(mapRef, currentCityLocations[0]);

  const markerLayer = useRef<LayerGroup>(layerGroup());

  useMapSet(
    map,
    currentCityLocations[0],
    activeCard,
    markerLayer,
    currentCityLocations
  );

  return <section className="cities__map map" ref={mapRef}></section>;
};

export default CitiesMap;
