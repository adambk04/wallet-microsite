import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { FAQGeneral } from "./FAQGeneral";
import { FAQPayments } from "./FAQPayments";
import { FAQSecurity } from "./FAQSecurity";
import { FAQLost } from "./FAQLost";
import { FAQLoyalty } from "./FAQLoyalty";
import { FAQResponsive } from "./FAQResponsive"; 

const general = {
	generalLinkColor: "font--orange",
	generalDisplay: "display--block",
	footerClasses: "position--relative"
};

const payments = {
	paymentsLinkColor: "font--orange",
	paymentsDisplay: "display--none",
	footerClasses: "position--relative",
};

const security = {
	securityLinkColor: "font--orange",
	securityDisplay: "display--none",
	footerClasses: "position--absolute",
};

const lost = {
	lostLinkColor: "font--orange",
	lostDisplay: "display--none"
};

const loyalty = {
	loyaltyLinkColor: "font--orange",
	loyaltyDisplay: "display--none"
};

const arraySection = [general, payments, security, lost, loyalty];

export class FAQ extends React.Component {
	constructor(props){
		super(props);
		this.state={
			windowHeight: null,
			headerHeight: null,
			footerHeight: null,
			section: arraySection[0]
		}
		this.updateWindowHeight = this.updateWindowHeight.bind(this);
		this.onClickPayments = this.onClickPayments.bind(this);

	}

	componentDidMount(){
		this.updateWindowHeight();
		window.addEventListener('resize', this.updateWindowHeight);
	}

	componentWillMount(){
		this.setState({
			section: arraySection[0]
		})
	}

	componentWillUnmount(){
		this.updateWindowHeight();
		window.removeEventListener('resize', this.updateWindowHeight);
	}



   updateWindowHeight(){
    	setTimeout(() => {
			const heightWindow = window.innerHeight;
			// const heightSection = this.section.clientHeight;
			this.setState({
				windowHeight: heightWindow,
				// sectionHeight: heightSection
			});
			this.getHeaderHeightFromChild();
			this.getFooterHeightFromChild();
	   	// console.log('section height is ' + heightSection);
	   	// console.log('window height is '+ heightWindow);
	    	
   	},15);	
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

	onClickGeneral(){
		general.generalDisplay = "display--block";
		payments.paymentsDisplay = "display--none";
		security.securityDisplay = "display--none";
		lost.lostDisplay = "display--none";
		loyalty.loyaltyDisplay = "display--none";
		this.setState({
			section: arraySection[0]
		});
	};

	onClickPayments = () => {

		general.generalDisplay = "display--none";
		payments.paymentsDisplay = "display--block";
		security.securityDisplay = "display--none";
		lost.lostDisplay = "display--none";
		loyalty.loyaltyDisplay = "display--none";

		this.setState({
			section: arraySection[1]
		});		
	};

	onClickSecurity(){
		general.generalDisplay = "display--none";
		payments.paymentsDisplay = "display--none";
		security.securityDisplay = "display--block";
		lost.lostDisplay = "display--none";
		loyalty.loyaltyDisplay = "display--none";

		this.setState({
			section: arraySection[2]
		});
	};

	onClickLost(){
		general.generalDisplay = "display--none";
		payments.paymentsDisplay = "display--none";
		security.securityDisplay = "display--none";
		lost.lostDisplay = "display--block";
		loyalty.loyaltyDisplay = "display--none";
		this.setState({
			section:arraySection[3]
		});
	};

	onClickLoyalty(){
		general.generalDisplay = "display--none";
		payments.paymentsDisplay = "display--none";
		security.securityDisplay = "display--none";
		lost.lostDisplay = "display--none";
		loyalty.loyaltyDisplay = "display--block";
		this.setState({
			section:arraySection[4]
		});
	};

	render(){

		var marginStyle = {
			paddingTop: this.state.headerHeight + "px"
		}
		var backgroundColorWhite = "background-color--white--opacity--70";

		return(
			<div className={"container height--100"} style={marginStyle}>
				<Header requestHeaderHeight={this.getHeaderHeightFromChild} sendHeaderBackgroundColor={backgroundColorWhite}/>
				<div className="sections--container padding-top--2em width--80 margin-left-right--auto responsive--hide">
					<div className="text-align--center margin-bottom--1em">
						<h1 className="font--dark-grey">Frequently Asked Questions</h1>
						<div className="subnav--container text-transform--uppercase font--white background-color--magenta padding--0-5em display--inline-block rounded--corner--20 font--bodycopy">
							<span className={"padding--0-5em " + this.state.section.generalLinkColor} onClick={() => this.onClickGeneral()} >General</span>
							<span className={"padding--0-5em " + this.state.section.paymentsLinkColor} onClick={() => this.onClickPayments()} >Payments</span>
							<span className={"padding--0-5em " + this.state.section.securityLinkColor} onClick={() => this.onClickSecurity()} >Security</span>
							<span className={"padding--0-5em " + this.state.section.lostLinkColor} onClick={() => this.onClickLost()} >Lost/Stolen</span>
							<span className={"padding--0-5em " + this.state.section.loyaltyLinkColor} onClick={() => this.onClickLoyalty()} >Loyalty Programme</span>
						</div>
					</div>
					
					<FAQGeneral sendGeneral={general.generalDisplay}/>
					<FAQPayments sendPayments={payments.paymentsDisplay}/>
					<FAQSecurity sendSecurity={security.securityDisplay}/>
					<FAQLost sendLost={lost.lostDisplay}/>
					<FAQLoyalty sendLoyalty={loyalty.loyaltyDisplay}/>
				</div>

				<div className="sections--container padding-top--2em width--80 margin-left-right--auto desktop--hide width--95--responsive">
					<div className="text-align--center margin-bottom--1em">
						<h1 className="font--dark-grey">Frequently Asked Questions</h1>
					</div>	
					<FAQResponsive/>
				</div>
				<Footer requestFooterHeight={this.getFooterHeightFromChild} sendSelectedClassesToFooter = {this.state.section.footerClasses} sendFooterBackgroundColor={backgroundColorWhite}/>
			</div>
		);
	}
}