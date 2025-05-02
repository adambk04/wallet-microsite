import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { isBrowser, isMobile } from 'react-device-detect';

//add new promo id and expiry dates here.
const idNameEndDateData = [{idName: "promo2", endDate: "2019-3-31"}, {idName: "promo3", endDate: "2019-2-17"}, {idName: "promo4", endDate: "2019-2-10"}, {idName: "promo5", endDate: "2019-3-24"}, {idName: "promo6", endDate: "2019-12-31"}, {idName: "promo7", endDate: "2019-5-5"}];

const promotion1 = {
	headline: 'Earn Rewards up to',
	bodycopy: 'worth RM200',
	validitycopy: '12 October - 31 December 2018',
	display: "none",
	imageName: "promo-main-image",
	textName: "promo-text-image",
	backgroundColor: "background-color--linear-gradient--responsive-linear-gradient",
	fontColor: "font--magenta",
	aeonCustomerLinkColor: "font--orange"

}

const promotion2 = {
	imageName: "promo2-main-image2",
	textName: "promo2-text-image",
	validitycopy: '8 November 2018 – 31 March 2019 (Extended!)',
	backgroundColor: 'background-color--linear-gradient--responsive-linear-gradient'
}

const promotion3 = {
	imageName: "promo3-main-image",
	textName: "promo3-text-image",
	validitycopy: '17 January 2019 – 17 February 2019',
	backgroundColor: 'background-color--linear-gradient--responsive-linear-gradient'
}

const promotion4 = {
	imageName: "promo4-main-image",
	textName: "promo4-text-image",
	validitycopy: "18 – 20 Jan 2019, 25 – 27 Jan 2019, 1 – 10 Feb 2019",
	backgroundColor: "background-color--linear-gradient--responsive-linear-gradient"
}

const promotion5 = {
	imageName: "promo5-main-image",
	textName: "promo5-text-image",
	validitycopy: "23 – 24 March 2019 at AEON Mall Nilai",
	backgroundColor: "background-color--linear-gradient--responsive-linear-gradient"
}

const promotion6 = {
	imageName: "promo6-main-image",
	textName: "promo6-text-image",
	validitycopy: "25 March – 31 December 2019 at AEON Mall Nilai",
	backgroundColor: "background-color--linear-gradient--responsive-linear-gradient"
}

const promotion7 = {
	imageName: "promo7-main-image",
	imageNameMobile: "promo7-main-image-mobile",
	textName: "promo7-text-image",
	validitycopy: "6 April – 5 May 2019",
	backgroundColor: "background-color--grey--linear-gradient"
}

const idName = [promotion1];

export class Promotions extends React.Component {

	constructor(props){
		super(props);

		this.state={
			windowHeight: null,
			headerHeight: null,
			footerHeight: null,
			sectionHeight: null,
			customerType: idName[0],
			isDesktop: true
		};

		this.updateWindowHeight = this.updateWindowHeight.bind(this);
	}

	componentDidMount(){
		this.updateWindowHeight();
		this.checkValidity();
		window.addEventListener('resize', this.updateWindowHeight);
	}

	componentWillUnmount(){
		this.updateWindowHeight();
		window.removeEventListener('resize', this.updateWindowHeight);
	}

	checkValidity = () => {
		const getCurrentDate = new Date();
		const mapIdNameEndDate = idNameEndDateData.map((result) => {
			var expiredDate = new Date(result.endDate);
			// console.log("name is " + result.idName);
			// console.log("date is " + expiredDate);
			// console.log("current date is " + getCurrentDate.getTime());
			if (getCurrentDate.getTime() > expiredDate){
				// console.log("expired");

				var ele = document.getElementsByClassName(result.idName);
				for (var i = 0; i < ele.length; i++ ) {
				    ele[i].style.display = "none";
				}
			}
			else if (getCurrentDate.getTime() < expiredDate){
				// console.log("not expired");
			}
		});
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
			customerType: idName[0]
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
			<div className={"container " + promotion1.backgroundColor}>
				<Header requestHeaderHeight={this.getHeaderHeightFromChild} sendNavColor={navSpecial} sendHeaderBackgroundColor= {backgroundColorWhite}/>
				<div className="sections--container" >
					<section className={"promo7 section--container overflow--hidden flex--centralise font--magenta responsive--hide " + promotion7.backgroundColor} ref={(section) => this.section = section} style={offset}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block text-align--center " + this.state.customerType.fontColor}>
							<img src={"images/" + promotion7.textName + ".png"} />
							<h2 className="padding-top--0-5em">{promotion7.validitycopy}</h2>
							<a href="images/ebrochure-aeon.pdf" target="_blank" className="button font--bodycopy margin-top--2em display--block">download brochure (pdf)</a>
							<a href="/images/t_c_aeon.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
							
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column margin-left--2em">
							<img src={"images/" + promotion7.imageName + ".png"} className="max-width--110" style={isBrowser ? setImageHeight : {height:'auto'}}/>
						</div>
					</section>
					<section className={"promo6 section--container overflow--hidden flex--centralise font--magenta padding-top--10em margin-bottom--10em responsive--hide " + promotion6.backgroundColor} ref={(section) => this.section = section} style={offset}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block text-align--center " + this.state.customerType.fontColor}>
							<img src={"images/" + promotion6.textName + ".png"} />
							<h2 className="padding-top--0-5em">{promotion6.validitycopy}</h2>
							<a href="/images/terms_and_conditions_nilai_walk.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column margin-left--2em">
							<img src={"images/" + promotion6.imageName + ".png"} className="max-width--110" style={isBrowser ? setImageHeight : {height:'auto'}}/>
						</div>
					</section>
					{/*<section className={"promo5 section--container overflow--hidden flex--centralise font--magenta responsive--hide " + promotion5.backgroundColor} ref={(section) => this.section = section} style={offset}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block text-align--center " + this.state.customerType.fontColor}>
							<img src={"images/" + promotion5.textName + ".png"} />
							<h2 className="padding-top--0-5em">{promotion5.validitycopy}</h2>
							<a href="images/mall_walking_flyer.pdf" target="_blank" className="button font--bodycopy margin-top--2em display--block">more details (pdf)</a>
							<a href="/images/terms_and_conditions_nilai_walk.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column margin-left--2em">
							<img src={"images/" + promotion5.imageName + ".png"} className="max-width--110" style={isBrowser ? setImageHeight : {height:'auto'}}/>
						</div>
					</section>*/}
					<section className={"promo4 section--container overflow--hidden flex--centralise cny-background-image responsive--hide " + promotion4.backgroundColor} ref={(section) => this.section = section} style={offset}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block text-align--center " + this.state.customerType.fontColor}>
							<img src={"images/" + promotion4.textName + ".png"} />
							<h2 className="padding-top--0-5em font--white">{promotion4.validitycopy}</h2>
							<a href="/images/CNY-2019-Terms-and-Condition-Treasure-Hunt.pdf" target="_blank" className="display--block font--white font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column margin-left--2em">
							<img src={"images/" + promotion4.imageName + ".png"} className="max-width--110" style={isBrowser ? setImageHeight : {height:'auto'}}/>
						</div>
					</section>

					<section className={"promo3 section--container overflow--hidden margin-bottom--10em flex--centralise responsive--hide " + promotion3.backgroundColor} ref={(section) => this.section = section} style={offset}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block text-align--center " + this.state.customerType.fontColor}>
							<img src={"images/" + promotion3.textName + ".png"} />
							<h2 className="padding-top--0-5em">{promotion3.validitycopy}</h2>
							<a href="images/cash-up-challenge.pdf" target="_blank" className="button font--bodycopy margin-top--2em display--block">more prizes to be won (pdf)</a>
							<a href="/images/tnc-cashup-challenge.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column margin-left--2em">
							<img src={"images/" + promotion3.imageName + ".png"} className="max-width--110" style={isBrowser ? setImageHeight : {height:'auto'}}/>
						</div>
					</section>

					<section className={"promo2 section--container overflow--hidden padding-top--10em padding-bottom--20em flex--centralise responsive--hide " + promotion2.backgroundColor} ref={(section) => this.section = section} style={offset}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block text-align--center " + this.state.customerType.fontColor}>
							<img src={"images/" + promotion2.textName + ".png"} />
							<h2 className="padding-top--0-5em">{promotion2.validitycopy}</h2>
							<a href="/images/tnc-CashbackScan_Pay-Clean.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column margin-left--2em">
							<img src={"images/" + promotion2.imageName + ".png"} className="max-width--110" style={isBrowser ? setImageHeight : {height:'auto'}}/>
						</div>
					</section>

					{/* this section is for mobile */}
					<section className="promo7 section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--5em background-color--grey--linear-gradient" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src="images/promo7-text-image.png" className="width--100" />
							<h2 className="padding-top--0-5em font--magenta">{promotion7.validitycopy}</h2>
						</div>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block font--magenta "}>
							<img src={"images/" + promotion7.imageNameMobile + ".png"} className="width--100 margin-top--2em margin-bottom--2em"/>
							<a href="images/ebrochure-aeon.pdf" target="_blank" className="button font--bodycopy margin-top--2em display--block">download brochure (pdf)</a>
							<a href="/images/t_c_aeon.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						
					</section>

					{/* this section is for mobile */}
					<section className="promo6 section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--5em" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src="images/promo6-text-image.png" className="width--100" />
							<h2 className="padding-top--0-5em font--magenta">{promotion6.validitycopy}</h2>
						</div>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block font--magenta "}>
							<img src={"images/" + promotion6.imageName + ".png"} className="width--100 margin-top--2em margin-bottom--2em"/>
							<a href="/images/terms_and_conditions_nilai_walk.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						
					</section>

					{/* this section is for mobile 
					<section className="promo5 section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--5em" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src="images/promo5-text-image.png" className="width--100" />
							<h2 className="padding-top--0-5em font--magenta">{promotion5.validitycopy}</h2>
						</div>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block font--magenta "}>
							<img src={"images/" + promotion5.imageName + ".png"} className="width--100 margin-top--2em margin-bottom--2em"/>
							<a href="images/mall_walking_flyer.pdf" target="_blank" className="button font--bodycopy margin-top--2em display--block">more details (pdf)</a>
							<a href="/images/terms_and_conditions_nilai_walk.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						
					</section>
					*/}

					{/* this section is for mobile */}
					<section className="promo4 section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--5em cny-background-image" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src={"images/" + promotion4.imageName + ".png"} className="width--100 margin-top--2em margin-bottom--2em"/>
						</div>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block font--magenta "}>
							<img src="images/promo4-text-image.png" className="width--100" />
							<h2 className="padding-top--0-5em font--white">{promotion4.validitycopy}</h2>
							<a href="/images/CNY-2019-Terms-and-Condition-Treasure-Hunt.pdf" target="_blank" className="display--block font--white font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						
					</section>

					{/* this section is for mobile */}
					<section className="promo3 section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--5em" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block font--magenta "}>
							<img src="images/promo3-text-image.png" className="width--100" />
							<h2 className="padding-top--0-5em">{promotion3.validitycopy}</h2>
							<a href="images/cash-up-challenge.pdf" target="_blank" className="button font--bodycopy margin-top--2em display--block">more prizes to be won (pdf)</a>
							<a href="/images/tnc-cashup-challenge.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src={"images/" + promotion3.imageName + ".png"} className="width--100 margin-top--2em margin-bottom--2em"/>
						</div>
					</section>

					{/* this section is for mobile 
					<section className="promo2 section--container overflow--hidden desktop--hide--responsive--flex height--auto padding-bottom--5em background-color--grey--linear-gradient" ref={(section) => this.section = section} style={{paddingTop:"96px"}}>
						<div className={"column--left column--left--fluid--whoitsfor text-column display--inline-block font--magenta "}>
							<img src="images/promo2-text-image.png" className="width--100" />
							<h2 className="padding-top--0-5em">{promotion2.validitycopy}</h2>
							<a href="/images/tnc-CashbackScan_Pay-Clean.pdf" target="_blank" className="display--block font--magenta font--bodycopy margin-top--1em">*Terms &amp; conditions apply.</a>
						</div>
						<div className="column--right column--right--fluid--whoitsfor display--inline-block image-column">
							<img src={"images/" + promotion2.imageName + ".png"} className="width--100 margin-top--2em margin-bottom--2em"/>
						</div>
					</section>*/}					

					

				</div>
				<Footer requestFooterHeight={this.getFooterHeightFromChild} sendFooterNavColor={navSpecial} sendFooterBackgroundColor={backgroundColorWhite}/>
			</div>
		);
	}
}