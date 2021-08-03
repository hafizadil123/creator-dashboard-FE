
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
import AnalyticsHeaderItem from "./AnalyticsHeaderItem.js";
import { UncontrolledTooltip } from 'reactstrap';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

const stringPublishableKey = "pk_test_51IGxmWJJa9Cf8TPSBcMSZ1xdXYV59vkfVdLswE47L8en8q3HgWQ13LJjvsmnjOORhR9cfDAfqyh7iNTA7sa5aE9u004W4G88VC";
const stripePromise = loadStripe(stringPublishableKey);

class AnalyticsHeader extends React.Component {
    
  constructor() {
    super();
    this.state = {
      analytics: {},
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  componentDidMount() {
    fetch('http://localhost:5100/api/tiktok/mystats/' + localStorage.getItem('reveleUserID'))
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          analytics: responseJson.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  downloadPdfDocument() {
    if (!localStorage.getItem('isPaidUser')) {
      document.getElementById('popupPay').modal('show');
      return;
    } else {
      window.scrollTo(0,0);
      const input = document.getElementById('analyticsToPDF');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          var imgWidth = 210;
          var pageHeight = 295;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          var doc = new jsPDF('p', 'mm');
          var position = 10; // give some top padding to first page

          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position += heightLeft - imgHeight; // top padding for other pages
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          doc.save( 'tiktokAnalytics.pdf');
        })
    }
  }

  render() {

    const modal = {
        fontSize: '12px'
    };

    const modalContent = {
      width: '100%',
      padding: '20px',
      textAlign: 'center'
    }

    const modalActions = {
      width: '100%',
      padding: '10px 5px',
      margin: 'auto',
      textAlign: 'center'
    }

    const modalClose = {
      cursor: 'pointer',
      position: 'absolute',
      display: 'block',
      padding: '2px 5px',
      lineHeight: '20px',
      right: '-10px',
      top: '-10px',
      fontSize: '24px',
      background: '#ffffff',
      borderRadius: '18px',
      border: '1px solid #cfcece'
    }

    const { analytics } = this.state;

    return (
      <>

        <div className="header pt-7 pb-3 " style={{ paddingLeft: '39px', paddingRight: '39px', height: '30%'}}>
          <a id="downloadPDFButton" className="pt-7" onClick={() => this.downloadPdfDocument()}>
          <Popup id="popupPay"
            trigger={<Button color="primary" size="sm" style={{marginBottom: '5%', position: 'absolute', right: '0', top: '0', marginTop: '23px',  marginRight: '9%'}}>Download as Pdf </Button>}
            modal
            nested
            style={{width:'50%'}}
          >
              {close => (
              <div style={modal}>
                <button className="close" onClick={close}>
                   &times;
                </button>
                <div style={modalContent}  className="content">
                <Elements stripe={stripePromise}>
                  <CardForm />
                </Elements>
                </div>
              </div>
            )}
         </Popup>
          </a>
            <Card className="shadow">
              <CardHeader className="border-0">
              <h2 style={{ textAlign: 'center'}}> Your Tiktok Metrics </h2>
              </CardHeader>

              <Container fluid>
                <div className="header-body">
                  <Row className="pb-3">

                    <AnalyticsHeaderItem title="Engagement" 
                    value={analytics.heartCount ? Math.round(parseFloat(analytics.heartCount) + parseFloat(analytics.totalCommentCount) + parseFloat(analytics.totalShareCount) / parseFloat(analytics.followerCount)) : "--"}
                    iconClass="fa fa-bolt"  />
                    
                    <AnalyticsHeaderItem title="Impressions"
                    value={analytics.heartCount ? parseFloat(analytics.heartCount) + parseFloat(analytics.totalCommentCount) + parseFloat(analytics.totalShareCount) : "--"}
                    iconClass="fa fa-bolt" />

                    <AnalyticsHeaderItem title="Reach"
                    value={analytics.totalPlayCount ? analytics.totalPlayCount : "--"}
                    iconClass="fa fa-bolt" />

                    <AnalyticsHeaderItem title="Audience"
                    value={analytics.followerCount}
                    iconClass="fa fa-bolt" />

                    <AnalyticsHeaderItem title="Followers"
                    value={analytics.followerCount}
                    iconClass="fa fa-users" />

                    <AnalyticsHeaderItem title="Likes"
                    value={analytics.heartCount}
                    iconClass="fa fa-heart" />

                    <AnalyticsHeaderItem title="Total Views"
                    value={analytics.totalPlayCount}
                    iconClass="fa fa-eye" />

                    <AnalyticsHeaderItem title="Total Shares"
                    value={analytics.totalShareCount}
                    iconClass="fa fa-share" />

                    <AnalyticsHeaderItem title="Total Comments"
                    value={analytics.totalCommentCount}
                    iconClass="fa fa-comments" />

                    <AnalyticsHeaderItem title="Total Posts"
                    value={analytics.postCount}
                    iconClass="fa fa-address-card" />

                  </Row>
                </div>
              </Container>
              </Card>
        </div>
      </>
    );
  }
}

export default AnalyticsHeader;
