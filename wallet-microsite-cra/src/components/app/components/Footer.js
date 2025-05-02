import React from 'react';
import {isSourceEwallet} from "./Util";

export class Footer extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			footerHeight: 90,
		};
		this.updateFooterHeight = this.updateFooterHeight.bind(this);
	}
	
	componentDidMount(){
		setTimeout(()=>{
			this.updateFooterHeight();
		},200);
			
		window.addEventListener('resize', this.updateFooterHeight);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateFooterHeight);
	}

	updateFooterHeight(){
		
			const footerHeight = this.footerHeight.clientHeight;
			const getFooterClass = this.props.sendSelectedClassesToFooter;
			this.setState({
				// footerHeight: footerHeight
				footerHeight: 90
			});
			this.props.requestFooterHeight(footerHeight);
		
	}


	render(){

		var marginStyle13px = {
			marginTop: '13px'
		}

		var footerStyles = {
			fontSize: '10px'
		}

		var footerLogoHeight = {
			height: '35px',
			marginRight: '2em'
		}


		return(
			<footer className={isSourceEwallet(window.location) ? "hide-all" : "text-align--center font--bodycopy position--fixed bottom--0 " + this.props.sendSelectedClassesToFooter + " " + this.props.sendFooterBackgroundColor}  style={footerStyles} ref={(footHeight) => this.footerHeight = footHeight} >
				{/*
					<img src="images/footer_logo_and_bar.png" className="width--100 responsive--hide" />	
				*/}
				<div className="footer__flex responsive--hide padding-top--10">
					<img src="images/colour_bar_left.png" className="height--100" />
					<div>
						<a href="https://www.aeoncredit.com.my/" target="_blank"><img src="images/footer_logo_01.png" style={footerLogoHeight} /></a>
						<a href="http://www.aeonretail.com.my/" target="_blank"><img src="images/footer_logo_02.png" style={footerLogoHeight} /></a>
						<a href="http://www.aeonbig.com.my/" target="_blank"><img src="images/footer_logo_03.png" style={footerLogoHeight} /></a>
						<a href="http://www.aeonretail.com.my/maxvalu/" target="_blank"><img src="images/footer_logo_04.png" style={footerLogoHeight} /></a>
						<a href="http://www.aeonretail.com.my/maxvalu/" target="_blank"><img src="images/footer_logo_05.png" style={footerLogoHeight} /></a>
						<a href="http://www.aeonretail.com.my/wellness/index.php" target="_blank"><img src="images/footer_logo_06.png" style={footerLogoHeight} /></a>
						
					</div>
					<img src="images/colour_bar_right.png" className="height--100" />
				</div>
				
				<div className={"margin-top--1em margin-bottom--1em nav--magenta " + this.props.sendFooterNavColor} id="footer-nav">
					<ul>
						<li className="display--inline-block"><a href="https://www.aeoncredit.com.my/aeon-corporate/about-us" target="_blank">Corporate</a></li>
						<span>&nbsp;|&nbsp;</span>
						<li className="display--inline-block"><a href={"/terms-and-conditions"}>T&C</a></li>
						<span>&nbsp;|&nbsp;</span>
						<li className="display--inline-block"><a href="https://www.aeoncredit.com.my/privacy-policy" target="_blank">Privacy Policy</a></li>
						<span>&nbsp;| Copyright © 2018 AEON Credit Service (M) Berhad. All Rights Reserved.</span>
						<a href="https://www.facebook.com/AEONCredit/" target="_blank">
							<img src="images/button_facebook.png" className="vertical-align--middle margin-left--1em" />	
						</a>
					</ul>
				</div>
			</footer>
		);
	}
	
}