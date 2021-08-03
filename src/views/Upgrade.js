
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, CardHeader, Table, Container, Media, Row, Col, Progress, Button} from "reactstrap";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import PostAnalytics from "./PostAnalytics";
import Pricing from "examples/Pricing";


class Analytics extends React.Component {

  render() {
    return (
      <>
        <div className="header pt-3" style={{ paddingLeft: '39px', paddingRight: '39px', height: '30%'}}>
            <Pricing />
        </div>
      </>
    );
  }
}

export default Analytics;
