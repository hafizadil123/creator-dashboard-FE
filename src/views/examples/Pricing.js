import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from './Stripe.js';
import PopUpPay from './PopUpPay.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  Button,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

const stringPublishableKey = "pk_test_51IGxmWJJa9Cf8TPSBcMSZ1xdXYV59vkfVdLswE47L8en8q3HgWQ13LJjvsmnjOORhR9cfDAfqyh7iNTA7sa5aE9u004W4G88VC";
const stripePromise = loadStripe(stringPublishableKey);
export default class Pricing extends React.Component {

  constructor(props) {
    super(props);
    this.tooltipRef = React.createRef();
    this.state = {
      showPayPopup: false
    }
  }

  componentDidUpdate() {
    // this.setState({showPayPopup: true});
    console.log("called me");
  }

  render() {
    const {
      text,
      tooltipText,
      placement,
      textClass,
      tooltipClass,
    } = this.props;

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

    return (

      <div className="pt-5" style={{marginTop:"3%", paddingLeft:'6%', paddingRight:'6%'}}>
        <h1 style={{ textAlign: 'center'}}> Upgrade To Access All Our Features ⚡️ </h1>

        <Popup open={this.state.showPayPopup}
          modal
          style={{width:'50%'}}
          id="popupPay"
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
        <PricingTable highlightColor='#6074DA'>
            <PricingSlot style={{borderRadius:'20%'}} onClick={(e) => { localStorage.getItem('isPaidUser') ? console.log("alreay a paid user") : this.setState({showPayPopup: true})  }} buttonText={localStorage.getItem('isPaidUser') ?' Already a Member' : 'Pay ✨'} title='Pro' priceText='$10/month'>
                <PricingDetail> <b>General Trends</b> </PricingDetail>
                <PricingDetail> <b>Personalized Trends</b> </PricingDetail>
                <PricingDetail> <b>Channel Analytics</b> </PricingDetail> 
                <PricingDetail> <b>Post Level Analytics</b></PricingDetail>
                <PricingDetail> <b>User Watch List</b></PricingDetail>
                <PricingDetail> <b>Live Reports</b></PricingDetail>
            </PricingSlot>
            <PricingSlot onClick={(e) => {e.preventDefault(); window.location.href='https://airtable.com/shr3vkdC2tf9gPaXD'; }} buttonText='Join Waitlist ✨' title='Deluxe' priceText='$99/month'>
                <PricingDetail> <b>Multiple Social Channels</b> </PricingDetail>
                <PricingDetail> <b>General Trends</b> </PricingDetail>
                <PricingDetail> <b>Personalized Trends</b> </PricingDetail>
                <PricingDetail> <b>Channel Analytics</b> </PricingDetail>
                <PricingDetail> <b>Post Level Analytics</b></PricingDetail>
                <PricingDetail> <b>User, Sound and Hashtag Watch List</b></PricingDetail>
                <PricingDetail> <b>Live Reports</b></PricingDetail>
                <PricingDetail> <b>Scheduling Posts</b> </PricingDetail>
                <PricingDetail> <b>Hashtag & Caption Generator</b> </PricingDetail>
                <PricingDetail> <b>Comment Generator</b> </PricingDetail>
                <PricingDetail> <b>Comment Classifier, Queue and Automated Replies</b> </PricingDetail>
                <PricingDetail> <b>Automation Flow Builder</b></PricingDetail>
            </PricingSlot>
        </PricingTable>
    </div>

    );
  }

}
