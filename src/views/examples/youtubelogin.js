import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
//import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '610238259195-l3p97soi1ni0tfopmh1rtma2vjbr7s8v.apps.googleusercontent.com';

function youtubeLogin() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);

    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);

  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default youtubeLogin;
