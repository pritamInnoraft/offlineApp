import { DEFAULT, FETCH_NEWS, FETCH_NEWS_SUCCESS } from './types'
import axios from 'axios'

export const defaultAction = () => {
  return {
    type: DEFAULT,
    data: 'Pritam'
  }
}

export const fetchNews = () => {
  return (dispatch, getState) => {
    return axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=tech&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`
    })
      .then(response => {
        dispatch(newsFetchSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
}


export const newsFetchSuccess = (data) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    data
  }
}
