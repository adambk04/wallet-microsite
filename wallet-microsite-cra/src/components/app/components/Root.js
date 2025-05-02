import React from 'react';
import { render } from 'react-dom';
// import LoadingScreen from 'react-loading-screen';
import scrollToComponent from 'react-scroll-to-component';
import WheelReact from 'wheel-react';
import { isBrowser, isMobile } from 'react-device-detect';
import '../../scss/main.scss';

import Header from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { HomeQRPayment } from "./HomeQRPayment";
import { HomeEarnPoints } from "./HomeEarnPoints";
import { HomeTopUp } from "./HomeTopUp";
import { HomeCheckBalance } from "./HomeCheckBalance";
import { HomeSafeSecure } from "./HomeSafeSecure";
import { HomeAEONMemberPlus } from "./HomeAEONMemberPlus";
import ReactGA from 'react-ga';

export class Root extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			headerHeight: 96,
			footerHeight: 90,
			homeHeight: null,
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth,
			homeAEONMemberPlusHeight: null,
			homeQRPaymentHeight: null,
			homeEarnPointsHeight: null,
			homeTopUpHeight: null,
			homeCheckBalanceHeight: null,
			homeSafeSecureHeight: null,
			arr: [{isActive: "active"}, {isActive: "active"}, {isActive: "active"}, {isActive: "active"}, {isActive: "active"}, {isActive: "active"}, {isActive: "active"}],
			activeId: 0,
			height: 0,
			width: 0
		};

		this.updateWindowHeight = this.updateWindowHeight.bind(this);
		this.getHeaderHeightFromChild = this.getHeaderHeightFromChild.bind(this);
		this.getFooterHeightFromChild = this.getFooterHeightFromChild.bind(this);
		this.getHomeHeightFromChild = this.getHomeHeightFromChild.bind(this);
		
	}

	componentDidMount(){
		this.toggleIsShowing(0);
		setTimeout(()=>{
			this.updateWindowHeight();
		}, 210); 
		window.addEventListener('resize', this.updateWindowHeight);
		
		this.calcHeight();
		this.calcOffset();
		this.containerHeight();
		scrollToComponent(this.getSectionYCoordinates0, { offset: 0, align: 'bottom', duration: 800, ease:'out-quint'});
		this.handleClickEventGA('On Say Hi section');
	}

	componentWillUnmount(){
		this.updateWindowHeight();
		window.removeEventListener('resize', this.updateWindowHeight);
		WheelReact.clearTimeout();
	}

	handleClickEventGA = (e) => {
		ReactGA.event({
			category: 'Home page',
			action: e
		});
	}


	toggleIsShowing(index){
		let a = this.state.arr.slice(); //creates the clone of the state
		
		for (var i=0; i<a.length;i++){
			a[i] = "";
		}
		
		a[index] = "active";
		
		this.setState({
			arr: a,
			activeId: index
		});

		if(isBrowser){
			WheelReact.config({
				up: () => {
					
					this.setState({
						activeId: this.state.activeId < 6 ? this.state.activeId += 1 : 6,
						arr: a
					});

					if (this.state.activeId == 0){
						scrollToComponent(this.getSectionYCoordinates0, { offset: 0, align: 'middle', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Say Hi section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[0] = "active";
					} 

					else if (this.state.activeId == 1){
						scrollToComponent(this.getSectionYCoordinates1, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Bear with cards section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[1] = "active";
					}

					else if (this.state.activeId == 2){
						scrollToComponent(this.getSectionYCoordinates2, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On QR Payment section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[2] = "active";
					}

					else if (this.state.activeId == 3){
						scrollToComponent(this.getSectionYCoordinates3, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Check Balance section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[3] = "active";
					}

					else if (this.state.activeId == 4){
						scrollToComponent(this.getSectionYCoordinates4, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Earn points section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[4] = "active";
					}

					else if (this.state.activeId == 5){
						scrollToComponent(this.getSectionYCoordinates5, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Instant top-up section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[5] = "active";
					}

					else if (this.state.activeId == 6){
						scrollToComponent(this.getSectionYCoordinates6, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Safe & secure section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[6] = "active";
					}

				},
				down: () => {
					this.setState({
						activeId: this.state.activeId > 0 ? this.state.activeId -= 1 : 0
					});
					if (this.state.activeId == 0){
						scrollToComponent(this.getSectionYCoordinates0, { offset: 0, align: 'middle', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Say Hi section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[0] = "active";
					} 

					else if (this.state.activeId == 1){
						scrollToComponent(this.getSectionYCoordinates1, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Bear with cards section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[1] = "active";
					}

					else if (this.state.activeId == 2){
						scrollToComponent(this.getSectionYCoordinates2, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On QR Payment section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[2] = "active";
					}

					else if (this.state.activeId == 3){
						scrollToComponent(this.getSectionYCoordinates3, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Check Balance section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[3] = "active";
					}

					else if (this.state.activeId == 4){
						scrollToComponent(this.getSectionYCoordinates4, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Earn points section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[4] = "active";
					}

					else if (this.state.activeId == 5){
						scrollToComponent(this.getSectionYCoordinates5, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Instant top-up section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[5] = "active";
					}

					else if (this.state.activeId == 6){
						scrollToComponent(this.getSectionYCoordinates6, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
						this.handleClickEventGA('On Safe & secure section');
						for (var i=0; i<a.length;i++){
							a[i] = "";
						}
						a[6] = "active";
					}
				}
			});
		}
			
	}

	updateWindowHeight(){	
		const heightWindow = window.innerHeight;
		const widthWindow = window.innerWidth;
		this.setState({
			windowHeight: heightWindow,
			windowWidth: widthWindow,
		});

		if (this.state.windowWidth >= 1070) {
			document.body.style.overflow = "hidden";	
		} else if (this.state.windowWidth <= 1069){
			document.body.style.overflow = "auto";
		}

		this.getHomeAEONMemberPlusHeightFromChild();
		this.getHomeQRPaymentHeightFromChild();
		this.getHomeEarnPointsHeightFromChild();
		this.getHomeTopUpHeightFromChild();
		this.getHomeCheckBalanceHeightFromChild();
		this.getHomeSafeSecureHeightFromChild();
		this.backgroundColorWhite();
		console.log('headerHeight ' + this.state.headerHeight);
		console.log('footerHeight ' + this.state.footerHeight);


	}

	getHeaderHeightFromChild = (heightFromChildHeader) => {
		this.setState({
			// headerHeight: heightFromChildHeader    	
			headerHeight: 96
		});
	};

	getFooterHeightFromChild = (heightFromChildFooter) => {
		this.setState({
			// footerHeight: heightFromChildFooter	
			footerHeight: 90
		});
	};

	getHomeHeightFromChild = (heightFromChildHome) => {
		this.setState({
			homeHeight: heightFromChildHome
		});
	};

	getHomeAEONMemberPlusHeightFromChild = (heightFromChildAEONMemberPlus) => {
		this.setState({
			homeAEONMemberPlusHeight: heightFromChildAEONMemberPlus
		});
	};

	getHomeQRPaymentHeightFromChild = (heightFromChildHomeQRPayment) => {
		this.setState({
			homeQRPaymentHeight: heightFromChildHomeQRPayment
		});
	};

	getHomeEarnPointsHeightFromChild = (heightFromChildHomeEarnPoints) => {
		this.setState({
			homeEarnPointsHeight: heightFromChildHomeEarnPoints
		});
	};

	getHomeTopUpHeightFromChild = (heightFromChildHomeTopUp) => {
		this.setState({
			homeTopUpHeight: heightFromChildHomeTopUp
		});
	};

	getHomeCheckBalanceHeightFromChild = (heightFromChildHomeCheckBalance) => {
		this.setState({
			homeCheckBalanceHeight: heightFromChildHomeCheckBalance
		});
	};

	getHomeSafeSecureHeightFromChild = (heightFromChildHomeSafeSecure) => {
		this.setState({
			homeSafeSecureHeight: heightFromChildHomeSafeSecure
		});
	};

	calcOffset = () =>{
		const headHeight = this.state.headerHeight;
		return headHeight;  
	};

	containerHeight = () => {
		const winHeight = this.state.windowHeight;
		const headHeight = this.state.headerHeight;
		const footHeight = this.state.footerHeight;
		const totalHeight = headHeight + footHeight;
		const containerHeight = winHeight - totalHeight;
		return containerHeight;
	};

	calcHeight = () => {
		const headerHeight = this.state.headerHeight;
		const footerHeight = this.state.footerHeight;
		const winHeight = this.state.windowHeight;

		const calc = winHeight - (headerHeight + footerHeight);
		return calc;
	};

	backgroundColorWhite = () => {
		const getColor = "background--white";
		return getColor;
	};

	render() {

		var offsetHomeOthers = {
				marginTop: "300px"
		};

		var marginBottomForLastElement = {
			marginBottom: '120px'
		}

		var backgroundColorWhite = "background-color--white--opacity--70";

		return (
			<div className="container" {...WheelReact.events}>
				<Header requestHeaderHeight={this.getHeaderHeightFromChild} sendHeaderBackgroundColor={isMobile ? backgroundColorWhite : ""}/>				
				<div className='button_group '>
					<div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
						<button className={"hi-icon hi-icon-mobile " + this.state.arr[0]} onClick={() => {
							scrollToComponent(this.getSectionYCoordinates0, { offset: 0, align: 'middle', duration: 800, ease:'out-quint'});
							this.toggleIsShowing(0); this.handleClickEventGA('On Say Hi section')
						}}>•</button>
						<span>Say Hi!</span>
					</div>

					<div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a ">
						<button className={"hi-icon hi-icon-mobile " + this.state.arr[1]} onClick={() => {
							scrollToComponent(this.getSectionYCoordinates1, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
							this.toggleIsShowing(1); this.handleClickEventGA('On Bear with cards section')
						}}>•</button>
						<span>No AEON card?</span>
					</div>
					  
					<div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a ">
						<button className={"hi-icon hi-icon-mobile " + this.state.arr[2]} onClick={() => {
							scrollToComponent(this.getSectionYCoordinates2, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
							this.toggleIsShowing(2); this.handleClickEventGA('On QR Payment section')
						}}>•</button>
						<span>QR payment</span>
					  </div>
					  
					<div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a ">
						<button className={"hi-icon hi-icon-mobile " + this.state.arr[3] } onClick={() => {
							scrollToComponent(this.getSectionYCoordinates3, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
							this.toggleIsShowing(3); this.handleClickEventGA('On Check Balance section')
						}}>•</button>
						<span>Check balance</span>
					</div>
					  
					<div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a "> 
						<button className={"hi-icon hi-icon-mobile " + this.state.arr[4]} onClick={() => {
							scrollToComponent(this.getSectionYCoordinates4, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
							this.toggleIsShowing(4); this.handleClickEventGA('On Earn points section')
						}}>•</button>
						<span>Earn points</span>
					</div>
					  
					<div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a ">
						<button className={"hi-icon hi-icon-mobile " + this.state.arr[5]} onClick={() => {
							scrollToComponent(this.getSectionYCoordinates5, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
							this.toggleIsShowing(5); this.handleClickEventGA('On Instant top-up section')
						}}>•</button>
						<span>Top up</span>
					</div>

					<div className="hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a "> 
						<button className={"hi-icon hi-icon-mobile " + this.state.arr[6]} onClick={() => {
							scrollToComponent(this.getSectionYCoordinates6, { offset: -105, align: 'top', duration: 800, ease:'out-quint'});
							this.toggleIsShowing(6); this.handleClickEventGA('On Safe & secure section')
						}}>•</button>
						<span>Safe & secure</span>
					</div>

				</div>
				<div ref={(ref) => this.getSectionYCoordinates0 = ref}>
					<Home requestHomeHeight={this.getHomeHeightFromChild} sendMarginToChild={this.calcOffset} sendHeightToSectionContainer={this.containerHeight}/>
				</div>
				<div style={isBrowser ? offsetHomeOthers : {marginTop:'0px'}} ref={(ref) => this.getSectionYCoordinates1 = ref}>
					<HomeAEONMemberPlus requestHomeAEONMemberPlusHeight={this.getHomeAEONMemberPlusHeightFromChild} getCalc={this.calcHeight} sendHeightToSectionContainer={this.containerHeight}/>
				</div>
				<div style={isBrowser ? offsetHomeOthers : {marginTop:'0px'}} ref={(ref) => this.getSectionYCoordinates2 = ref}>
					<HomeQRPayment requestHomeQRPaymentHeight={this.getHomeQRPaymentHeightFromChild} getCalc={this.calcHeight}/>
				</div>
				<div style={isBrowser ? offsetHomeOthers : {marginTop:'0px'}} ref={(ref) => this.getSectionYCoordinates3 = ref}>
					<HomeCheckBalance requestHomeCheckBalanceHeight={this.getHomeCheckBalanceHeightFromChild} getCalc={this.calcHeight}/> 
				</div>
				<div style={isBrowser ? offsetHomeOthers : {marginTop:'0px'}} ref={(ref) => this.getSectionYCoordinates4 = ref}>
					<HomeEarnPoints requestHomeEarnPointsHeight={this.getHomeEarnPointsHeightFromChild} getCalc={this.calcHeight}/>
				</div>
				<div style={isBrowser ? offsetHomeOthers : {marginTop:'0px'}} ref={(ref) => this.getSectionYCoordinates5 = ref}>
					<HomeTopUp requestHomeTopUpHeight={this.getHomeTopUpHeightFromChild} getCalc={this.calcHeight}/> 
				</div>
				<div style={Object.assign({}, isBrowser ? offsetHomeOthers : {marginTop:'0px'}, marginBottomForLastElement)} ref={(ref) => this.getSectionYCoordinates6 = ref}>
					<HomeSafeSecure requestHomeSafeSecureHeight={this.getHomeSafeSecureHeightFromChild} getCalc={this.calcHeight}/> 
				</div>

				<Footer requestFooterHeight={this.getFooterHeightFromChild} sendFooterBackgroundColor={isMobile ? backgroundColorWhite : ""}/>
			</div>
		);
	}
}

// render(<Root/>, window.document.getElementById("app"));