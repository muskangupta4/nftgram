import React from 'react';
import "../../App.css";
import {useHistory,useLocation } from "react-router-dom";

function Profile() {

	const history = useHistory();

	return (
		<div className="profile">
				
			<div className="dp_head">
				<div className="profile_img">
					<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>
				</div>

				<div className="profile_cred"> 
					<h5>Shivam Namdeo</h5>
					<p>shivamnamdeo0101@gmail.com</p>
				</div>

				<div className="edit_profile">
					<p>Edit Profile</p>
				</div>
			</div>

			<div className="dp_head dp_follow">
				<div className="dp_follow_comp">
					<h5>Posts</h5>
					<p>110</p>
				</div>
				<div className="dp_follow_comp">
					<h5>Followers</h5>
					<p>110</p>
				</div>
				<div className="dp_follow_comp">
					<h5>Following</h5>
					<p>110</p>
				</div>
			</div>


			<div className="feed_grid">

				{
								[1,2,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item,index)=>(
									<div className="feed_grid_comp" key={item} onClick={()=>history.push("/feed/"+`${item}`)}>
										<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>

									</div>
								))
				}
			

			</div>

		</div>
	)
}

export default Profile