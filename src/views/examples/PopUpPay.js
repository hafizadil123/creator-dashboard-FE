import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from './Stripe.js';
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

export default class PopUpPay extends React.Component {

  constructor(props) {
    super(props);
    this.tooltipRef = React.createRef();
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

    return (
      <Popup open={this.props.open}
        modal
        nested
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
    );
  }
}
