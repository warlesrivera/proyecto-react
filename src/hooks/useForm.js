
/*                                                       
  @author Ubarles Rivera Galvis  <warelsrivera123@gmail.com>
  @method useForm hooks manejo para formularios accion           
*/ 

import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => {
        setValues( newFormState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}