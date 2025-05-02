import React from "react";

export class FAQPayments extends React.Component {
	render(){
		return(
			<div className={"font--bodycopy payments " + this.props.sendPayments} style={{paddingBottom: "7em"}}>
				<h2 className="font--magenta padding-left--12px padding-top--1em">{this.props.title}</h2>
				<div className="padding--1em">
					<div className="font--magenta">Where can I use AEON Wallet?</div>
					<div className="font--dark-grey">At all AEON Stores, AEON BiG Hypermarket, AEON MaxValu, AEON MaxValu Prime, AEON Wellness and other participating merchants with AEON Pay logo acceptance.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How do I know if the merchant accepts AEON Wallet?</div>
					<div className="font--dark-grey">You will see "AEON Pay" logo with the participating merchants.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How do I tag my credit card into AEON Wallet?</div>
					<div className="font--dark-grey">
						<ol type="1">
							<li>Login to AEON Wallet</li>
							<li>Select a card to tag for payment and key in CCV/CVV</li>
							<li>AEON Wallet will auto verify the OTP</li>
							<li>Successfully tag a card for payment with the "Success" notification on screen</li>
						</ol>
					</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How do I pay for my purchases using AEON Wallet?</div>
					<div className="font--dark-grey">
						<ol type="1">
							<li>Login to AEON Wallet</li>
							<li>Fingerprint or Pin Verification</li>
							<li>Select a tagged card for payment, and select Pay</li>
							<li>Scan QR Code</li>
							<li>Confirm amount to complete the payment</li>
							<li>Payment successful with "Payment Complete" notification on screen</li>
						</ol>
					</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Is there any limit for my purchases using AEON Wallet?</div>
					<div className="font--dark-grey">
						<ol type="1">
							<li>The daily transaction limit of RM1,000 is only applicable on Android devices</li>
							<li>The daily transaction limit of RM1,000 is not applicable on iOS devices</li>
							<li>Each Contactless Transaction without your verification (CVM) is capped at RM250. In the case where either the Contactless Transaction exceeds the threshold of RM250 and/or breaches cumulative limit of RM400, you are required to insert your card and input the 6 digit card PIN at the Electronic Data Capture(EDC) Terminal.</li>
							<li>Contactless Transactions are subject to the daily and monthly limits which you may have set via the website.</li>	
						</ol>
					</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How can I confirm if my payment using AEON Wallet is successful?</div>
					<div className="font--dark-grey">There are two (2) ways:<br/>
						<ol type="1">
							<li>The transaction you made will be shown under each payment card in AEON Wallet</li>
							<li>After each payment, transaction details will be shown in the transaction history</li>
						</ol>
					</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Why is my AEON Wallet not working in-store?</div>
					<div className="font--dark-grey">Your mobile device might have a connection interruption. Kindly contact our customer service or your communication service providers.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How do I void an AEON Wallet transaction?</div>
					<div className="font--dark-grey">It will be the same as usual credit, cash or other payments. You would need to bring your purchased goods and receipt to the cashier to void your transaction.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How do I file a dispute for an AEON Wallet transaction?</div>
					<div className="font--dark-grey">All disputes arising from the Cardholder’s Statement shall be made or notified to ACSM within fourteen (14) days from the date of the Statement to the Customer Care Centre.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Am I able to use AEON Wallet overseas?</div>
					<div className="font--dark-grey">No, currently you are not allowed to use AEON Pay in overseas.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How many cards can I add to my AEON Wallet?</div>
					<div className="font--dark-grey">There is no limit as long as the cards are issued by ACSM.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Can I top-up my AEON Member Plus Visa Card through AEON Wallet?</div>
					<div className="font--dark-grey">Yes, you can top-up via AEON Wallet. There is no fees and charges to Top-up.</div>
				</div>
			</div>
		);
	}
		
	
}