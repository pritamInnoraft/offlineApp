import { DEFAULT, FETCH_NEWS_SUCCESS } from "./types";

export const initialState = {
  msg : '',
  news: null
};

export function defaultReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT:
      return {...state, msg: 'Reducer called'}
    case FETCH_NEWS_SUCCESS:
      return {...state, news: action.data.articles}
    default:
      return state;
  }
}