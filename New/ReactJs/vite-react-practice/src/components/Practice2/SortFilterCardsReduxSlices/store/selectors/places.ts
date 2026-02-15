import { State } from '../../types/state';

const navsSelector = (state: State) => state.navs;
const placesSelector = (state: State) => state.places;

export { navsSelector, placesSelector };
