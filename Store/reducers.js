import { actionTypes } from './actionsTypes';

export const reducer = (state, action) => {
    if (!action) return state;

    switch(action.type){
        case actionTypes.ADD_FILM:
            return{...state, films: [...state.films, action.payload.film]};
        case actionTypes.SET_SELECTED_DATE:
            console.log("reducer date", action.payload.date);
            return{...state, selected_date: action.payload.date};
        case actionTypes.SET_SELECTED_FILM:
            return{...state, selected_film: action.payload.film};
        case actionTypes.SHOW_FILM_DETAILS:
            return {...state, showFilmDetails: true}
            case actionTypes.HIDE_FILM_DETAILS:
            return {...state, showFilmDetails: false}
        default:
            return state;
    }
    
};

