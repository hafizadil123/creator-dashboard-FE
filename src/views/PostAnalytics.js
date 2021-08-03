
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, CardHeader, Table, Container, Media, Row, Col, Progress, Button} from "reactstrap";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

class PostAnalytics extends React.Component {

  constructor() {
    super();
    this.state = {
      postStats: [],
      analytics: {},
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  componentDidMount() {
    fetch('http://localhost:5100/api/tiktok/myposts/'+ localStorage.getItem('reveleUserID'))
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          postStats: responseJson.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    let postItems = this.state.postStats.map((tag, index) => {
      return (
          <tr key={tag.id}>
            <th scope="row" style={{paddingBottom:'3%', paddingTop:'3%'}}>
              <Media className="align-items-center">
                <a className="avatar rounded-circle mr-3" href={ tag.videoUrl} target="_blank"><img alt="" src={tag.covers[0].dynamic} style={{borderRadius: '14%'}} /></a>
              </Media>
            </th>
            <td >{tag.caption}</td>
            <td><a href={ tag.sound[0].playUrl} target="_blank">{tag.sound[0].musicName}</a></td>
            <td>{tag.shareCount}</td>
            <td>{tag.likeCount}</td>
            <td>{tag.playCount}</td>
            <td>{tag.commentCount}</td>
        </tr>
        );
    });

    return (
      <>
        <div className="header pb-3" style={{paddingLeft: '39px', paddingRight: '39px'}}>
            <Card className="shadow">
              <CardHeader className="border-0">
              <h2 style={{ textAlign: 'center'}}> Your Post Metrics </h2>
              <Card className="shadow">
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Video</th>
                      <th scope="col">Caption</th>
                      <th scope="col">Sound</th>
                      <th scope="col">Shares</th>
                      <th scope="col">Likes </th>
                      <th scope="col">Views</th>
                      <th scope="col">Comments </th>
                    </tr>
                  </thead>
                  <tbody>
                  {postItems}
                  </tbody>
                </Table>
              </Card>
            </CardHeader>
            </Card>
        </div>
      </>
    );
  }
}

export default PostAnalytics;
