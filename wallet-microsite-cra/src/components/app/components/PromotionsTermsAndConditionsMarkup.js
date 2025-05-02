import React from "react";

export class PromotionsTermsAndConditionsMarkup extends React.Component {
	render(){
		return(
			<div className={"font--bodycopy general " + this.props.sendGeneral}>
				<div className="padding--1em">
					<ol>
						<li ><span >The campaign is valid from 12th October till 31</span><span><sup>st</sup></span><span > December 2018.</span></li>
						<li ><span >This campaign is open to all valid AEON Member Plus Visa Cardholders and AEON Wallet users.</span></li>
						<li ><span >This campaign is valid at all AEON BiG Hypermarkets in Malaysia.</span></li>
						<li ><span >The extra points are limited to a purchase of one unit per item for each member throughout the promotion period.</span></li>
						<li ><span >The extra points are limited for selected items only.</span></li>
						<li ><span >The extra points will be credited into your AEON Member Plus Visa Card within 14 days after the campaign ends.</span></li>
						<li ><span >Please tap your AEON Member Plus Visa Card or scan AEON Wallet member barcode on the terminal for member recognition to be entitled for the extra points.</span></li>
						<li ><span >Items refunded will not be entitled for the extra points.</span></li>
						<li ><span >AEON BiG (M) Sdn Bhd reserves the rights to change or amend these terms and conditions or cancel/discontinue the campaign promotion at any time without prior notice and any demands on compensation will not be entertained.</span></li>
					</ol>
				</div>
			</div>
		);
	}
}