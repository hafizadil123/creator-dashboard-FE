
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2021{" "}
              <a
                className="font-weight-bold ml-1"
                href="http://www.getrevele.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Revele
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href="https://revele.substack.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Newsletter
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://discord.gg/sV8JERBM"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Discord
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://revele.medium.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.termsandconditionsgenerator.com/live.php?token=0VBlbhorXbifg68QRZ9rvuhUvpL3xWaZ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Terms Of Service 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.privacypolicygenerator.info/live.php?token=FijO915E0D9sHfK6NMY4MxgfhxEYICdj"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Privacy Policy 
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
