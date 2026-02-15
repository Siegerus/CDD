import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { State, AppDispatch } from './types/store';

const useAppSelector: TypedUseSelectorHook<State> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppSelector, useAppDispatch };
