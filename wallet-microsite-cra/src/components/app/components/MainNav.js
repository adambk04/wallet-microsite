import React from 'react';
import { isIOS, isAndroid, AndroidView, IOSView } from 'react-device-detect';
import ReactGA from 'react-ga';

export class MainNav extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isActive: true
		};
	};

	handleClickEventGA(e){
		ReactGA.event({
			category: 'Download Button on Main Nav',
			action: e
		});
	}


	// mouseEnter = () => {
	// 	let topHamburger = document.querySelector('.hamburger-inner-top');
	// 	let bottomHamburger = document.querySelector('.hamburger-inner-bottom');
	// 	if (this.state.isActive){
	// 		topHamburger.style.marginTop = "-2px";
	// 		bottomHamburger.style.marginBottom = "-2px";
	// 	}
		
	// };

	// mouseLeave = () => {
	// 	let topHamburger = document.querySelector('.hamburger-inner-top');
	// 	let bottomHamburger = document.querySelector('.hamburger-inner-bottom');

	// 	topHamburger.style.marginTop = "0px";
	// 	bottomHamburger.style.marginBottom = "0px";
	// };

	onUserInteraction = () => {
		this.setState({
			isActive: !this.state.isActive
		});
		if(this.state.isActive == true){
			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";
		}
		else {
			document.body.style.overflow = "auto";
			document.body.style.position = "relative";
		}
		
	};

	render(){

		const androidUrl = "https://play.google.com/store/apps/details?id=today.wander.acs";
		const iosUrl = "https://itunes.apple.com/app/id1371474291";

		return(
			<nav className="font--bodycopy nav--magenta ">
				<div className={"desktop__nav " + this.props.sendNavWhiteToGrandChild}>
					<ul>
						<li>
							<a href={androidUrl} onClick={()=>{this.handleClickEventGA('click-android')}}>
								<img src="images/button_google-play.png" />
								<div className="padding-top--0-5em text-align--center font-size--10 text-align--center text-transform--none">Android 4.1 & above</div>
							</a>
						</li>
						<li>
							<a href={iosUrl} onClick={()=>{this.handleClickEventGA('click-ios')}}>
								<img src="images/button_app-store.png" />
								<div className="padding-top--0-5em text-align--center font-size--10 text-align--center text-transform--none">iOS9 & above</div>
							</a>
						</li>
						<li><a href={"/"}>home</a></li>
						<li><a href={"/how-to"}>user guide</a></li>
						<li><a href={"/security-tips"}>security tips</a></li>
						<li><a href={"/help"}>help</a></li>
						<li><a href={"/faq"}>faq</a></li>
						<li><a href={"/promotions"}>promotions</a></li>
					</ul>
				</div>
				
				<div className={"hamburger hamburger--spin " + (this.state.isActive ? '' : 'is-active')} onClick={this.onUserInteraction}>
					<div className="hamburger-box">
						<div className="hamburger-inner">
							<div className="hamburger-inner-top"></div>
							<div className="hamburger-inner-bottom"></div>
						</div>
					</div>
				</div>
				<div className={"menu font__menu responsive " + (this.state.isActive ? '' : 'show opacity--1')}>
					<ul className="menu__items">
						<li><a href={"/"}>home</a></li>
						<li><a href={"/how-to"}>user guide</a></li>
						<li><a href={"/security-tips"}>security tips</a></li>
						<li><a href={"/help"}>help</a></li>
						<li><a href={"/faq"}>faq</a></li>
						<li><a href={"/promotions"}>promotions</a></li>
						<AndroidView device={isAndroid}>
							<li>
								<a href={androidUrl}>
									<img src="images/button_google-play.png" />
									<div className="padding-top--0-5em text-align--center font-size--10 text-align--center text-transform--none">Android 4.1 & above</div>
								</a>
							</li>
						</AndroidView>
						<IOSView device = {isIOS}>
							<li>
								<a href={iosUrl}>
									<img src="images/button_app-store.png" />
									<div className="padding-top--0-5em text-align--center font-size--10 text-align--center text-transform--none">iOS9 & above</div>
								</a>
							</li>
						</IOSView>
					</ul>
				</div>
				<div className={"overlay "  + (this.state.isActive ? '' : 'show opacity--1')}></div>
			</nav>
		);
	}
}