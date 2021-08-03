
import React, {useEffect, useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import EditHeader from "../../components/Headers/EditHeader";
import {edit} from "../../network/ApiAxios";


class EditProfile extends React.Component {

    //const user = JSON.parse(localStorage.getItem("user"));
    //const history = useHistory();

    constructor(props) {
      super(props);
      this.state = {
        User: {info:[]},
        username: ''
      };
    }

    attachUsernameHandler = (event) => {
      event.preventDefault();

      var body = {};
      body.tiktokUsername = this.state.username;

      fetch('http://localhost:5100/api/users/' + localStorage.getItem('reveleUserID'), {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success == true) {
          } else {
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    UsernameInputChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }

    componentDidMount() {
      fetch('http://localhost:5100/api/users/' + localStorage.getItem('reveleUserID'))
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
          this.setState({
            User: responseJson.data
          });
        })

        .catch((error) => {
          console.error(error);
        });
    }

    render() {
      const { User } = this.state;

      return (
          <>
              <EditHeader/>
              {/* Page content */}
              <Container className="mt--7" fluid>
                  <Row>
                      <div className="col">
                          <Card className="bg-secondary shadow">
                              {/* <CardHeader className="bg-white border-0">
                                  <Row className="align-items-center">
                                      <Col xs="8">
                                          <h3 className="mb-0">My account</h3>
                                      </Col>
                                      <Col className="text-right" xs="4">
                                          <Button
                                              color="primary"
                                              size="lg"
                                              onSubmit={this.attachUsernameHandler}>
                                              Save
                                          </Button>
                                      </Col>
                                  </Row>
                              </CardHeader> */}
                              <CardBody>
                                  <Form onSubmit={this.attachUsernameHandler}>
                                    <input
                                      color="primary"
                                      size="lg"
                                      type='submit'
                                      style={{color: "#fff", backgroundColor: "rgb(80 80 80)", marginBottom: "10%", marginRight: "4%", borderRadius: "30px", position: 'absolute', right: '0px', padding:'1%', border:'none' }}
                                      />
                                      <h6 className="heading-small text-muted mb-4">
                                          Edit Basic information
                                      </h6>
                                      <div className="pl-lg-4">
                                          <Row>

                                              <Col lg="6">
                                                  <FormGroup>
                                                      <label
                                                          className="form-control-label"
                                                      >
                                                          First Name
                                                      </label>
                                                      <Input
                                                          className="form-control-alternative"
                                                          defaultValue={User.info.firstName}
                                                      />
                                                  </FormGroup>
                                              </Col>
                                              <Col lg="6">
                                                  <FormGroup>
                                                      <label
                                                          className="form-control-label"
                                                          htmlFor="input-lastName"
                                                      >
                                                          Last Name
                                                      </label>
                                                      <Input
                                                          className="form-control-alternative"
                                                          id="input-lastName"
                                                          defaultValue={User.info.lastName}
                                                          type="text"
                                                      />
                                                  </FormGroup>
                                              </Col>
                                              <Col lg="6">
                                                  <FormGroup>
                                                      <label
                                                          className="form-control-label"
                                                          htmlFor="input-email"
                                                      >
                                                          Email address
                                                      </label>
                                                      <Input
                                                          className="form-control-alternative"
                                                          id="input-email"
                                                          defaultValue={User.info.email}
                                                          type="email"
                                                          disabled
                                                      />
                                                  </FormGroup>
                                              </Col>
                                          </Row>
                                          <hr className="my-4"/>

                                          <h6 className="heading-small text-muted mb-4">
                                              Edit Social information
                                          </h6>
                                          <Col lg="6">
                                              <FormGroup>
                                                  <label
                                                      className="form-control-label"
                                                      htmlFor="input-username"
                                                  >
                                                      TikTok Username
                                                  </label>
                                                  <Input
                                                      className="form-control-alternative"
                                                      defaultValue={User.tiktokUsername}
                                                      id="input-username"
                                                      placeholder="Username"
                                                      type="text"
                                                      onChange={this.UsernameInputChangeHandler}
                                                  />
                                              </FormGroup>
                                          </Col>
                                      </div>
                                  </Form>
                              </CardBody>
                          </Card>
                      </div>
                  </Row>
              </Container>
          </>
      );
    }
}

export default EditProfile;
