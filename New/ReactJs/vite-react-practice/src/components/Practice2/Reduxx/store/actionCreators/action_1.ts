import { ACTION_1 } from '../actions/action_1';

function action_1(value: any) {
	return {
		type: ACTION_1,
		payload: value + ' v1',
	};
}

export default action_1;

// actionCreator - ф-ция создания действия
