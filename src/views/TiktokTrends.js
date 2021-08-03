
import React from "react";

import dashboard from '../assets/img/dashboard.mp4';

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import TrendsHeader from "components/Headers/TrendsHeader.js";
import Form from "reactstrap/lib/Form";
import Login from "./examples/googleLogin";

import TiktokTrendsTable from './TikTokTrendsTable.js'
import {Redirect} from 'react-router-dom';

var trendsData = {};

class TiktokTrends extends React.Component {

  constructor() {
    super();
    this.state = {
      hashtags: [],
      musics: [],
      topMusic: {info: {title: "--"}, musicDesc: ""},
      topHashtag: {info: {title: "--"}, viewDesc: ""}
    };
  }

  componentDidMount() {
    fetch('http://ec2-18-117-197-197.us-east-2.compute.amazonaws.com:8100/discover')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          hashtags: responseJson.data.hashtags,
          musics: responseJson.data.musics,
          topMusic: responseJson.data.top_music,
          topHashtag: responseJson.data.top_hashtag});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  copyClicked(text) {
  }

  render() {
    return (
      <>
      <div style = {{background: '#282828', fontFamily: 'Avenir'}}>
          <Container fluid className="header pt-8">
            <Col lg="12" xl="12" sm="12" xs="12">
              <Row className="img-center text-center">
                  <h1 style = {{color: '#E5FD86', fontSize: '320%'}}>  TikTok Trends and Analytics ⚡️</h1>
                  <h2 className="display-5" style = {{color:'white', fontSize: '130%', marginBottom:'4%'}}> Find out how to make viral content that gets you on the FYP </h2>
                  <div id="mc_embed_signup" style={{background: "none"}}></div>
                    <form action="https://favose.us6.list-manage.com/subscribe/post?u=1e35df9f0ca2b24884d1b09f6&amp;id=cb820b2a66" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate style={{textAlign: "center" }}>
                        <div id="mc_embed_signup_scroll">
                          <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required className="email-bar" type="email" width="350" style={{ marginBottom: "40px", display: "inline-block", border: "1px lightgray solid", borderRadius: "15px", padding: "5px 15px"}} placeholder="email@example.com"></input>
                          <input type="submit" value="Get trends straight in your inbox 💌" name="subscribe" id="mc-embedded-subscribe"  className="btn btn--b btn--primary btn--large rounded-pill" style={{color: "#fff", backgroundColor: "rgb(80 80 80)", marginLeft: "10px", borderRadius: "20px" }}></input>
                          <div style={{ position: "absolute", left: "-5000px" }}>
                            </div>
                        </div>
                    </form>
                    <h3 style = {{color:'rgb(130 130 130)', fontSize: '90%', marginTop:'-2%', marginBottom:'5%'}}> Sign into our app for deeper and more personalized insights </h3>
                    <video src={dashboard} alt="Logo" style={{width:'60%', borderRadius:'1%'}}/>
                    
              </Row>
            </Col>
          </Container>
          
          <Container fluid className="header pt-7" style={{backgroundColor:"#E5FD86", marginTop:"5%", color:"#282828"}}>
            <Row className="img-center text-center">
            <div style={{ marginBottom:"4%", color:"#282828", fontSize: "4em"}}> <h1> What we have in store ✨ </h1></div>
              <div style={{display:'flex', flexDirection:'row', justifyContent: 'center', paddingBottom:'4%', color:'#282828' }}>
                <div style={{marginRight:'5%', marginLeft:'5%'}}>
                  <h1> 🎵 #️⃣</h1>
                  <h2> Top Hashtags & Sounds </h2>
                  <p> Stay on top of the rising trends by using the top hashtags with your content. </p>
                </div>
                <div style={{marginRight:'5%', marginLeft:'5%'}}>
                  <h1> 📊</h1>
                  <h2> Analytics & Insights </h2>
                  <p> All your TikTok analytics on one simpple dashbaord. Export your metrics and send them to brands to get those deals. </p>
                </div>
                <div style={{marginRight:'5%', marginLeft:'5%'}}>
                    <h1> 👀 </h1>
                  <h2> Watchlist </h2>
                  <p>  Track any user and save them on your watchlist. Watchlist for sound and hashtag coming soon!</p>
                </div>
              </div>
            </Row>
          </Container>
          <TiktokTrendsTable />

          <Container fluid className="header pt-7" style={{backgroundColor:"#E5FD86", marginTop:"5%", color:"#282828"}}>
            <Row className="img-center text-center">
              <div style={{ marginBottom:"4%", color:"#282828", fontSize: "4em"}}> <h1> Who is TikTok Trends for ✨ </h1></div>
              <div style={{display:'flex', flexDirection:'row', justifyContent: 'center', paddingBottom:'4%', color:'#282828' }}>
                <div style={{marginRight:'5%', marginLeft:'5%'}}>
                  <h1> 👩🏼‍🎨 </h1>
                  <h2> Creator </h2>
                  <p>  Use TikTok trends to find out what to create next that will go viral and analyze how your content did using our analytics features. </p>
                </div>
                <div style={{marginRight:'5%', marginLeft:'5%'}}>
                  <h1> 👩🏻‍💻 </h1>
                  <h2> Social Media Manager </h2>
                  <p>  Need to create content for your next TikTok campaign? Use Trends to find out what is trending and what is working! </p>
                </div>
                <div style={{marginRight:'5%', marginLeft:'5%'}}>
                    <h1> 🦄 </h1>
                  <h2> Founder & Business Owner </h2>
                  <p>  Need to create content for your product? Find out what to create and how it will do using our dashboards. </p>
                </div>
              </div>
            </Row>
          </Container>

          <Row className="img-center text-center pt-6 " style = {{paddingBottom:'3%'}}>
              <h1 className="display-3" style = {{color: '#E5FD86'}}> Want more personalized Insights? </h1>
              <h2 className=" display-6 pb-5" style = {{color: 'white', marginBottom:'-1%' }}> Sign into our tool for deeper and more personalized insights ⚡️ </h2>
              <Login />
          </Row>
          
        </div>
      </>
    );
  }
}

export default TiktokTrends;
