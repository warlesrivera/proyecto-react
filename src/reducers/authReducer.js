

/*
                                                                       
 @author Ubarles Rivera Galvis  <warelsrivera123@gmail.com> 
 @method authReducer configuracion de las acciones             
*/ 
import { types } from '../types/types';


export const authReducer = ( state = {}, action ) => { // vacio cunado no se esta autenticado

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
                return { }
    
        default:
            return state;
    }

}