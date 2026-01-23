import { ACTION_2 } from '../actions/action_2';

function action_2(value: any) {
	return {
		type: ACTION_2,
		payload: value + ' v2', // payload - "полезная нагрузка" значением будет то, что передаём в параметр в параметр "value"
	};
}

export default action_2;

// actionCreator - ф-ция создания действия
