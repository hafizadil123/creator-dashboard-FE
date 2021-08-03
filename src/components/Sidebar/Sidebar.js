
/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

var ps;

class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };

  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = routes => {
    return routes.map((prop, key) => {
      return (prop.layout === '/admin' && !prop.api) ? (
          <NavItem key={key}>
            <NavLink
                to={prop.layout + prop.path}
                tag={NavLinkRRD}
                onClick={this.closeCollapse}
                activeClassName="active"
            >
              <i className={prop.icon}/>
              {prop.name}
            </NavLink>
          </NavItem>
      ) : null;
    });
  };

  createApiLinks = routes => {
    return routes.map((prop, key) => {
      return (prop.layout === '/admin' && prop.api) ? (
          <NavItem key={key}>
            <NavLink
                to={prop.layout + prop.path}
                tag={NavLinkRRD}
                onClick={this.closeCollapse}
                activeClassName="active"
            >
              <i className={prop.icon}/>
              {prop.name}
            </NavLink>
          </NavItem>
      ) : null;
    });
  };

  render() {
    const { bgColor, routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-dark"
        expand="md"
        id="sidenav-main"
        style={{backgroundColor:'#282828'}}
      >
        <Container fluid>

          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>

          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              />
            </NavbarBrand>
          ) : null}

          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>

            {/* Form */}
            <Form className="mt-4 mb-3 d-md-none">
              <InputGroup className="input-group-rounded input-group-merge">
                <Input
                  aria-label="Search"
                  className="form-control-rounded form-control-prepended"
                  placeholder="Search"
                  type="search"
                />
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form>

            {/* Navigation */}
            <Nav navbar>{this.createLinks(routes)}</Nav>

            {/* Divider */}
            <hr className="my-3" style={{backgroundColor:'gray'}}/>

            <Nav className="" navbar>
              <NavItem >
                <NavLink href="https://airtable.com/shrAwLdyfbyIFpRlA">
                  Send Feedback 📝
                </NavLink>
              </NavItem>
            </Nav>

            <Nav className="" navbar >
              <NavItem className="">
                <NavLink href="https://airtable.com/shrzAesKTgh0cP9ai">
                  Report a Bug 🐛
                </NavLink>
              </NavItem>
            </Nav>

            <hr className="my-3" style={{backgroundColor:'gray'}}/>
            <br/>
            <Nav className="mb-md-3" navbar >
              <NavItem>
                <Link to="/admin/pricing">
                  <button className="btn" style={{color : "rgb(255, 255, 255)", backgroundColor:"#6074DA", marginLeft: "20px", borderRadius: "20px"}}> Upgrade To Pro ✨ </button>

                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;
