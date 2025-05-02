import React from "react";
import { FAQGeneral } from "./FAQGeneral";
import { FAQPayments } from "./FAQPayments";
import { FAQSecurity } from "./FAQSecurity";
import { FAQLost } from "./FAQLost";
import { FAQLoyalty } from "./FAQLoyalty";

export class FAQResponsive extends React.Component {
	render(){
		return(
			<div className="font--bodycopy" style={{paddingBottom: "5em"}}>
				<FAQGeneral title={"General"}/>
				<FAQPayments title={"Payments"} />
				<FAQSecurity title={"Security"}/>
				<FAQLost title={"Lost/Stolen"}/>
				<FAQLoyalty title={"Loyalty programme"}/>
			</div>
		);
	}
		
	
}