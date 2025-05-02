import React from "react";
import { DownloadBtns } from "./DownloadBtns";
import { ScrollBtn } from "./ScrollBtn";
import { isBrowser, isMobile } from 'react-device-detect';

export class Home extends React.Component {
	constructor(props){
		super(props);
		this.state={
			homeHeight: null,
			isActive: true
		};
		this.updateHomeHeight = this.updateHomeHeight.bind(this);
	}

	componentDidMount(){
		setTimeout(()=>{
			this.updateHomeHeight();
		},15);

		window.addEventListener('resize', this.updateHomeHeight);

	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHomeHeight);
	}

	updateHomeHeight(){

			const homeHeight = this.homeHeight.clientHeight;
			this.setState({
				homeHeight: homeHeight
			});
			this.props.requestHomeHeight(homeHeight);

	}

	restartVideo = () => {
		this.video.pause();
		this.video.currentTime = 0;
		this.video.load();
	};

	onUserInteraction = () => {
		this.setState({
			isActive: !this.state.isActive
		});

		if (isBrowser){
			if(this.state.isActive == true){
				document.body.style.overflow = "hidden";
				document.body.style.position = "fixed";
			}
			else {
				document.body.style.position = "relative";
			}
		}

		else if (isMobile){
			if(this.state.isActive == true){
				document.body.style.overflow = "hidden";
				document.body.style.position = "fixed";

			}
			else {
				document.body.style.overflow = "auto";
				document.body.style.position = "relative";
			}
		}
	};

	render() {

		var homeMarginOffset = {
			marginTop: this.props.sendMarginToChild() + 'px'
		};

		var setContainerHeight = {
			height: this.props.sendHeightToSectionContainer() + 'px'
		};

		var setBearHeight = {
			maxHeight: (this.props.sendHeightToSectionContainer()-30) + 'px'
		}

		var homeButtonVideoStyle = {
			width: '200px',
			marginTop: '0.5em',
			marginBottom: '1em',
			border: '2px solid #fbb23c',
			cursor: 'pointer',
			marginLeft: 'inherit',
			marginRight: 'inherit'
		}

		return(
			<div className="sections--container" style={homeMarginOffset}>
				<section className="section--container overflow--hidden flex--centralise padding-bottom--2em" ref={(homeHeight) => this.homeHeight = homeHeight} style={isBrowser ? setContainerHeight : {height:'auto'}}>
					<div className="column--left column--left--fluid text-column display--inline-block">
						<h1 className="font--magenta">Say Hi to the new AEON Wallet App!</h1>
						<div className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Now you can pay, earn <strong>AEON Member Points</strong> and top-up your <a href="https://www.aeoncredit.com.my/aeon-cards/aeon-prepaid-cards/aeon-member-plus-visa-card" target="_blank" className="font--magenta">AEON Member Plus Visa Card</a> all on the app.</div>
						<img className="display--block" src="images/home_button_video.png" style={homeButtonVideoStyle} onClick={this.onUserInteraction} />
						<DownloadBtns fontDarkGrey={"#222222"}/>
						<ScrollBtn borderColor={"#b41e8e"}/>
					</div>
					<div className="column--right column--right--fluid display--inline-block image-column">
						<img src="images/bear.png" className="max-width--110 resize-image--300" style={isBrowser ? setBearHeight : {height:'auto'}}/>
					</div>

				</section>
				<div className={"overlay "  + (this.state.isActive ? '' : 'show opacity--1')}>
					<div className="flex--centralise width--100 height--100">
					 <!-- #####  INTRO-VIDEO-LINK-->
					</div>
					<svg className={"button--close " + (this.state.isActive ? '' : 'is-active')} onClick={() => { this.onUserInteraction(); this.restartVideo() }} width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/></svg>
				</div>
			</div>
		);
	}
}
