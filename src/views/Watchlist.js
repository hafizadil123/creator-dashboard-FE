
import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  Button,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import TrendsHeader from "components/Headers/TrendsHeader.js";
import Login from './examples/googleLogin';
import {Redirect} from 'react-router-dom';
import PopUpPay from './examples/PopUpPay.js'

var trendsData = {};

class TiktokTrends extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      userData: [],
      showPayPopup: false
    };
  }

  attachTiktokUsernameHandler = (event) => {
    event.preventDefault();

    var body = {};
    body.username = this.state.username;
    body.userId = localStorage.getItem("reveleUserID");

    fetch('http://localhost:5100/api/users/' + localStorage.getItem("reveleUserID") + '/watch/users', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    }).then((response) => response.json())
      .then((responseJson) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    fetch('http://localhost:5100/api/users/' + localStorage.getItem("reveleUserID") + '/watchlist')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({
          userData: responseJson.data ? responseJson.data.users : [],
          showPayPopup: responseJson.response_code == 400 ? true : false
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  tiktokInputChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {

    const modal = {
        fontSize: '12px'
    };

    const modalContent = {
      width: '100%',
      padding: '20px',
      textAlign: 'center'
    }

    const modalActions = {
      width: '100%',
      padding: '10px 5px',
      margin: 'auto',
      textAlign: 'center'
    }

    const modalClose = {
      cursor: 'pointer',
      position: 'absolute',
      display: 'block',
      padding: '2px 5px',
      lineHeight: '20px',
      right: '-10px',
      top: '-10px',
      fontSize: '24px',
      background: '#ffffff',
      borderRadius: '18px',
      border: '1px solid #cfcece'
    }

    let userItems;

    if (this.state.userData.length == 0) {
      userItems = () => {
        return (
          <tr key="none">
            <td colspan="6">No items in watchlist</td>
          </tr>
        ); 
        debugger;
      };
    } else {
      userItems = this.state.userData.map((tag, index) => {
        return (
            <tr key={index}>
              <th scope="row">
                <Media className="align-items-center">
                  <a className="avatar rounded-circle mr-3" target="_blank"><img alt="" src={tag.image} style={{borderRadius: "50%"}} /></a>
                </Media>
                <div style={{marginLeft:"10%", marginTop:"3%"}}> {tag.username} </div>
              </th>

              <td>{tag.totalPlayCount}</td>
              <td>{tag.followerCount}</td>
              <td>{tag.heartCount ? Math.round(parseFloat(tag.heartCount) + parseFloat(tag.totalCommentCount) + parseFloat(tag.totalShareCount) / parseFloat(tag.followerCount)) : "--"}</td>
              <td>{tag.heartCount ? parseFloat(tag.heartCount) + parseFloat(tag.totalCommentCount) + parseFloat(tag.totalShareCount) : "--"}</td>
              <td>{tag.totalPlayCount ? tag.totalPlayCount : "--"}</td>
          </tr>
          );
      });
    }

    return (
      <>
      <div className="pt-7">
          <PopUpPay open={this.state.showPayPopup}/>
          <Container fluid className="header pt-8">
              <Container className="mt--7"  fluid>
                <Row>
                  <div className="col">
                    <Card className="shadow">
                      <Row style={{ textAlign: 'center', paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                        <h2 style={{paddingLeft: "20px"}}> Your User Watchlist </h2>
                        <p><span style={{textDecoration: "underline", color:"lightgray", marginLeft:"3%"}} href="#" id="UncontrolledTooltipExample"><i class="fa fa-info-circle" aria-hidden="true"></i></span></p>
                          <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
                            Add Users to Your Watchlist to track their growth over time. 
                          </UncontrolledTooltip>
                        <div className="col text-right" style={{paddingBottom:"2%"}}>
                            <Popup
                              trigger={ <Button color="primary" size="sm"> Add User </Button>}
                              modal
                              nested
                              style={{width:'50%'}}
                            >
                                {close => (
                                <div style={modal}>
                                  <button className="close" onClick={close}>
                                     &times;
                                  </button>
                                  <div style={modalContent}  className="content">
                                    <form onSubmit={this.attachTiktokUsernameHandler}>
                                      <h2>Enter a tiktok username to watch</h2>
                                      <br />
                                      <input
                                        type='text'
                                        onChange={this.tiktokInputChangeHandler}
                                        placeholder ="Enter Tiktok username"
                                        style={{border: "1px lightgray solid", borderRadius: "15px", padding: "5px 45px", color:"lightgray", marginLeft: "50px"}}
                                      />
                                      <input
                                        type='submit'
                                        style={{color: "#fff", backgroundColor: "rgb(80 80 80)", border: "0px lightgray solid", marginLeft: "10px", borderRadius: "30px", padding: "5px 15px" }}
                                      />
                                    </form>
                                  </div>
                                </div>
                              )}
                           </Popup>
                        </div>
                      </Row>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Total Views</th>
                            <th scope="col">Audience</th>
                            <th scope="col">Engagement </th>
                            <th scope="col">Impressions</th>
                            <th scope="col">Reach </th>
                            
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        {userItems}
                        </tbody>
                      </Table>
                    </Card>
                  </div>
                </Row>
                <h2></h2>
                <Row>
                <div className="col pt-3">
                    <Card className="shadow">
                    <Row style = {{display:'flex', justifyContent: 'space-between', paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                              <h2 style={{paddingLeft: "20px"}}> Your Sound Watchlist </h2>
                              <Button
                                      color="primary"
                                      href="admin/Analytics"
                                      size="sm"
                                      style={{marginBottom:"2%"}}
                                      a href='https://airtable.com/shrmy25Rm9q4AaCCa'
                                    >
                                      Join Waitlist
                              </Button>
                          </Row>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Sound Title</th>
                            <th></th>
                            <th scope="col">Number Of Videos</th>
                            <th scope="col">Total Views</th>
                            <th scope="col">Artist </th>
                          </tr>
                        </thead>
                        <tbody>

                        </tbody>
                      </Table>
                    </Card>
                  </div>
                </Row>

                <Row>
                <div className="col pt-3 pb-7">
                    <Card className="shadow">
                    <Row style = {{display:'flex', justifyContent: 'space-between', paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px"}}>
                              <h2 style={{paddingLeft: "20px"}}> Your Hashtag Watchlist </h2>
                              <Button
                                      color="primary"
                                      href="admin/Analytics"
                                      size="sm"
                                      style={{marginBottom:"2%", marginLeft:"5%"}}
                                      a href='https://airtable.com/shrB0OAkiCk8n0HQ0'
                                    >
                                      Join Waitlist
                              </Button>
                          </Row>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                          <th scope="col">Hastag</th>
                            <th scope="col">Number of Views</th>
                            <th scope="col">Number of Videos</th>
                          </tr>
                        </thead>
                        <tbody>

                        </tbody>
                      </Table>
                    </Card>
                  </div>
                </Row>
              </Container>
            </Container>
        </div>
      </>
    );
  }
}

export default TiktokTrends;
