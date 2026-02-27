import { MutableRefObject, useEffect } from 'react';
import leaflet, { Map, LayerGroup } from 'leaflet';
import { Offer } from '../types/types';
import { CURRENT_CUSTOM_ICON, DEFAULT_CUSTOM_ICON } from '../constants';

export default function useMapSet(
  map: Map | null,
  currentCityLocation: Offer,
  activeCard: string,
  markerLayer: MutableRefObject<LayerGroup<any>>,
  offers: Offer[]
) {
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
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === activeCard
                  ? CURRENT_CUSTOM_ICON
                  : DEFAULT_CUSTOM_ICON,
            }
          )
          .addTo(markerLayer.current);
      });
    }
  }, [map, currentCityLocation, activeCard]);
}
