import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { TermsAndConditionsMarkup } from "./TermsAndConditionsMarkup";

const securityTips = {
	backgroundColor: "background-color--white",
	headerFontColor: "font--dark-grey",
	footerClasses: "position--relative",
	securityTipsLinkColor: "font--dark-magenta"
};

const arraySection = [securityTips];

export class TermsAndConditions extends React.Component {

	constructor(props){
		super(props);
		this.state={
			windowHeight: null,
			headerHeight: null,
			footerHeight: null,
			sectionHeight: null,
			section: arraySection[0]
		};

		this.updateWindowHeight = this.updateWindowHeight.bind(this);
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
    }

    getHeaderHeightFromChild = (heightFromChildHeader) => {
        this.setState({
        	headerHeight: heightFromChildHeader    	
    	});
    }

    getFooterHeightFromChild = (heightFromChildFooter) => {
        this.setState({
        	footerHeight: heightFromChildFooter
        	
    	});
    }

	render(){

		var marginOffset = {
			marginTop: this.state.headerHeight + "px"
		}

		var backgroundColorWhite = "background-color--white--opacity--70";

		return(
			<div className="container height--100">
				<Header requestHeaderHeight={this.getHeaderHeightFromChild} sendHeaderBackgroundColor={backgroundColorWhite}/>
				<div className="sections--container padding-top--2em linear-gradient" style={marginOffset}>
					<div className="text-align--center">
						<h1 className={this.state.section.headerFontColor}>Terms & Conditions</h1>
					</div>
				</div>
				<TermsAndConditionsMarkup />
				<Footer requestFooterHeight={this.getFooterHeightFromChild} sendSelectedClassesToFooter = {this.state.section.footerClasses} sendFooterBackgroundColor={backgroundColorWhite}/>
			</div>
		);
	}
}