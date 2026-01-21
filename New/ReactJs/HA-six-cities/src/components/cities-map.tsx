import { useRef } from 'react';
import { LayerGroup, layerGroup } from 'leaflet';
import useMap from '../hooks/useMap';
import { Offer } from '../types';
import { offers } from '../mocks/offers';
import useMapSet from '../hooks/useMapSet';

type CitiesMapProps = {
  currentCity: string;
  activeCard: string;
};

const CitiesMap = (props: CitiesMapProps) => {
  const { currentCity, activeCard } = props;

  const mapRef = useRef(null);
  const currentCityLocatios =
    offers.filter((offer: Offer) => offer.city.name === currentCity) || offers;

  const map = useMap(mapRef, currentCityLocatios[0]);

  const markerLayer = useRef<LayerGroup>(layerGroup());

  useMapSet(
    map,
    currentCityLocatios[0],
    activeCard,
    markerLayer,
    currentCityLocatios
  );

  return <section className="cities__map map" ref={mapRef}></section>;
};

export default CitiesMap;
