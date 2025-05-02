import React from "react";
import { DownloadBtns } from "./DownloadBtns";
import { ScrollBtn } from "./ScrollBtn";
import { isBrowser, isMobile } from 'react-device-detect';

export class HomeTopUp extends React.Component {
	constructor(props){
		super(props);
		this.state={
			homeTopUpHeight: null
		};
		this.updateHomeTopUpHeight = this.updateHomeTopUpHeight.bind(this);
	}
	
	componentDidMount(){
		this.updateHomeTopUpHeight();
		window.addEventListener('resize', this.updateHomeTopUpHeight);

	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHomeTopUpHeight);
	}

	updateHomeTopUpHeight(){
		setTimeout(() => {
			const homeTopUpHeight = this.homeTopUpHeight.clientHeight;
			this.setState({
				homeTopUpHeight
			});
			this.props.requestHomeTopUpHeight(homeTopUpHeight);
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
			<div className="sections--container background-color--magenta font--white rounded--corner home-rounded-box--width margin-left-right--auto">
				<section style={isBrowser ? containerHeight : {height:'auto'}} className="section--container overflow--hidden flex--centralise padding-top--2em padding-bottom--2em" ref={(homeTopUpHeight) => this.homeTopUpHeight = homeTopUpHeight}>
					<div className="column--left column--left--fluid text-column display--inline-block">
						<h1>Instant top-up</h1>
						<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Now you can top up conveniently anywhere, anytime with no extra charges.</span>
						<ScrollBtn borderColor={"#fbb23c"} fontColor={"#fbb23c"}/>
					</div>
					<div className="column--right column--right--fluid display--inline-block image-column">
						<img src="images/home-topup.png" className="max-width--110 display--block margin-left-right--auto resize-image--220" style={isBrowser ? imageHeight : {height:'auto'}}/>
					</div>
				</section>
			</div>
		);
	}
}