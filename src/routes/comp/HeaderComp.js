import React ,{useState,useEffect}from 'react';
import "../../App.css";
import HomeIcon from '@mui/icons-material/Home';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';	
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useHistory,useLocation } from "react-router-dom";
import firebase from "../../base.js";
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Loading from "../../Loading";
import LogoutIcon from '@mui/icons-material/Logout';
function HeaderComp() {

	const [user, set_user] = useState(firebase.auth().currentUser);

	const history = useHistory();
	const location = useLocation()	
	

	const check_url = (val)=>{
		return location.pathname.includes(val)
	}


	return (
		<div className="header">
			
			{	!(check_url("login") || check_url("signup")) &&
			<div className="add_button">
				<IconButton onClick={()=>history.push("/add_feed")}>
					<AddCircleRoundedIcon />
				</IconButton>
			</div>
			}

			<div className="left_header" onClick={()=>history.push("/")}>	
				<h1>NFTGRAM</h1>
			</div>


			{	!(check_url("login") || check_url("signup")) ?
						<div className="middle_header">
							<input type="search"  placeholder="Search NFT or username"/>
						</div>
				:
				<div>
				</div>
			}

			{	!(check_url("login") || check_url("signup")) ? 
			<div className="right_header">	
					
				<IconButton className="header_icon" onClick={()=>history.push("/")}>
					<HomeIcon />
				</IconButton>

				<IconButton className="header_icon" onClick={()=>history.push("/activity")}>
					<CircleNotificationsIcon />
				</IconButton>
				<IconButton className="header_icon"onClick={()=>history.push("/msg")}>
					<ForumIcon />
				</IconButton>
				<IconButton className="header_icon" onClick={()=>history.push("/profile")}>
					<AccountCircleIcon />
				</IconButton>
				<div className="head_comp_row header_icon">
				<AccountBalanceWalletRoundedIcon />
					<h5>100</h5>
				</div>
				<IconButton onClick={()=>firebase.auth().signOut()}>
					<LogoutIcon color="error" />
				</IconButton>
			</div>
			:
			<div>
			</div>
		 }
		</div>
	)
}

export default HeaderComp