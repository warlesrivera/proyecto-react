import { Conexion } from "./conexion";

//api consume guardar imagen 
export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dmojhbfaq/upload';
    
    const formData = new FormData();
    formData.append('upload_preset','proyecto-react');
    formData.append('file', file );

    try {
        const resp = await Conexion(cloudUrl,'POST',formData);
        if (resp) 
            return resp.secure_url;
         else 
            throw await resp.json();
        

    } catch (err) {
        throw err;
    }

    // return url de la imagen
}