import { useMemo } from 'react';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

// Ниже кастомный хук с типизацией, который используем вместо useAppDispatch
export const useActionCreators = <Actions extends ActionCreatorsMapObject>(
	actions: Actions
): BoundActions<Actions> => {
	const dispatch = useAppDispatch();
	return useMemo(() => bindActionCreators(actions, dispatch), []);
};
// типизация для Thunkов
type BoundActions<Actions extends ActionCreatorsMapObject> = {
	[key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
		? BoundAsyncThunk<Actions[key]>
		: Actions[key];
};

type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
	...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;

// типизация параметров Thunkов
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: State;
}>();
