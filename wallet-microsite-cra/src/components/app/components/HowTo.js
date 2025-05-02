import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { isBrowser, isMobile } from 'react-device-detect';

const aeonBodycopy = `Here's a short video on how to use the AEON Wallet App!`;

const aeonCustomers = {
	header: "How to use?",
	bodycopy: aeonBodycopy,
	display: "none",
	imageName: "whoitsfor_aeoncustomers",
	videoName: "aeon-final-new-final",
	backgroundColor: "background-color--linear-gradient--responsive--linear-gradient",
	fontColor: "font--dark-grey",
	aeonCustomerLinkColor: "font--orange"

}

const arrayHowTo = [aeonCustomers];

export class HowTo extends React.Component {

	constructor(props){
		super(props);

		this.state={
			windowHeight: null,
			headerHeight: null,
			footerHeight: null,
			sectionHeight: null,
			customerType: arrayHowTo[0],
			isDesktop: true
		};

		this.updateWindowHeight = this.updateWindowHeight.bind(this);
	}

	componentDidMount(){
		this.updateWindowHeight();
		window.addEventListener('resize', this.updateWindowHeight);
	}

	componentWillUnmount(){
		this.updateWindowHeight();
		window.removeEventListener('resize', this.updateWindowHeight);
	}


	updateWindowHeight(){
		setTimeout(() => {
			const heightWindow = window.innerHeight;
			const heightSection = this.section.clientHeight;
			this.setState({
				windowHeight: heightWindow,
				sectionHeight: heightSection
			});
			this.getHeaderHeightFromChild();
			this.getFooterHeightFromChild();
		},210);

	};

	restartVideo = () => {
		this.video.pause();
		this.video.currentTime = 0;
		this.video.load();
	};

	getHeaderHeightFromChild = (heightFromChildHeader) => {
		this.setState({
			headerHeight: heightFromChildHeader
		});
	};

	getFooterHeightFromChild = (heightFromChildFooter) => {
		this.setState({
			footerHeight: heightFromChildFooter

		});
	};

	calcOffset = () => {
		const calc = ((this.state.windowHeight - (this.state.headerHeight + this.state.footerHeight + this.state.sectionHeight))/2) + this.state.headerHeight;
		return calc;
	};

	calcContainerHeight = () => {
		const calc = this.state.windowHeight - this.state.headerHeight - this.state.footerHeight;
		return calc;
	};


	render(){

		var offset = {
			top: '96px',
			height: this.calcContainerHeight() + 'px'
		};

		var setImageHeight = {
			maxHeight: this.calcContainerHeight() + 'px'
		}

		var backgroundColorWhite = "background-color--white--opacity--70";


		const navSpecial = this.state.customerType.specialNav;

		return(
			<div className={"container height--100 " + this.state.customerType.backgroundColor}>
				<Header requestHeaderHeight={this.getHeaderHeightFromChild} sendNavColor={navSpecial} sendHeaderBackgroundColor={isMobile ? backgroundColorWhite : ""}/>
				<div className="sections--container" >
					<section className="section--container overflow--hidden flex--centralise responsive--hide" ref={(section) => this.section = section} style={offset}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block " + this.state.customerType.fontColor}>
							<h1>{this.state.customerType.header}</h1>

							<div className="padding-top--1em height--120px">
								<span className="max-width--85 font--bodycopy display--inline-block">{this.state.customerType.bodycopy}</span>
							</div>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<video ref={video => this.video = video} controlsList="nodownload" width={isMobile ? "95%" : "100%"} preload="auto" controls src="https://s3-ap-southeast-1.amazonaws.com/my.com.aeonwallet/microsite/public/aeon-final-new-final.mp4" poster="/images/aeon-final-new-final-placeholder.jpg" type="video/mp4">
							</video>
						</div>
					</section>

					<section className="section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--2em" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block "}>
							<h1>{this.state.customerType.header}</h1>
							<div className="padding-top--1em height--120px">
								<span className="max-width--85 font--bodycopy display--inline-block">{aeonCustomers.bodycopy}</span>
							</div>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
								<!-- ##### HOW-TO-VIDEO-LINK -->
						</div>
					</section>
				</div>
				<Footer requestFooterHeight={this.getFooterHeightFromChild} sendFooterNavColor={navSpecial} sendFooterBackgroundColor={isMobile ? backgroundColorWhite : ""}/>
			</div>
		);
	}
}
