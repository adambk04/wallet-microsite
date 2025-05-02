import React from 'react';

export class ScrollBtn extends React.Component {
	render(){
		return(
			<div className = "mouse--container font--magenta font--bodycopy margin-top--2em font-size--10 text-transform--uppercase">
				<div className ="mouse display--inline-block margin-right--1em" style={{borderColor: this.props.borderColor}}>
					<div className = "mouse--line" style={{borderColor: this.props.borderColor}}></div>
				</div>
				<span className="display--inline-block" style={{color: this.props.fontColor}}>Scroll down<br/>for more</span>
			</div>
		);	
	}
	
}

