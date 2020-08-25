export const signIn = (credentials) => (dispatch, _, getFirebase) => {
    const firebase = getFirebase();

    firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        })
        .catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', payload: err });
        });
};

export const signOut = () => (dispatch, _, getFirebase) => {
    const firebase = getFirebase();

    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        });
};