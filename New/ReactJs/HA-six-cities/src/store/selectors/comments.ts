import { State } from '../../types/types';

const selectComments = (state: Pick<State, 'comments'>) =>
  state.comments.comments;

export { selectComments };
