import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { types } from '../types/types';
import { loadUser } from '../helpers/loadUser';

export const startUser = (user) => {

   
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        delete user.password2;

        const doc = await db.collection(`${ uid }/journal/user`).add( user );

        dispatch( activeUSer( doc.id, user ) );
        dispatch( addNewUser( doc.id, user ) );

    }
}

export const activeUSer = ( id, user ) => ({
    type: types.usersActive,
    payload: {
        id,
        ...user
    }
});

export const addNewUser = ( id, user ) => ({
    type: types.usersAddNew,
    payload: {
        id, ...user
    }
})

export const startLoadingUser = ( uid ) => {
    return async( dispatch ) => {
        const user = await loadUser( uid );
        dispatch( setUser( user ) );
    }
}

export const setUser = ( users ) => ({
    type: types.userLoad,
    payload: users
});

export const startSaveUser = ( user ) => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        const userToFirestore = { ...user };
        delete userToFirestore.id; //si llega id eliminarlo del clon de notas 

        await db.doc(`${ uid }/journal/users/${ user.id }`).update( userToFirestore );
        dispatch( refreshUser( user.id, userToFirestore ) );
        Swal.fire('Saved', user.name, 'success');
    }
}

export const refreshUser = ( id, user ) => ({
    type: types.usersUpdated,
    payload: {
        id,
        note: {
            id,
            ...user
        }
    }
});

export const startDeletingUser = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/journal/user/${ id }`).delete();

        dispatch( deleteUser(id) );

    }
}

export const deleteUser = (id) => ({
    type: types.usersDelete,
    payload: id
});


export const UserLogout = () => ({
    type: types.usersLogoutCleaning
});
