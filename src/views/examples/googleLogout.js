import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '610238259195-l3p97soi1ni0tfopmh1rtma2vjbr7s8v.apps.googleusercontent.com';

function googleLogout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    window.location="/tiktoktrends";
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        // buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={renderProps => (
          <a onClick={renderProps.onClick} style={{color : "black", backgroundColor: "transparent", marginLeft: "10px", borderRadius: "20px"}}> Logout ⚡️</a>
        )}
      ></GoogleLogout>
    </div>
  );
}

export default googleLogout;
