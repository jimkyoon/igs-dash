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
  // determine what shows up on right panel
  const [page, setPage] = React.useState('');
  // determine if request is in process
  const [isSending, setIsSending] = React.useState(false);
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

  return (
    <BackgroundDiv>
      <div>Hi</div>
      {/* { user ? <div>Hi</div> : <Login />} */}
      <Login />
      <MainSection page={page} setPage={setPage} />
      { alert.message.length !== 0 ? <AlertBar isError={alert.isError} children={alert.message} /> : null}
    </BackgroundDiv>
  )
};

export default IndexPage;
