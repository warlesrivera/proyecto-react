export const Conexion = async ( url,type, data=null ) => {
    try {
        const resp = await fetch( url, {
            method: type,
            body: (data)&&data
        });

        if ( resp.ok ) {
            return await resp.json();
        } else {
            throw await resp.json();
        }
    }
    catch(err){
        throw err;
    }

}