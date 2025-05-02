import React from "react";
import { DownloadBtns } from "./DownloadBtns";
import { ScrollBtn } from "./ScrollBtn";
import { isBrowser, isMobile } from 'react-device-detect';

export class HomeEarnPoints extends React.Component {
	constructor(props){
		super(props);
		this.state={
			homeEarnPointsHeight: null,
		};
		this.updateHomeEarnPointsHeight = this.updateHomeEarnPointsHeight.bind(this);
	}
	
	componentDidMount(){
		this.updateHomeEarnPointsHeight();
		window.addEventListener('resize', this.updateHomeEarnPointsHeight);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHomeEarnPointsHeight);
	}

	updateHomeEarnPointsHeight(){
		setTimeout(() => {
			const homeEarnPointsHeight = this.homeEarnPointsHeight.clientHeight;
			this.setState({
				homeEarnPointsHeight,
				
			});
			this.props.requestHomeEarnPointsHeight(homeEarnPointsHeight);
		}, 10);
	}

	render() {

		var containerHeight = {
			height: (this.props.getCalc() * 0.95) + 'px'
		}

		return(
			<div className="sections--container background-color--dark-magenta font--white rounded--corner home-rounded-box--width margin-left-right--auto">
				<section style={isBrowser ? containerHeight : {height:'auto'}} className="section--container overflow--hidden flex--centralise padding-top--2em padding-bottom--2em" ref={(homeEarnPointsHeight) => this.homeEarnPointsHeight = homeEarnPointsHeight}>
					<div className="column--left column--left--fluid text-column display--inline-block">
						<h1>Earn points</h1>
						<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Time to leave that member card at home.
						Now all your points are stored in the app so you can earn points wherever you go. Get the app now and you can even convert points to cash!</span>
						<ScrollBtn borderColor={"#fbb23c"} fontColor={"#fbb23c"}/>
					</div>
					<div className="column--right column--right--fluid display--inline-block image-column">
						<img src="images/home-earnpoints.png" className="max-width--110 display--block  margin-left-right--auto"/>
					</div>
				</section>
			</div>
		);
	}
}