import * as React from "react";
import Birthday from './../birthday/Birthday';

function HomePage() {

  const [isPasswordCorrect, setIsPasswordCorrect] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');


  function submitPassword() {
    if (password === 'dheraidheraimaya'){
      setIsPasswordCorrect(true)
      setPasswordError('')
    } else {
      setIsPasswordCorrect(false)
      setPasswordError('Wrong Password')
    }
  }

  return (
    <div>
      {isPasswordCorrect ?
        <Birthday />
      :
      <div style={{marginTop: 100}}>
        <h3>
          If you are her, please enter the password.
          Else this is not for you.
        </h3>
        <input name='password' id='password' type='password' placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type='submit' onClick={submitPassword}>Submit</button>
        <div>
          <h3>{passwordError}</h3>
        </div>
      </div>
      }
    </div>
    )
}

export default HomePage;
