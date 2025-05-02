import React from "react";
import {isSourceEwallet} from "./Util";

export class FAQGeneral extends React.Component {
	render(){
		return(
			<div className={"font--bodycopy general " + this.props.sendGeneral} style={{paddingBottom: "7em"}}>
				<h2 className="font--magenta padding-left--12px padding-top--1em">{this.props.title}</h2>
				<div className="padding--1em">
					<div className="font--magenta">What is AEON Wallet and AEON Pay?</div>
					<div className="font--dark-grey">AEON Wallet is a virtual electronic wallet by AEON Credit Service Malaysia (ACSM) that allows you to store payment card(s) electronically in secure manner on a mobile device or smartphone, to provide a convenient way for you to make in-store payments at participating merchant outlets.<br/><br/>
						AEON Pay is one of the functions of AEON Wallet, which allows you to pay by your wallet when you tagged the card(s) of your choosing for payment via AEON Wallet (i.e. ACSM Credit Cards or AEON Member Plus Visa Card).</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Is AEON Wallet app free to download?</div>
					<div className="font--dark-grey">Yes, AEON Wallet is free to download.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Who can use AEON Wallet?</div>
					<div className="font--dark-grey">Any of our customers with the conditions below:<br/>
						<ol type="1">
							<li>AEON Wallet is available to be downloaded by everyone.</li>
							<li>Our active account for AEON Member Plus Visa Card, Prepaid Card, Credit Card, Easy Payment, Motorcycle Easy Payment, Auto Financing, or Personal Financing.</li>
							<li>Valid mobile number for One Time Pin (OTP) verification purposes.</li>
							<li>Active email account registered with ACSM for E-statement.</li>
						</ol>
					</div>
				</div>
				<div className={isSourceEwallet(window.location) ? "hide-all" : "padding--1em"}>
					<div className="font--magenta">What device can I use for AEON Wallet?</div>
					<div className="font--dark-grey">Any device with compatible:<br/>
						<ol type="1">
							<li>Android 4.1 and above</li>
							<li>Apple iOS 9 and above</li>
						</ol>
					</div>
				</div>
				<div className={isSourceEwallet(window.location) ? "hide-all" : "padding--1em"}>
					<div className="font--magenta">Even I bought my mobile device in other country, can I install and use the app?</div>
					<div className="font--dark-grey">Yes, as long as the device bought is compatible:<br/>
						<ol type="1">
							<li>Android 4.1 and above</li>
							<li>Apple iOS 9 and above</li>
						</ol>
					</div>
				</div>
				<div className={isSourceEwallet(window.location) ? "hide-all" : "padding--1em"}>
					<div className="font--magenta">How do I install the AEON Wallet App?</div>
					<div className="font--dark-grey">Go to Google Play Store or App Store, search for "AEON Wallet", and download the app.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">How do I register for AEON Wallet?</div>
					<div className="font--dark-grey">Steps to register for AEON Wallet:<br/>
						<ol type="1">
							<li>Click on the AEON Wallet icon on your mobile device desktop</li>
							<li>Enter valid identification, sign up, and agree to the our Terms and Privacy</li>
							<li>Create six (6) digits Pin</li>
							<li>AEON Wallet will auto verify the OTP</li>
							<li>Successful register for AEON Wallet</li>
						</ol>
					</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Does AEON Wallet work on a jailbroken or rooted device?</div>
					<div className="font--dark-grey">No, AEON Wallet is not permitted to work on jailbroken or rooted device.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">What types of payment can I make using AEON Wallet?</div>
					<div className="font--dark-grey">You will use Quick Response (QR) Code Payment at any AEON Pay accepted stores.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">What card can I use with AEON Wallet?</div>
					<div className="font--dark-grey">All cards issued by ACSM:<br/>AEON Prepaid Mastercard, AEON Member Plus Visa Card, AEON Platinum Credit Card, AEON BiG Visa Classic Card, AEON BiG Visa Gold Card, New AEON Gold Visa/MasterCard, New AEON Classic Visa/MasterCard, AEON Gold Visa/MasterCard, AEON Classic Visa/MasterCard, Motorcycle Association Affinity Gold Visa Card, Japan Club of Kuala Lumpur Credit Card.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">What should I do if I did not receive my One Time Pin (OTP)?</div>
					<div className="font--dark-grey">Kindly contact our customer service or your communication service providers for help.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Would there be any additional charges for using AEON Wallet?</div>
					<div className="font--dark-grey">No additional fees and charges for using AEON Wallet.</div>
				</div>
			</div>
		);
	}
		
	
}