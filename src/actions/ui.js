
/*
           
     dispatch de ui acciones                                                                                
@author Ubarles Rivera Galvis  <warelsrivera123@gmail.com>      
     
@method setError        
@method removeError                                                 
@method startLoading                      
@method finishLoading                                                           
                                                           
*/ 

import { types } from '../types/types';

export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
});
export const removeError = () => ({
    type: types.uiRemoveError
});
export const startLoading = () => ({
    type: types.uiStartLoading
})
export const finishLoading = () => ({
    type: types.uiFinishLoading
})

