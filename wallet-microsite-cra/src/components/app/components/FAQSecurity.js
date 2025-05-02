import React from "react";

export class FAQSecurity extends React.Component {
	render(){
		return(
			<div className={"font--bodycopy security " + this.props.sendSecurity} style={{paddingBottom: "5em"}}>
				<h2 className="font--magenta padding-left--12px padding-top--1em">{this.props.title}</h2>
				<div className="padding--1em">
					<div className="font--magenta">Is AEON Wallet safe to use?</div>
					<div className="font--dark-grey">AEON Wallet provides security features with the list below:<br/>
							<ol type="1">
								<li>No card(s) information is stored in the mobile device</li>
								<li>You may only register one mobile device to AEON Wallet</li>
								<li>Real time transaction monitoring</li>
								<li>Providing 24/7 customer service and app lock</li>
							</ol>
						</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Would anyone be able to steal my card information from my device?</div>
					<div className="font--dark-grey">To access your AEON Wallet, your fingerprint or 6 digits PIN is required. Besides that no card(s) information is stored in the mobile device.</div>
				</div>
			</div>
		);
	}
}