import React from "react";

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
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import TrendsHeader from "components/Headers/TrendsHeader.js";

var trendsData = {};

class TiktokTrendsTable extends React.Component {

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

          let hashtagItems = this.state.hashtags.map((tag, index) => {
            return (
              <tr key={tag.id}>
                <td><a href={"https://www." + tag.info.link} target="_blank">{tag.info.title}</a></td>
                <td>{tag.viewDesc}</td>
                <td>{tag.info.description}</td>
                <td><a onClick={this.copyClicked.bind(this, tag.info.title)}><i className="fas fa-copy"></i></a></td>
              </tr>
            );
          });

        let musicItems = this.state.musics.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope="row">
                <Media className="align-items-center">
                  <a className="avatar rounded-circle mr-3"><img alt="" src={item.info.thumbnail} /></a>
                  <Media><a href={"https://www." + item.info.link} target="_blank">{item.info.title}</a></Media>
                </Media>
              </th>
              <td>{item.musicDesc}</td>
              <td>{item.info.description}</td>
              <td><a onClick={this.copyClicked.bind(this, item.info.title)}><i className="fas fa-copy"></i></a></td>
            </tr>
          );
        });

        return (
          <>
          <div className="pt-7" style = {{ fontFamily: 'Avenir'}}>
              <TrendsHeader topMusic={this.state.topMusic} topHashtag={this.state.topHashtag}/>
              <Container className="mt--7" fluid>
              <Row>
                <div className="col">
                  <Card className="shadow">
                    <CardHeader className="border-0">
                      <h3 className="mb-0">Trending Hashtags For Today</h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive style= {{textAlign: 'center'}}>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Hashtag</th>
                          <th scope="col">Number of Views</th>
                          <th scope="col">Description</th>
                          <th scope="col">Copy</th>
                          <th scope="col" />
                        {/*  <th scope="col"> Watchlist </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {hashtagItems}
                      </tbody>
                    </Table>
                  </Card>
                </div>
                </Row>
                {/* Dark table */}
                <Row className="mt-5">
                  <div className="col">
                    <Card className=" shadow">
                    <CardHeader className="border-0">
                      <h3 className="mb-0">Trending TikTok Sounds For Today</h3>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive style= {{textAlign: 'center'}}>
                      <thead className="thead-light">
                          <tr>
                            <th scope="col">Sound Title</th>
                            <th scope="col">Number of Vidoes</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Copy</th>
                            <th scope="col" />
                          {/*   <th scope="col"> Watchlist </th> */}
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
          </>
        );
      }
    }

export default TiktokTrendsTable;
