
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT'

import { firebase, googleAuthProvider } from '../../firebase/index'

export const register = (email, password, username) => {
    return (dispatch) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then( async ({user}) => {
            // console.log(user, 'este es linea 13 acti-auth')
           await user.updateProfile({displayName: username})
           dispatch(login(user.uid, user.displayName ))
          });
    };
  };

  export const googleLogin = () => {
    return (dispatch) => {
      firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(( dataUser ) => {
          // console.log(dataUser.additionalUserInfo.profile, "este si es")
          dispatch(login(dataUser.additionalUserInfo.profile.id, dataUser.additionalUserInfo.profile.name));
        });
    };
  };
  

  export const emailAndPasswordLogin = (email, password) => {
    return (dispatch) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
          //  console.log(user ,"emailandpassword21action")
           dispatch(login(user.uid, user.displayName ))
          });
    };
  }
  


export const login = (uid, displayName) => {
    return {
      type: LOG_IN,
      payload: { uid, displayName, },
    };
  };
  
export const logout = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch({ type: LOG_OUT })
    }
  }