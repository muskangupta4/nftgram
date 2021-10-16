import React from 'react';
import app from "./base.js";
import FeedComp from "./routes/comp/FeedComp";
import Account from "./routes/comp/Account";
import "./App.css";

function DashBoard() {
	return (
		<div className="home_flex">
			
			<div>
				<FeedComp />
			</div>
			
			<div>
				<Account />

			</div>
			
			
		</div>
	)
}

export default DashBoard