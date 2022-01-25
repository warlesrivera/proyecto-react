
/*
        
    mapeo de redux  switcheo                                         
                                                                                        
    @author Ubarles Rivera Galvis  <warelsrivera123@gmail.com>      
    
    @method store creador de reducers                               
    
    @method combineReducers como el store solo recive un reducer   
    en este metodo agregamos todos las acciones  aqui se         
      visualizara  la estructura de la apliccion                 
                                                                

*/ 

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //llamado de thunk middleware

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';
import { usersReducer } from '../reducers/usersReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //config dev tools middleware

const reducers = combineReducers({ //combinacion de varios reducers
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
    users: usersReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk ) //llamado del Widdleware
    )
);