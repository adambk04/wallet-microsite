import React from 'react';
import  { Redirect } from 'react-router-dom';
import { isBrowser, isIOS, isAndroid, CustomView } from 'react-device-detect';
import ReactGA from 'react-ga';

export class Download extends React.Component {

	render(){
		
		const androidUrl = "https://play.google.com/store/apps/details?id=today.wander.acs";
		const iosUrl = "https://itunes.apple.com/app/id1371474291";

		if (isAndroid) {
			return window.location.replace("https://play.google.com/store/apps/details?id=today.wander.acs")
		}

		else if (isIOS) {
			// return <Redirect to={iosUrl} />
			return window.location.replace("https://itunes.apple.com/app/id1371474291")
		}

		else if (isBrowser) {
			return <Redirect to='/' />
		}
	}
	
}

