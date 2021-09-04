import * as React from 'react';

import SignInBlock from '../organisms/signInBlock';

const Login = props => {
  const { setAuthenticated } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return <SignInBlock 
            email={email} 
            password={password} 
            setEmail={setEmail} 
            setPassword={setPassword} 
          />;
}

export default Login;
