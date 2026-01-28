import store from './store/store';
import action_1 from './store/actionCreators/action_1';
import action_2 from './store/actionCreators/action_2';

type Props = {};

const ReduxComponent = (props: Props) => {
	// Диспатчим действие (процесс происходит через редюсер)
	// store.dispatch(action_1('myValue'));
	// console.log(store.getState()); // так получаем доступ к значениям store
	store.subscribe(() => console.log(store.getState())); // а так каждый при изменении в store, будет вызываться ф-ия внутри метода "subscribe"

	return (
		<>
			<button onClick={() => store.dispatch(action_1(['myValueChanged']))}>
				Click1
			</button>
			<button onClick={() => store.dispatch(action_2(['myValueChanged']))}>
				Click2
			</button>
			<p>ReduxComponent</p>
			{/* <p>{store.getState().value}</p> */}
		</>
	);
};

export default ReduxComponent;
