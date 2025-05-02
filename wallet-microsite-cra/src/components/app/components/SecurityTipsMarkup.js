import React from "react";

export class SecurityTipsMarkup extends React.Component {
	render() {

		return(
			<div className="font--dark-grey responsive--hide" style={{paddingBottom: "10em"}}>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						<h2>Mobile Device Password</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Set your mobile device to require a password before it can be used.</span>
						</div>
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-mobile-device-password.png" />
						
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-dont-use-same-password-twice.png" />
						
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						<h2>Don't use the same password twice</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Use a unique password for your AEON Wallet app. Don't use the same password as your email, facebook etc.</span>
						</div>
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						<h2>Install app from trusted sources</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Only install apps that can be downloaded from the official app stores "Google Play Store" & "Apple App Store". Apps downloaded from unofficial app stores may be malicious and compromise your security.</span>
						</div>
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-install-app-from-trusted-sources.png" />
						
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-only-connect-to-trusted-networks.png" />
						
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<h2>Only connect to trusted networks</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Choose secure network connections or Wi-Fi network that you trust. Unsecured networks could pose a risk, and hackers nearby can eavesdrop on your connection to steal your information.</span>
						</div>
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						<h2>Keep your mobile device updated</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Be sure to install the latest firmware updates on your device. This helps ensure that the latest security patches are now on your device.</span>
						</div>
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-keep-your-mobile-device-updated.png" />
						
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-keep-your-personal-information-private.png" />
						
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<h2>Keep your personal information private</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Don't share sensitive data such as your username, password and card details with anyone you would not normally hand over your physical wallet to. Also, take extra steps to keep your devices secured at all times.</span>
						</div>
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						<h2>Keep login credentials secure</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Never store usernames and passwords in an unprotected environment.</span>
						</div>
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-keep-login-credentials-secure.png" />
						
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-call-customer-service.png" />
						
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<h2>Protect yourself online</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Kindly contact our Customer Service immediately if:
							<br/>• you suspect that your password has been compromised.<br/>• your mobile device has been stolen or lost.<br/>• you notice a suspicious transaction that you did not effect.</span>
						</div>
					</div>
				</section>
				<section className="section--container overflow--hidden flex--centralise padding--0-5em">
					<div className="column--left column--left--fluid display--inline-block">
						<h2>Image Verification</h2>
						<div >
							<span className="font--bodycopy padding-top--1em padding-bottom--1em display--inline-block">Please ensure you recognise your Image Verification image when you login.</span>
						</div>
					</div>
					<div className="column--right column--right--fluid display--inline-block">
						
						<img className="width--100" src="images/securitytips-image-verification.png" />
						
					</div>
				</section>
			</div>
		);
	}
}