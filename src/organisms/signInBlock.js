import * as React from 'react';

// components
import TextInput from '../components/textInput';
import ButtonFilled from '../components/buttonFilled';

const SignInBlock = props => {
  const { email, password, setEmail, setPassword } = props;
  return (
    <div>
      <TextInput 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
      />
      <TextInput 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
      />
      <ButtonFilled>Sign In</ButtonFilled>
    </div>
  )
};

export default SignInBlock;
