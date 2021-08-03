import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '610238259195-l3p97soi1ni0tfopmh1rtma2vjbr7s8v.apps.googleusercontent.com';
{/*
  const handleLogin = async googleData => {
      const res = await fetch("/api/v1/auth/google", {
          method: "POST",
          body: JSON.stringify({
          token: googleData.tokenId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      // store returned user somehow
    } */}

function googleLogin() {
  const onSuccess = (res) => {
    var profileObj = res.profileObj;
    profileObj.tokenID = res.tokenId;

    fetch('http://localhost:5100/api/users/googleLogin', {
      method: 'post',
      body: JSON.stringify(profileObj),
      headers: {'Content-Type': 'application/json'}
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == true) {
          localStorage.setItem("reveleUserID", responseJson.userID);
          localStorage.setItem("reveleAccessToken", responseJson.accessToken);
          localStorage.setItem("reveleUser", JSON.stringify(res.profileObj));
          localStorage.setItem('isPaidUser', responseJson.isPaidUser);
          window.location.href = "admin/index";
        } else {
          // alert("There is some issue in Google Login at this time. Please try again later.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
        render={renderProps => (
          <button onClick={renderProps.onClick} className="btn" style={{color : "rgb(255, 255, 255)", backgroundColor: "rgb(80, 80, 80)", marginLeft: "10px", borderRadius: "20px"}}> Login to app ⚡️</button>
        )}
      />
    </div>
  );
}

export default googleLogin;
