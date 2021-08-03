
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, CardHeader, Table, Container, Media, Row, Col, Progress, Button} from "reactstrap";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from '../../views/examples/Stripe.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";


class AnalyticsHeaderItem extends React.Component {
  render() {
    return (
      <Col lg="6" xl="3" className="pt-3">
        <Card className="card-stats mb-4 mb-xl-0">
          <CardBody>
            <Row>
              <div className="col" style={{padding: 0, paddingLeft: "10px"}}>
                <CardTitle
                  tag="h5"
                  className="text-uppercase text-muted mb-0"
                >
                  {this.props.title}
                </CardTitle>
                <span className="h2 font-weight-bold mb-0">
                {this.props.value}
                </span>
              </div>
              <Col className="col-auto" style={{padding: 0}}>
                <div className="icon icon-shape bg-dark text-white rounded-circle shadow">
                  <i className={this.props.iconClass} aria-hidden="true"></i>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default AnalyticsHeaderItem;
