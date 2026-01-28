import store from '../store/store';

// Создаём превдоним типа для хранилища. (с ReturnType помощью получаем тип, которы будет результатом вызова ф-ции "store.getState()")
export type State = ReturnType<typeof store.getState>;

// Псевдоним типа диспатча
export type AppDispatch = typeof store.dispatch;
