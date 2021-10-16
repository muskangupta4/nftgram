import React ,{useState}from 'react'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import {useHistory} from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "../../App.css";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import firebase from "../../base";

function AddFeed() {


	const history = useHistory();

	const [img, set_img] = useState("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
	const [desc, set_desc] = useState("Almost before we knew it, we had left the ground.sgsitscoders Happy teacher's day 💖 #sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes #codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher")
	const [start_bid, set_start_bid] = useState(500);

	const add_fire = ()=>{
		firebase.firestore()
		.collection('feed')
		.add({img,desc,timestamp:Date.now(),start_bid});

		alert("Asset has been posted");

		history.push("/")

	}

	return (
		<div className="add_feed">
			
			<div className="add_feed_head">

				<div className="add_button_comp">
					<IconButton onClick={()=>history.push("/")}>
						<CloseRoundedIcon />
					</IconButton>
					<h4>Close</h4>
				</div>

				<div className="add_button_comp">
					<h4>Post Your Asset</h4>
					<IconButton onClick={()=>add_fire("hi")}>
						<SendRoundedIcon />
					</IconButton>
					
				</div>

			</div>

			<div className="add_feed_content">
				<p>Start Bid : {start_bid}</p>
				<img src={img} alt=""/>
				<h4>Description : {desc}</h4>
				
			</div>

		</div>
	)
}

export default AddFeed