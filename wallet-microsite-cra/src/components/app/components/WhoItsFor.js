import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { isBrowser, isMobile } from 'react-device-detect';

const aeonBodycopy = `Sign up to become an AEON Member and enjoy all the perks, convenience and exclusive benefits available.`;

const spaceSaverBodycopy = `The app is a simpler way to carry cash, coins, credit cards, coupons and member cards. Get the AEON Wallet app now!`;

const bargainHunterBodycopy = `Nobody ever says no to a good deal. Look out for the AEON PAY logo at the counters of our extensive list of merchant partners, AEON stores, AEON BiG hypermarkets, AEON MaxValu, AEON MaxValu Prime and AEON Wellness.`;

const aeonCustomers = {
	bodycopy: aeonBodycopy,
	display: "none",
	imageName: "whoitsfor_aeoncustomers",
	backgroundColor: "background-color--linear-gradient--responsive--linear-gradient",
	fontColor: "font--dark-grey",
	aeonCustomerLinkColor: "font--orange"

}

const spaceSavers = {
	bodycopy: spaceSaverBodycopy,
	display: "none",
	imageName: "whoitsfor_spacesavers",
	backgroundColor: "background-color--dark-magenta--responsive--linear-gradient",
	fontColor: "font--white",
	spaceSaverLinkColor: "font--orange",
	specialNav: "special-nav--color font--white"
}

const bargainHunters = {
	bodycopy: bargainHunterBodycopy,
	display: "inline-block",
	imageName: "whoitsfor_bargainhunters",
	backgroundColor: "background-color--orange--responsive--linear-gradient",
	fontColor: "font--dark-magenta",
	bargainHunterLinkColor: "font--orange"
}

const arrayCustomerTypes = [aeonCustomers, spaceSavers, bargainHunters];

export class WhoItsFor extends React.Component {

	constructor(props){
		super(props);

		this.state={
			windowHeight: null,
			headerHeight: null,
			footerHeight: null,
			sectionHeight: null,
			customerType: arrayCustomerTypes[0],
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
			// console.log('section height is ' + heightSection);
			// console.log('window height is '+ heightWindow);
			
		},210);

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

	onClickAEONCustomers(){
		this.setState({
			customerType: arrayCustomerTypes[0]
		});
	};

	onClickSpaceSavers(){
		this.setState({
			customerType: arrayCustomerTypes[1]
		});
		// this.state.customerTypes.specialNav;
	};

	onClickBargainHunters(){
		this.setState({
			customerType: arrayCustomerTypes[2]
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
							<h1>Who it's for</h1>

							{/* the sub nav will take some properties to populate the bar so that it can be reused for later sections. (only if have the time) */}
							<div className="subnav--container text-transform--uppercase font--white background-color--magenta padding--0-5em display--inline-block rounded--corner--20 font--bodycopy">
								<span className={"padding--0-5em " + this.state.customerType.aeonCustomerLinkColor} onClick={() => this.onClickAEONCustomers()} >AEON Customers</span>
								<span className={"padding--0-5em " + this.state.customerType.spaceSaverLinkColor}  onClick={() => this.onClickSpaceSavers()} >Minimalists</span>
								<span className={"padding--0-5em " + this.state.customerType.bargainHunterLinkColor} onClick={() => this.onClickBargainHunters()} >Deal Hunters</span>
							</div>
							<div className="padding-top--1em height--120px">
								{/*<img src="images/aeon-pay-logo-small.png" className={ "max-width--15 vertical-align--top padding-right--1em display--" + this.state.customerType.display } />*/}
								<span className="max-width--85 font--bodycopy display--inline-block">{this.state.customerType.bodycopy}</span>
							</div>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src={"images/" + this.state.customerType.imageName + ".png"} className="max-width--110" style={isBrowser ? setImageHeight : {height:'auto'}}/>
						</div>
					</section>
					
					<section className="section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--2em" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block "}>
							<h1>For AEON customers</h1>
							<div className="padding-top--1em height--120px">
								<span className="max-width--85 font--bodycopy display--inline-block">{aeonCustomers.bodycopy}</span>
							</div>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src={"images/" + aeonCustomers.imageName + ".png"} className="max-width--110 resize-image--300"/>
						</div>
					</section>

					<section className="section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-top--2em padding-bottom--2em" ref={(section) => this.section = section}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block "}>
							<h1>For minimalists</h1>
							<div className="padding-top--1em height--120px">
								<span className="max-width--85 font--bodycopy display--inline-block">{spaceSavers.bodycopy}</span>
							</div>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src={"images/" + spaceSavers.imageName + ".png"} className="max-width--110 resize-image--300"/>
						</div>
					</section>

					<section className="section--container overflow--hidden desktop--hide--responsive--flex padding-bottom--5em height--auto padding-top--2em padding-bottom--2em" ref={(section) => this.section = section}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block "}>
							<h1>For deal hunters</h1>
							<div className="padding-top--1em height--120px">
								<span className="max-width--85 font--bodycopy display--inline-block">{bargainHunters.bodycopy}</span>
							</div>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src={"images/" + bargainHunters.imageName + ".png"} className="max-width--110 resize-image--300"/>
						</div>
					</section>
				</div>
				<Footer requestFooterHeight={this.getFooterHeightFromChild} sendFooterNavColor={navSpecial} sendFooterBackgroundColor={isMobile ? backgroundColorWhite : ""}/>
			</div>
		);
	}
}