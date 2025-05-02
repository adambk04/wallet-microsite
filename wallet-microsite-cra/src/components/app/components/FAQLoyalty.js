import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class FAQLoyalty extends React.Component {
	render(){
		return(
			<div className={"font--bodycopy loyalty " + this.props.sendLoyalty} style={{paddingBottom: "5em"}}>
				<h2 className="font--magenta padding-left--12px padding-top--1em">{this.props.title}</h2>
				<ScrollableAnchor id={"points"}>
					<div>
						<div className="padding--1em">
							<div className="font--magenta">I made a transaction with the AEON Member Plus Card at an AEON company, but I haven't got my points.</div>
							<div className="font--dark-grey">It takes up to 48 hours before the points update on the app.</div>
						</div>
						<div className="padding--1em">
							<div className="font--magenta">I topped up according to this campaign - <a href="https://www.aeoncredit.com.my/ew/promo/771?st=ewallet" target="_blank" className="font--orange">Top Up Bonus </a>but haven't received my points.</div>
							<div className="font--dark-grey">Points gets credited one month after the campaign ends.</div>
						</div>
						<div className="padding--1em">
							<div className="font--magenta">I did not redeem any points, but my points disappeared.</div>
							<div className="font--dark-grey">You may be on Auto redemption and points are automatically converted to cash once a month. You can check your transaction history for "Point Redemption - Cashback". It may take up to 6 hours before the cash balance is updated. If you did not get cash back, please contact customer service.</div>
						</div>
						<div className="padding--1em">
							<div className="font--magenta">I made a transaction with the AEON Member Plus card at an AEON company, but did not get 2x points.</div>
							<div className="font--dark-grey">You will need to scan the member card barcode on the app / physical card and pay with the card before qualifying for 2x points.</div>
						</div>
						<div className="padding--1em">
							<div className="font--magenta">What will happen to my current AEON Member Card points after I apply the AEON Member Plus Card? Will it transfer to the new card?</div>
							<div className="font--dark-grey">No. The current points will not be transferred to your AEON Member Plus Visa Card. Kindly go to the nearest AEON Customer Service at AEON Mall or AEON Stores to redeem your points.</div>
						</div>
						<div className="padding--1em">
							<div className="font--magenta">What will happen to my current AEON BiG Member Card points after I apply the AEON Member Plus Card? Will it transfer to the new card?</div>
							<div className="font--dark-grey">Yes, the current AEON BiG Member points will be transferred to the AEON Member Plus Card. You will be notified via SMS whether the point transfer is successful or not. Should the points transfer is unsuccessful, kindly go to your nearest AEON BiG to redeem your points.</div>
						</div>
					</div>
				</ScrollableAnchor>
				
				<div className="padding--1em">
					<div className="font--magenta">What is Loyalty Programme?</div>
					<div className="font--dark-grey">Loyalty Program is a type of reward system, which provides customers an advanced access to AEON Point, new products, additional discounts, free gifts and more.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Where can I use my AEON Points?</div>
					<div className="font--dark-grey">You can use your AEON Points at AEON Stores, AEON BiG Hypermarket, AEON MaxValu, AEON MaxValu Prime, AEON Wellness and other participating merchants.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Where can I redeem my AEON Points?</div>
					<div className="font--dark-grey">You may convert your AEON Points to cash through:<br/>
						<ol type="1">
							<li>Auto point redemption. Auto point redemption is an auto function which automatically converts your AEON Points to cash in the card.</li>
							<li>Self-Initiate: You can choose when to convert your AEON Points to cash in the card through ACSM website and AEON Wallet.</li>
						</ol>
					</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Can I share my AEON Points with my family/ friends?</div>
					<div className="font--dark-grey">AEON Points/ Value are not transferable at this moment.</div>
				</div>
			</div>
		);	
	}
		
	
}