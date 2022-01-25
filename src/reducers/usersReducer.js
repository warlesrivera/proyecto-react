/*
    {
        users: [],
        active: null,
        active: {
            id: 'KASKLDJALKSDJ129387123',
            title: '',
            body: '',
            imageUrl: '',
            date: 12387612387126
        }
    }
*/

import { types } from '../types/types';

const initialState = {
    users: [],
    active: null
}


export const usersReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.userActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        case  types.userAddNew:
            return {
                ...state,
                users: [ action.payload, ...state.users ]
            }

        case types.userLoad:
            return {
                ...state,
                users: [ ...action.payload ]
            }
    
        case types.userUpdated:
            return {
                ...state,
                users: state.users.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.userDelete:
            return {
                ...state,
                active: null,
                users: state.users.filter( note => note.id !== action.payload )
            } 

        case types.userLogoutCleaning:
            return {
                ...state,
                active: null,
                users: []
            }

        default:
            return state
    }


}