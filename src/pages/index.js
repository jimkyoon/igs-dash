import * as React from 'react';
// import firebase from 'gatsby-plugin-firebase';
// import { getAuth } from 'firebase/auth';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

// components
import BackgroundDiv from '../components/backgroundDiv';
import Login from '../templates/login';
import MainSection from '../templates/mainSection';
import AlertBar from '../components/alertBar';

const IndexPage = () => {
  // determine if request is in process
  // const [isSending, setIsSending] = React.useState(false);
  // login state to determine which page shows
  // const [
  //   signInWithEmailAndPassword,
  //   user,
  //   loading,
  //   error,
  // ] = useSignInWithEmailAndPassword(firebase.auth.Auth);

  // any errors or success messages
  const [alert, setAlert] = React.useState({
    isError: true,
    message: 'testing', 
  });

  React.useEffect(() => {
    // after component mounts, if message is there, after 5 seconds, disppears
    const timer = setTimeout(() => {
      setAlert({...alert, message: ''})
    }, 5000)
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const user = true;

  return (
    <BackgroundDiv>
      { user ? <MainSection setAlert={setAlert} /> : <Login />}
      { alert.message.length !== 0 ? <AlertBar isError={alert.isError} children={alert.message} /> : null}
    </BackgroundDiv>
  )
};

export default IndexPage;
