import { actions } from './actions';
import { actionTypes } from './actionsTypes';

const fetchFilmsMiddleware = ({dispatch, getState}) => next => action => {
    if (action.type === actionTypes.FETCH_FILMS){
        fetch('http://localhost:5000/api/films')
            .then(res => res.json())
            .then(response => {
                response.forEach(film => {
                    dispatch(actions.addFilm(film));
                }); 
            })
            .catch(console.error)
    }
    next(action)

};

export default [fetchFilmsMiddleware];