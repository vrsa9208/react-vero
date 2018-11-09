import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers';
import middlewares from './middleware';

const initialState = {
    films:[],
    selected_date: new Date(),
    selected_film: {},
    showFilmDetails: false,
};

export const store = createStore(reducer, initialState, applyMiddleware(...middlewares));