// Importing combination
import React, {Component} from 'react';
// Importing Module
import ReactDOM from 'react-dom';

class TikTokUsername extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  attachTiktokUsernameHandler = (event) => {
    event.preventDefault();

    var body = {};
    body.tiktokUsername = this.state.username;
    body.userId = localStorage.getItem("reveleUserID");

    fetch('http://localhost:5100/api/tiktok/attach', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == true) {
          // Reload the page
          window.location.href = "admin/index";
        } else {
          // alert("There is some issue in Google Login at this time. Please try again later.");
        }
      })
      .catch((error) => {
        console.error(error);
      //  alert("Catch There is some issue in Google Login at this time. Please try again later.");
      });
  }

  tiktokInputChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {

    const { User } = this.state;

    return (
      <form className=" pt-8"  onSubmit={this.attachTiktokUsernameHandler}>
        <h2>Please connect your tiktok username to continue</h2>
        <p> **Works only for public TikTok  accounts. </p>
        <br />
        <input
          type='text'
          onChange={this.tiktokInputChangeHandler}
          placeholder ="Enter Tiktok username"
          style={{border: "1px lightgray solid", borderRadius: "15px", padding: "5px 45px", color:"lightgray", marginLeft: "50px", color:'black'}}
        />
        <input
          type='submit'
          style={{color: "#fff", backgroundColor: "rgb(80 80 80)", border: "0px lightgray solid", marginLeft: "10px", borderRadius: "30px", padding: "5px 15px", cursor:'pointer' }}
        />
      </form>
    );
  }
}

export default TikTokUsername;
