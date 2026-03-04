import { State } from '../../types/state';

type Selector = keyof State;

const navsSelector = (state: State) => state.navs;
const placesSelector = (state: State) => state.places;

export { navsSelector, placesSelector };
