import React from "react";

export class FAQLost extends React.Component {
	render(){
		return(
			<div className={"font--bodycopy lost " + this.props.sendLost} style={{paddingBottom: "5em"}}>
				<h2 className="font--magenta padding-left--12px padding-top--1em">{this.props.title}</h2>
				<div className="padding--1em">
					<div className="font--magenta">What do I need to do if my device is lost or stolen?</div>
					<div className="font--dark-grey">There are three (3) options:<br/>
						<ol type="1">
							<li>Visit www.aeonwallet.com.my. You can logon to www.aeonwallet.com.my to lock your account.</li>
							<li>Visit www.aeoncredit.com.my. You can log into your web account and choose to disable the AEON Wallet.</li>
							<li>Call Center. You may also call customer service department, operating on 24/7 basis, to lock your AEON Wallet.</li>
						</ol>
					</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">What should I do if my physical card is lost or stolen?</div>
					<div className="font--dark-grey">Call us immediately to report lost card and to block your card.</div>
				</div>
				<div className="padding--1em">
					<div className="font--magenta">Do I need to add my new card onto AEON Wallet if I received my replaced or renewed physical card?</div>
					<div className="font--dark-grey">No, but you need to activate your actual card.</div>
				</div>
			</div>
		);
	}
		
	
}