import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import TikTokUsername from "./examples/TikTokUsername.js";
import Watchlist from "views/Watchlist.js";
import Loader from 'react-loader-spinner';
import AnalyticsHeader from "components/Headers/AnalyticsHeader.js";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Media,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import TrendsHeader from "components/Headers/TrendsHeader.js";
import TiktokTrendsTable from './TikTokTrendsTable.js'
import Analytics from './Analytics.js'

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      hashtags: [],
      musics: [],
      topMusic: {info: {title: "--"}, musicDesc: ""},
      topHashtag: {info: {title: "--"}, viewDesc: ""},
      userObj: JSON.parse(localStorage.getItem("reveleUser")),
      userID: localStorage.getItem("reveleUserID"),
      watchedItems: {},
      stats: {},
      postStats: []
    };
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

  onSubmit = () => {
      this.props.history.push('/login/');
  }

  async componentDidMount() {
    try {
      Promise.all([
        fetch("http://localhost:5100/api/dashboard/" + this.state.userID),
        fetch("http://ec2-18-117-197-197.us-east-2.compute.amazonaws.com:8100/discover"),
        fetch('http://localhost:5100/api/tiktok/myposts/'+ localStorage.getItem('reveleUserID'))
      ]).then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()])
     }).then(([res1, res2, res3]) => {
        this.setState({
          loading:false,
          userObj: JSON.parse(localStorage.getItem("reveleUser")),
          userID: localStorage.getItem("reveleUserID"),

          stats: res1.data.stats,
          watchedItems: res1.data.watchedItems,

          hashtags: res2.data.hashtags,
          musics: res2.data.musics,
          topMusic: res2.data.top_music,
          topHashtag: res2.data.top_hashtag,
          postStats: res3.data
        });
      });
    }
    catch(err) {
      console.log(err);
    };
  }

  copyClicked(text) {

  }

  UserNameView = () => (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <TikTokUsername />
    </div>)

  render() {

    let hashtagItems = this.state.hashtags.slice(0,5).map((tag, index) => {
      return (
        <tr key={tag.id}>
          <td><a href={"https://www." + tag.info.link} target="_blank">{tag.info.title}</a></td>
          <td>{tag.viewDesc}</td>
          <td><a onClick={this.copyClicked.bind(this, tag.info.title)}><i className="fas fa-copy"></i></a></td>
        </tr>
      );

    });

    let musicItems = this.state.musics.slice(0,5).map((item, index) => {
      return (
        <tr key={item.id}>
          <th scope="row">
            <Media className="align-items-center">
              <a className="avatar rounded-circle mr-3"><img alt="" src={item.info.thumbnail} style={{width: "50px", height: "50px"}} /></a>
              <Media><a href={"https://www." + item.info.link} target="_blank">{item.info.title}</a></Media>
            </Media>
          </th>
          <td>{item.musicDesc}</td>
          <td>{item.info.description}</td>
          <td><a onClick={this.copyClicked.bind(this, item.info.title)}><i className="fas fa-copy"></i></a></td>
        </tr>
      );
    });

    let postItems = this.state.postStats.slice(0,5).map((tag, index) => {
      return (
          <tr key={tag.id}>
            <th scope="row" style={{paddingBottom:'3%', paddingTop:'3%'}}>
              <Media className="align-items-center">
                <a className="avatar rounded-circle mr-3" href={ tag.videoUrl} target="_blank"><img alt="" src={tag.covers[0].dynamic} style={{borderRadius: '10%'}} /></a>
              </Media>
            </th>
            <td>{tag.caption}</td>
            <td><a href={ tag.sound[0].playUrl} target="_blank">{tag.sound[0].musicName}</a></td>
            <td>{tag.shareCount}</td>
            <td>{tag.likeCount}</td>
            <td>{tag.playCount}</td>
            <td>{tag.commentCount}</td>

        </tr>
        );
    });


    if(this.state.loading){
      return ( <Loader type="ThreeDots" className="pt-7" style={{display:'flex', justifyContent:'center'}} color="black" height={100} width={100}/> );
    }  else {

      return (
        <>
        <div id="analyticsToPDF">
            <div className="header"> </div>
            {!this.state.stats.heart ? <this.UserNameView /> :
                <div>
                  <AnalyticsHeader />
                  <div className="pt-3 pb-3" style={{ paddingLeft: '39px', paddingRight: '39px'}}>
                    <div className="header pb-3 ">
                        <Card className="shadow">
                          <CardHeader className="border-0">
                          <Row style={{ textAlign: 'center'}}>
                            <h2 style={{paddingLeft: "20px"}}> Your Post Metrics </h2>
                            <div className="col text-right" style={{paddingBottom:"2%"}}>
                              <Button
                                color="primary"
                                size="sm"
                                href="/admin/Analytics"
                              >
                                See all
                              </Button>
                            </div>
                          </Row>
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
                    <div style = {{ display:'flex', flexDirection: 'row'}}>
                      <Container>
                        <Row>
                            <div className="col" >
                              <Card className="shadow" >
                                <CardHeader className="border-0">
                                <Row style = {{justifyContent: 'space-between'}}>
                                    <h3 className="mb-0">Trending TikTok Hashtags For Today</h3>
                                    <Button
                                      color="primary"
                                      href="admin/Analytics"
                                      size="sm"
                                    >
                                      See all
                                    </Button>
                                </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive style= {{textAlign: 'center'}}>
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col">Hashtag</th>
                                      <th scope="col">Number of Views</th>
                                      <th scope="col">Copy</th>
                                      <th scope="col" />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {hashtagItems}
                                  </tbody>
                                </Table>
                              </Card>
                          </div>
                        </Row>
                        </Container >

                        <Container style = {{ display:'flex', flexDirection: 'row'}}>
                          <Row>
                            <div className="col">
                              <Card className=" shadow">
                              <CardHeader className="border-0">
                                <Row style = {{justifyContent: 'space-between'}}>
                                  <h3 className="mb-0">Trending TikTok Sounds For Today</h3>
                                  <Button
                                    color="primary"
                                    href="admin/Analytics"
                                    size="sm"
                                    href="/admin/Analytics"
                                  >
                                    See all
                                  </Button>
                                </Row>
                              </CardHeader>
                              <Table className="align-items-center table-flush" responsive style= {{textAlign: 'center'}}>
                                <thead className="thead-light">
                                    <tr>
                                      <th scope="col">Sound Title</th>
                                      <th scope="col">Number of Vidoes</th>
                                      <th scope="col">Artist</th>
                                      <th scope="col">Copy</th>
                                      <th scope="col" />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {musicItems}
                                  </tbody>
                                </Table>
                              </Card>
                            </div>
                          </Row>
                      </Container>
                    </div>
                  </div>
                </div>
           }
        </div>
        </>
      );
    }
  }
}

export default Index;
