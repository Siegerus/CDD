import { createAppAsyncThunk } from '../../hooks/store';
import { Review } from '../../types/types';
import { APIRoute } from '../../constants';

// Тут у createAppAsyncThunk тип для thunkApi не указали, т.к. типизировали всё в файле hooks
export const fetchComments = createAppAsyncThunk<Review[], string>(
  'data/fetchComments',
  async (id: string, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoute.COMMENTS}-${id}.json`);

    return data;
  }
);

export const sendComment = createAppAsyncThunk<Review, Review>(
  'data/sendComment',
  async (comment: Review, { extra: api }) => {
    const response = await api.post<Review>(APIRoute.POST, comment);

    return JSON.parse(response.config.data);
  }
);
