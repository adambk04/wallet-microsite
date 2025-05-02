import React from "react";
import { DownloadBtns } from "./DownloadBtns";
import { ScrollBtn } from "./ScrollBtn";
import { isBrowser, isMobile } from 'react-device-detect';

export class HomeSafeSecure extends React.Component {
	constructor(props){
		super(props);
		this.state={
			homeSafeSecureHeight: null,
		};
		this.updateHomeSafeSecureHeight = this.updateHomeSafeSecureHeight.bind(this);
	}
	
	componentDidMount(){
		this.updateHomeSafeSecureHeight();
		window.addEventListener('resize', this.updateHomeSafeSecureHeight);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHomeSafeSecureHeight);
	}

	updateHomeSafeSecureHeight(){
		setTimeout(() => {
			const homeSafeSecureHeight = this.homeSafeSecureHeight.clientHeight;
			this.setState({
				homeSafeSecureHeight,
				
			});
			this.props.requestHomeSafeSecureHeight(homeSafeSecureHeight);
		}, 10);
	}

	render() {

		var containerHeight = {
			height: (this.props.getCalc() * 0.95) + 'px'
		}

		var imageHeight = {
			maxHeight: ((this.props.getCalc() * 0.95)-30) + 'px',
		}

		return(
			<div className="sections--container background-color--dark-magenta font--white rounded--corner home-rounded-box--width margin-left-right--auto">
				<section style={isBrowser ? containerHeight : {height:'auto'}} className="section--container overflow--hidden flex--centralise padding-top--2em padding-bottom--2em" ref={(homeSafeSecureHeight) => this.homeSafeSecureHeight = homeSafeSecureHeight}>
					<div className="column--left column--left--fluid text-column display--inline-block">
						<h1>Safe &amp; secure</h1>
						<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">AEON Wallet keeps you safe and secure so that you can enjoy the peace of mind that comes with using this app because it is digitally safe with multi-factor biometric  authentication, anti-phishing features and more.<br/><br/>Check out the <a href="/security-tips" className="font--orange">Security Tips</a> to protect yourself further.</span>
					</div>
					<div className="column--right column--right--fluid display--inline-block image-column">
						<img src="images/home-safesecure.png" className="max-width--110 display--block  margin-left-right--auto resize-image--300" style={isBrowser ? imageHeight : {height:'auto'}}/>
					</div>
				</section>
			</div>
		);
	}
}