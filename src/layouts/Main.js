import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar2 from "components/Navbars/AdminNavbar2.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import TiktokTrends from "views/TiktokTrends";

class Main extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
      }
    getBrandText = path => {
        return "Brand";
      };
    render() {
        return (
          <>
            <div className="main-content" ref="mainContent">
              <AdminNavbar2
                {...this.props}
                brandText={this.getBrandText(this.props.location.pathname)}
              />
              <TiktokTrends />
              <Container fluid>
                <AdminFooter />
              </Container>
            </div>
          </>
        );
    }
}

export default Main;
