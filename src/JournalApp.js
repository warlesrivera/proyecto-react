import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';
import Layout from './components/layout'
/*
   provaider comparte informacion a toda la aplicacion
*/ 
export const JournalApp = () => {
    //provider component que contiene toa la infomracion de la aplicacion
    return (
        <Provider store={ store }> 
            <AppRouter/>
        </Provider>
    )
}
