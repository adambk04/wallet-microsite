import React from "react";
import { DownloadBtns } from "./DownloadBtns";
import { ScrollBtn } from "./ScrollBtn";
import { isBrowser, isMobile } from 'react-device-detect';

export class HomeQRPayment extends React.Component {
	constructor(props){
		super(props);
		this.state={
			homeQRPaymentHeight: null
		};
		this.updateHomeQRPaymentHeight = this.updateHomeQRPaymentHeight.bind(this);
	}
	
	componentDidMount(){
		this.updateHomeQRPaymentHeight();
		window.addEventListener('resize', this.updateHomeQRPaymentHeight);

	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHomeQRPaymentHeight);
	}

	updateHomeQRPaymentHeight(){
		setTimeout(() => {
			const homeQRPaymentHeight = this.homeQRPaymentHeight.clientHeight;
			this.setState({
				homeQRPaymentHeight
			});
			this.props.requestHomeQRPaymentHeight(homeQRPaymentHeight);
		}, 10);
	}
	
	render() {

		var containerHeight = {
			height: (this.props.getCalc() * 0.95) + 'px'	
		}

		var imageHeight = {
			maxHeight: ((this.props.getCalc() * 0.95)-30) + 'px',
			paddingTop: '1em'
		}

		return(
			<div className="sections--container background-color--magenta font--white rounded--corner home-rounded-box--width margin-left-right--auto">
				<section style={isBrowser ? containerHeight : {height:'auto'}} className="section--container overflow--hidden flex--centralise padding-top--2em padding-bottom--2em" ref={(homeQRPaymentHeight) => this.homeQRPaymentHeight = homeQRPaymentHeight}>
					<div className="column--left column--left--fluid text-column display--inline-block">
						<h1>QR payment</h1>
						<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Paying with the app is as easy as 1-2-3!<br /><br />Step 1: Open the App<br />
Step 2: Scan the QR code at the terminal<br />Step 3: Payment successful</span>
						<ScrollBtn borderColor={"#fbb23c"} fontColor={"#fbb23c"}/>
					</div>
					<div className="column--right column--right--fluid display--inline-block image-column padding-bottom--2em">
						<img src="images/home-qrpay.png" className="max-width--110 display--block  margin-left-right--auto resize-image--220" style={isBrowser ? imageHeight : {height:'auto'}}/>
					</div>
				</section>
			</div>
		);
	}
}