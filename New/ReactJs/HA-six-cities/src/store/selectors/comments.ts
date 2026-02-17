import { State } from '../../types';

const selectComments = (state: State) => state.comments.comments;

export { selectComments };
