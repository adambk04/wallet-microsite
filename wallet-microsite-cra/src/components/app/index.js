import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { browserHistory } from "react-router";

import { Root } from './components/Root';
import { HowTo } from './components/HowTo';
import { SecurityTips } from './components/SecurityTips';
import { Help } from './components/Help';
import { FAQ } from './components/FAQ';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PromotionsTermsAndConditions } from './components/PromotionsTermsAndConditions';
import { Download } from './components/Download';
import { Promotions } from './components/Promotions';
// removed react-ga
ReactGA.initialize('UA-84560965-7'); //production
// ReactGA.initialize('UA-84560965-9'); //testing

class App extends React.Component {

	render() {
		return(
			<Router history={browserHistory}>
				<Switch>
					<Route exact path={"/"} component={props => <Root {...props} />} />
					{/*<Route path={"/who-its-for"} component={WhoItsFor}/>*/}
					<Route path={"/how-to"} component={HowTo}/>
					<Route path={"/security-tips"} component={SecurityTips}/>
					<Route path={"/help"} component={Help}/>
					<Route path={"/FAQ"} component={FAQ}/>
					<Route path={"/terms-and-conditions"} component={TermsAndConditions}/>
					<Route path={"/promotions-terms-and-conditions"} component={PromotionsTermsAndConditions}/>
					<Route path={"/download"} component={Download}/>
					<Route path={"/promotions"} component={Promotions}/>

					<Route render={() => (<Redirect to="/" />)}/>
				</Switch>
			</Router>
		)
	}
}
render(<App />, window.document.getElementById('app'));