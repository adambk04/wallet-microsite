import React from 'react';
import { isBrowser, isIOS, isAndroid, CustomView } from 'react-device-detect';
import ReactGA from 'react-ga';

export class DownloadBtns extends React.Component {

	handleClickEventGA(e){
		ReactGA.event({
			category: 'Download Button on Homepage',
			action: e
		});
	}

	render(){
		const androidUrl = "https://play.google.com/store/apps/details?id=today.wander.acs";
		const iosUrl = "https://itunes.apple.com/app/id1371474291";
		return(
			<div className="font--bodycopy font-size--10 padding-bottom--1em">
				<CustomView condition={isBrowser || isAndroid} viewClassName="display--inline-block">
					<a href={androidUrl} onClick={()=>{this.handleClickEventGA('click-android')}}>
						<img src="images/button_google-play.png" className="button--download"/>
						<div className="padding-top--0-5em text-align--center text-transform--none font--white " style={{color: this.props.fontDarkGrey}}>Android 4.1 & above</div>
					</a>
				</CustomView> 
				<CustomView condition={isBrowser || isIOS} viewClassName="display--inline-block">
					<a href={iosUrl} onClick={()=>{this.handleClickEventGA('click-ios')}}>
						<img src="images/button_app-store.png" className="button--download"/>
						<div className="padding-top--0-5em text-align--center text-transform--none font--white " style={{color: this.props.fontDarkGrey}} >iOS9 & above</div>
					</a>
				</CustomView>
			</div>
		);	
	}
	
}

