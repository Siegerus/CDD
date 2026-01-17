import React, { useRef, useEffect } from 'react';
import leaflet, { Icon, LayerGroup, layerGroup } from 'leaflet';
import useMap from '../hooks/useMap';
import { Offer } from '../types';
import { offers } from '../mocks/offers';

type CitiesMapProps = {
  filteredByCity: Offer[];
  currentCity: string;
  activeCard: string;
};

const CitiesMap = ({
  filteredByCity,
  currentCity,
  activeCard,
}: CitiesMapProps) => {
  const mapRef = useRef(null);

  const currentCityLocation =
    filteredByCity.filter((offer) => offer.city.name === currentCity)[0] ||
    offers[0];

  const map = useMap(mapRef, currentCityLocation);

  const defaultCustomIcon = new Icon({
    iconUrl: '../../markup/img/pin.svg',
    iconSize: [27, 40],
    iconAnchor: [13, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: '../../markup/img/pin-active.svg',
    iconSize: [27, 40],
    iconAnchor: [13, 40],
  });

  const markerLayer = useRef<LayerGroup>(layerGroup());

  useEffect(() => {
    if (map) {
      map.setView(
        [
          currentCityLocation.location.latitude,
          currentCityLocation.location.longitude,
        ],
        currentCityLocation.city.location.zoom
      );
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [currentCityLocation, map]);

  useEffect(() => {
    if (map) {
      filteredByCity.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === activeCard ? currentCustomIcon : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, currentCityLocation, activeCard]);

  return <section className="cities__map map" ref={mapRef}></section>;
};

export default CitiesMap;
