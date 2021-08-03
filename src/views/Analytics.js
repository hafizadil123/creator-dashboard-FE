
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, CardHeader, Table, Container, Media, Row, Col, Progress, Button} from "reactstrap";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import PostAnalytics from "./PostAnalytics";
import AnalyticsHeader from "components/Headers/AnalyticsHeader.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

class Analytics extends React.Component {

  render() {
    return (
      <>
        <div>
            <div id="analyticsToPDF">
              <AnalyticsHeader />
              <PostAnalytics />
            </div>
        </div>
      </>
    );
  }
}

export default Analytics;
