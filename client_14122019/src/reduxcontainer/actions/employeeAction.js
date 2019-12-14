import * as actionTypes from './actionType';
import axios from 'axios';

const apiUrl = 'http://localhost:5002';
/*
createContact() function returns an object that describes two things.

action type
payload
 */
/*export const createVehicle = (vehicle) => {
    return {
        type: actionTypes.CREATE_NEW_VEHICLE,
        vehicle: vehicle
    }
};*/


export const createEmployee = (employee) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/addEmployee`, employee)
            .then(response => {
                dispatch(createEmployeeSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createEmployeeSuccess =  (data) => {
    return {
        type: actionTypes.CREATE_NEW_EMPLOYEE,
        employee: data
    }
};




export const deleteEmployeeSuccess = (id) => {
    return {
        type: actionTypes.REMOVE_EMPLOYEE,
        id: {
            id
        }
    }
}

export const deleteEmployee = (id) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/deleteEmployee/${id}`)
            .then(response => {
                console.log(response);
                dispatch(deleteEmployeeSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};





/*
export const deleteVehicle = (id) => {
    return {
        type: actionTypes.REMOVE_VEHICLE,
        id: id
    }
}*/
