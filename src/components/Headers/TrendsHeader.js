
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class TrendsHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header pb-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="6">
                  <Card className="shadow card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Top Trending Hashtag For Today
                          </CardTitle>
                          <a href={"https://www." + this.props.topHashtag.info.link} className="h2 font-weight-bold mb-0" target="_blank">
                            {this.props.topHashtag.info.title}
                          </a>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-dark text-white rounded-circle shadow">
                            <i className="fas fa-hashtag" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-nowrap">{this.props.topHashtag.viewDesc}</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="6">
                  <Card className="shadow card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Top Trending Sound For Today
                          </CardTitle>
                          <a href={"https://www." + this.props.topMusic.info.link} className="h2 font-weight-bold mb-0" target="_blank">
                          {this.props.topMusic.info.title}
                          </a>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-dark text-white rounded-circle shadow">
                            <i className="fas fa-music" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-nowrap">{this.props.topMusic.musicDesc}</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default TrendsHeader;
