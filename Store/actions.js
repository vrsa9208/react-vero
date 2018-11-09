import {actionTypes} from './actionsTypes';

export const actions = {
    addFilm: film => ({type: actionTypes.ADD_FILM, payload:{film}}),
    fetchFilms: () => ({type: actionTypes.FETCH_FILMS}),
    setSelectedDate: date => ({type: actionTypes.SET_SELECTED_DATE, payload:{date}}),
    setSelectedFilm: film => ({ type: actionTypes.SET_SELECTED_FILM, payload:{film}}),
    showFilmDetails: () => ({type: actionTypes.SHOW_FILM_DETAILS}),
    hideFilmDetails: () => ({type: actionTypes.HIDE_FILM_DETAILS}),
}