
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
    Navbar,
    Nav,
    Container,
    Media
} from "reactstrap";
import {logout} from "../../network/ApiAxios";
import Login from '../../views/examples/googleLogin';

import {useHistory} from "react-router-dom";

const AdminNavbar2 = props => {
  const history = useHistory();
    return (
        <>
            <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                <Container fluid>
                    <Link
                        className="h4 mb-0 text-uppercase d-none d-lg-inline-block"
                        to="/"
                    >
                        <img
                        alt="..."
                        src={require("assets/img/brand/argon-react.png").default}
                        height="30px"
                      />
                    </Link>

                    <div style = {{position: 'absolute', right: 20, marginTop:'10px'}}>
                      <Login />
                    </div>
                    <div style = {{position: 'absolute', right: 220, marginTop:'10px'}}>
                      <a href="http://www.getrevele.com/pricing"> Pricing </a>
                    </div>
                    <div style = {{position: 'absolute', right: 300, marginTop:'10px'}}>
                        <a href="https://revele.substack.com/ ">Newsletter</a>
                    </div>
                    <div style = {{position: 'absolute', right: 420, marginTop:'10px'}}>
                        <a href="http://www.getrevele.com/resources">Creator Resources </a>
                    </div>

                </Container>
            </Navbar>
        </>
    );
};

export default AdminNavbar2;
