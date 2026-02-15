import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State, Review, Offer } from '../types';
import { APIRoute } from '../constants';
import { offersActions } from './slices/offers';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(offersActions.setLoadingStatus(false));
  dispatch(offersActions.getOffers(data));
});

export const fetchComments = createAsyncThunk<
  void,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchComments', async (id: string, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}-${id}.json`);
    dispatch(offersActions.getComments(data));
  } catch (error) {
    dispatch(offersActions.getComments([]));
  }
});

export const sendComment = createAsyncThunk<
  void,
  Review,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/sendComment', async (comment: Review, { dispatch, extra: api }) => {
  try {
    const resp = await api.post(APIRoute.Post, comment);
    dispatch(offersActions.postComment(comment));
  } catch (error) {
    console.log(error);
  }
});
