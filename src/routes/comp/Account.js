import React from 'react';
import {useHistory} from "react-router-dom";


function Account() {
	const history = useHistory();

	return (
		<div  className="account">
			<div className="user_acc" onClick={()=>{history.push("/profile")}}>
				<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>
				<div className="user_acc_content">
					<h6>Shivam Namdeo</h6>
					<p>shivamnamdeo0101@gmail.com</p>

				</div>
			</div>

			<div className="suggestions_list">

				<div className="sugg_head">
					<h5>Suggestions for you</h5>
					<h6>See All</h6>
				</div>

				{
								[1,2,3,5,8,9,].map((item,index)=>(

										<div className="sugg_header" key={item}>
											<div className="user_acc_sugg">
												<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>
												<div className="user_acc_sugg_content">
													<h6>Shivam Namdeo</h6>
													<p>shivamnamdeo0101@gmail.com</p>
												</div>
												
											</div>
											<h4>Follow</h4>
										</div>
										

								))
				}

			</div>

		</div>
	)
}

export default Account;