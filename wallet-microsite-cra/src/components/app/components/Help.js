import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { LockAccount } from "./LockAccount"

const lockAccount = {
	backgroundColor: "background-color--dark-magenta",
	headerFontColor: "font--white",
	footerClasses: "position--absolute",
	lockAccountLinkColor: "font--dark-magenta",
	specialNav: "special-nav--color font--white"
};

const arraySection = [lockAccount];

export class Help extends React.Component {

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

    calcOffset = () => {
    	const calc = (this.state.windowHeight - (this.state.headerHeight + this.state.footerHeight + this.state.sectionHeight))/2;
    	return calc;
    }

	render(){

		var offset = {
			marginTop: this.calcOffset() + 'px'
		};

		var marginOffset = {
			paddingTop: 'calc(2em + ' + this.state.headerHeight + 'px)'
		}
		
		const navSpecial = this.state.section.specialNav;

		return(
			<div className={"container height--100 " + this.state.section.backgroundColor}>
				<Header requestHeaderHeight={this.getHeaderHeightFromChild} sendNavColor={navSpecial}/>
				<div className="sections--container padding-top--2em" style={marginOffset}>
					<div className="text-align--center">
						<h1 className={this.state.section.headerFontColor}>Need help locking your account?</h1>
					</div>
					<LockAccount />
				</div>
				<Footer requestFooterHeight={this.getFooterHeightFromChild} sendSelectedClassesToFooter = {this.state.section.footerClasses} sendFooterNavColor = {"font--white special-nav--color"} />
			</div>
		);
	}
}