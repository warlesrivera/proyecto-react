import { Conexion } from "./conexion";

export const loadUser = async (  ) => {

    try {
        const resp = await Conexion('http://localhost:3000/userJson','GET');
        if ( resp ) 
            return resp;
        else 
            throw await resp.json();
    } catch (err) {
        throw err;
    }
    
}



