import React from "react";
import { DownloadBtns } from "./DownloadBtns";
import { Link, withRouter } from "react-router-dom";
import { ScrollBtn } from "./ScrollBtn";
import { isBrowser, isMobile } from 'react-device-detect';

export class HomeCheckBalance extends React.Component {
	constructor(props){
		super(props);
		this.state={
			homeCheckBalanceHeight: null
		};
		this.updateHomeCheckBalanceHeight = this.updateHomeCheckBalanceHeight.bind(this);

	}
	
	componentDidMount(){
		this.updateHomeCheckBalanceHeight();
		window.addEventListener('resize', this.updateHomeCheckBalanceHeight);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHomeCheckBalanceHeight);
	}

	updateHomeCheckBalanceHeight(){
		setTimeout(() => {
			const homeCheckBalanceHeight = this.homeCheckBalanceHeight.clientHeight;
			this.setState({
				homeCheckBalanceHeight
			});
			this.props.requestHomeCheckBalanceHeight(homeCheckBalanceHeight);
		}, 10);
	}

	render() {

		var containerHeight = {
			height: ((this.props.getCalc() * 0.95)) + 'px'
		}

		return(

			<div className="sections--container background-color--purple font--white rounded--corner home-rounded-box--width margin-left-right--auto">
				<section style={isBrowser ? containerHeight : {height:'auto'}} className="section--container overflow--hidden flex--centralise padding-top--2em padding-bottom--2em" ref={(homeCheckBalanceHeight) => this.homeCheckBalanceHeight = homeCheckBalanceHeight}>
					<div className="column--left column--left--fluid image-column display--inline-block">
						<img src="images/home-checkbalance.png" className="max-width--110 display--block margin-left-right--auto resize-image--300"/>
					</div>
					<div className="column--right column--right--fluid display--inline-block text-column">		
						<h1>Check balance</h1>
						<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Now you can check your balance and transaction history in real-time.</span>
						<ScrollBtn borderColor={"#fbb23c"} fontColor={"#fbb23c"}/>
					</div>
				</section>
			</div>
		);
	}
}