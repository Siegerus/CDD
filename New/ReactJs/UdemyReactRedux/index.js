import store from './redux/store.js';
import { addCurrentTime, clearTimes } from './redux/actionCreators.js';

const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const clearBtn = document.getElementById('clearBtn')

addBtn.addEventListener('click', () => {
    store.dispatch(addCurrentTime());
});

store.subscribe(() => {
    list.innerHTML = '';
    store.getState().forEach((item) => {
        let li = document.createElement('li');
        li.innerHTML = item;
        list.append(li);
    });
});

clearBtn.addEventListener('click', () => {
        store.dispatch(clearTimes());
});

// const unsubscribe = store.subscribe(() => console.log('store changed! ' + store.getState())); //  Подписка на изменение состояния.Ф-ия в свою очередь возвращает отписку

// store.dispatch({
//     type: 'ADD_CURRENT_TIME,'
//     payload: new Date()/* '11:30:00' */
// });
// /* unsubscribe(); */ // Отписка от изменения состояния

// store.dispatch({
//     type: 'CLEAR_ALL_TIMES',
// });



