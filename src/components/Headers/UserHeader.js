
import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";
import {useHistory} from "react-router-dom";
import Logout from '../../views/examples/googleLogout';

const UserHeader = () => {

    const username = JSON.parse(localStorage.getItem("user")).name;
    const history = useHistory();

    return (
        <>
            <div
                className="header d-flex align-items-center"
                style={{
                    minHeight: "300px",
                    backgroundImage:
                        "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                }}
            >
                <Container className="d-flex align-items-center" fluid>
                    <Row>
                        <Col>
                            <Button
                                color="dark"
                                onClick={() => history.push('/admin/edit-profile')}
                            >
                                Edit profile
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default UserHeader;
