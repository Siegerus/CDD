import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { State, Offer } from '../../types/types';
import { APIRoute } from '../../constants';

export const fetchOffers = createAsyncThunk<
  Offer[], // тип возвращаемого значения
  undefined, // тип для параметра _arg
  { state: State; extra: AxiosInstance } // тип для thunkApi его можно типизировать отдельно (в файле hooks)
>('data/fetchOffers', async (_arg, { extra: api }) => {
  //другие параметры, кроме api и _arg - getState, dispatch, fulfillWithValue, rejectWithValue
  const { data } = await api.get<Offer[]>(APIRoute.OFFERS);
  // под капотом ф-ция и так обёрнута в try/catch и если get не выполнится, будет rejected
  // try/catch ипользуют, если нужно точечно обработать ошибку
  return data;
});
