import React from "react";
import { DownloadBtns } from "./DownloadBtns";
import { ScrollBtn } from "./ScrollBtn";
import { isBrowser, isMobile } from 'react-device-detect';

export class HomeAEONMemberPlus extends React.Component {
	constructor(props){
		super(props);
		this.state={
			homeAEONMemberPlusHeight: null
		};
		this.updateHomeAEONMemberPlusHeight = this.updateHomeAEONMemberPlusHeight.bind(this);
	}
	
	componentDidMount(){
		setTimeout(()=>{
			this.updateHomeAEONMemberPlusHeight();
		},15);
		
		window.addEventListener('resize', this.updateHomeAEONMemberPlusHeight);

	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHomeAEONMemberPlusHeight);
	}

	updateHomeAEONMemberPlusHeight(){
		
			const homeAEONMemberPlusHeight = this.homeAEONMemberPlusHeight.clientHeight;
			this.setState({
				homeAEONMemberPlusHeight: homeAEONMemberPlusHeight
			});
			this.props.requestHomeAEONMemberPlusHeight(homeAEONMemberPlusHeight);
		
	}

	render() {

		// var homeMarginOffset = {
		// 	marginTop: this.props.sendMarginToChild() + 'px'
		// };

		var setContainerHeight = {
			height: this.props.sendHeightToSectionContainer() + 'px'
		};

		var setBearHeight = {
			maxHeight: (this.props.sendHeightToSectionContainer()-20) + 'px'
		}

		return(
			<div className="sections--container">
				<section className="section--container overflow--hidden flex--centralise padding-bottom--2em" ref={(homeAEONMemberPlusHeight) => this.homeAEONMemberPlusHeight = homeAEONMemberPlusHeight} style={isBrowser ? setContainerHeight : {height:'auto'}}>
					<div className="column--left column--left--fluid--home--aeonmemberplus text-column display--inline-block">
						<h1 className="font--magenta">The most rewarding card for your AEON Wallet</h1>
						<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">The AEON Member Plus Visa Card is a great prepaid card for your daily use at home in Malaysia or when you travel that can earn you double the points. Apply now!</span><br/><br/><span className="font--bodycopy font-size--10 padding-top--1em padding-bottom--1em display--inline-block">*The app can be used with any <a href="https://www.aeoncredit.com.my/aeon-cards/aeon-credit-cards" target="_blank" className="font--magenta">AEON credit/prepaid card</a>.</span>
						<ScrollBtn borderColor={"#b41e8e"}/>
					</div>
					<div className="column--right--fluid--home--aeonmemberplus display--inline-block image-column">
						<img src="images/home-aeonmemberplus.png" className="max-width--120 resize-image--300" style={isBrowser ? setBearHeight : {height:'auto'}}/>
					</div>

				</section>
			</div>
		);
	}
}