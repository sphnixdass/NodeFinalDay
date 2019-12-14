import * as actionTypes from '../actions/actionType';
/*
we have not mutated the state directly instead we have returned a new state.
 */
export default (state = [], action) => {
    switch (action.type){

        case actionTypes.CREATE_NEW_EMPLOYEE:
            return [
                ...state,
                Object.assign({}, action.employee)
            ];
        case actionTypes.REMOVE_EMPLOYEE:
            return state.filter((data) => data.regNo === action.id);
        default:
            return state;
    }

};
