import React from "react";
import { MainNav } from "./MainNav";
import {isSourceEwallet} from "./Util";

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			headerHeight: 0
		};
		this.updateHeaderHeight = this.updateHeaderHeight.bind(this);
	}
	
	componentDidMount(){
		this.updateHeaderHeight();
		window.addEventListener('resize', this.updateHeaderHeight);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.updateHeaderHeight);
	}


	updateHeaderHeight(){
		const headerHeight = this.headHeight.clientHeight;
		this.setState({
			headerHeight: headerHeight
		});
		this.props.requestHeaderHeight(headerHeight);
	};

	render() {
		const getNavWhiteFromParent = this.props.sendNavColor;
		return(
			<header ref = {(headHeight) => (this.headHeight = headHeight)} className={isSourceEwallet(window.location) ? "hide-all": "position--fixed width--100 top--0 " + this.props.sendHeaderBackgroundColor}>
				<img src="images/aeon_wallet_malaysia_logo.png"/>
				<MainNav sendNavWhiteToGrandChild={getNavWhiteFromParent} />
			</header>
		);
	}
}