import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State, Review, Offer } from '../types';
import { APIRoute } from '../constants';
import { offersActions } from './slices/offers';
import { commentsActions } from './slices/comments';

export const fetchOffers = createAsyncThunk<
  Offer[],
  undefined,
  { state: State; extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  //другие параметры, кроме api и _arg - getState, dispatch, fulfillWithValue, rejectWithValue
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  // под капотом ф-ция и так обёрнута в try/catch и если get не выполнится, будет rejected
  // try/catch ипользуют, если нужно точечно обработать ошибку
  return data;
});

export const fetchComments = createAsyncThunk<
  Review[],
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchComments', async (id: string, { extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoute.Comments}-${id}.json`);

  return data;
});

export const sendComment = createAsyncThunk<
  Review,
  Review,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/sendComment', async (comment: Review, { extra: api }) => {
  const response = await api.post<Review>(APIRoute.Post, comment);

  return JSON.parse(response.config.data);
});
