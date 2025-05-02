import React from "react";

export class LockAccount extends React.Component {
	render() {

		return(
			<div className="font--white">
				<section className="section--container overflow--hidden flex--centralise padding--0-5em font--bodycopy text-align--center" style={{display: "block"}}>
					<div>Lost your phone and need to lock your AEON Wallet account? Click on the link below. <br/>You will be redirected to www.aeoncredit.my/lockmyaeonwallet. <br/><br/>For further assistance, please contact our Customer Service at <a href="tel:+60327199999" className="font--orange">+603 2719 9999</a> or email us at <a href="mailto:customer.service@aeoncredit.com.my" className="font--orange">customer.service@aeoncredit.com.my</a></div>
					<a href="https://www.aeoncredit.com.my/lockmyaeonwallet" target="_blank"><div className="button--lock-account">lock account</div></a>
				</section>
			</div>
		);
	}
}