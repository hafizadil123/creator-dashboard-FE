
import React from "react";

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
import {useHistory} from "react-router-dom";

class Profile extends React.Component {

    constructor() {
      super();
      this.state = {
        User: { info: {}}
      };
    }

    componentDidMount() {
      fetch('http://localhost:5100/api/users/' + localStorage.getItem('reveleUserID'))
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
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
              <UserHeader/>
              {/* Page content */}
              <Container className="mt--7" fluid>
                  <Row>
                      <Col className="order-xl-1" xl="8">
                          <Card className="bg-secondary shadow">
                              <CardHeader className="bg-white border-0">
                                  <Row className="align-items-center">
                                      <Col xs="8">
                                          <h3 className="mb-0">My account</h3>
                                      </Col>
                                  </Row>
                              </CardHeader>
                              <CardBody>
                                  <Form>
                                      <h6 className="heading-small text-muted mb-4"> Basic Information </h6>
                                      <div className="pl-lg-4">
                                          <Row>
                                              <Col lg="6">
                                                  <FormGroup>
                                                      <label
                                                          className="form-control-label"
                                                          htmlFor="input-email"
                                                      >
                                                          First Name
                                                      </label>
                                                      <Input
                                                          className="form-control-alternative"
                                                          id="input-email"
                                                          defaultValue={User.info ? User.info.firstName : ""}
                                                          type="email"
                                                          disabled
                                                      />
                                                  </FormGroup>
                                              </Col>
                                              <Col lg="6">
                                                  <FormGroup>
                                                      <label
                                                          className="form-control-label"
                                                          htmlFor="input-email"
                                                      >
                                                          Last Name
                                                      </label>
                                                      <Input
                                                          className="form-control-alternative"
                                                          id="input-email"
                                                          defaultValue={User.info ? User.info.lastName : ""}
                                                          type="email"
                                                          disabled
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
                                                          defaultValue={User.info ? User.info.email : ""}
                                                          type="email"
                                                          disabled
                                                      />
                                                  </FormGroup>
                                              </Col>
                                              <hr className="my-5"/>
                                          </Row>
                                      </div>
                                      <hr className="my-4"/>

                                      <h6 className="heading-small text-muted mb-4"> Social Account Information </h6>

                                      <Col lg="7">
                                          <FormGroup>
                                              <label
                                                  className="form-control-label"
                                                  htmlFor="input-username"
                                              >
                                                  TikTok Username
                                              </label>
                                              <Input
                                                  className="form-control-alternative"
                                                  defaultValue={User ? User.tiktokUsername : ""}
                                                  id="input-username"
                                                  placeholder="Username"
                                                  type="text"
                                                  disabled
                                              />
                                          </FormGroup>
                                      </Col>
                                  </Form>
                              </CardBody>
                          </Card>
                      </Col>
                  </Row>
              </Container>
          </>
      );
  }
}

export default Profile;
