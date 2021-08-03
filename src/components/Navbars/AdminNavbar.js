
import React from "react";
import {Link} from "react-router-dom";
import Logout from '../../views/examples/googleLogout';

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


class AdminNavbar extends React.Component {

  render() {

    return (
        <>
            <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                <Container fluid>
                  <div style = {{position: 'absolute', right: 0, paddingRight: '20px', marginTop:'40px', zIndex: 10}}>
                    <Nav className="align-items-center d-md-flex" navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle className="pr-0" nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                      <img
                                          alt="..."
                                          src={require("assets/img/theme/team-4-800x800.jpg").default}
                                      />
                                    </span>
                                      <Media style={{color:'black'}}className="ml-2 d-none d-lg-block">
                                      <span className="mb-0 text-sm font-weight-bold">

                                      </span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem className="noti-title" header tag="div">
                                    <h6 className="text-overflow m-0"></h6>
                                </DropdownItem>
                                <DropdownItem to="/admin/user-profile" tag={Link}>
                                    <i className="ni ni-single-02"/>
                                    <span>My profile</span>
                                </DropdownItem>
                                <DropdownItem to="/admin/pricing" tag={Link}>
                                    <i className="ni ni-spaceship"/>
                                    <span>Upgrade To Pro ✨</span>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                   <Logout/>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                  </div>
                </Container>
            </Navbar>
        </>
    );
  }
};

export default AdminNavbar;
