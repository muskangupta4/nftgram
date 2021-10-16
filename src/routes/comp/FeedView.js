import React ,{useState,useEffect}from 'react'
import moment from "moment";
import IconButton from '@mui/material/IconButton';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import bid from "../../assets/bid.png";
import {useHistory,useLocation ,useParams} from "react-router-dom";
import firebase from "../../base.js";
import Loading from "../../Loading";

function FeedView() {

	const [img, set_img] = useState("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
	const [desc, set_desc] = useState("Almost before we knew it, we had left the ground.sgsitscoders Happy teacher's day 💖 #sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes #codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher")
	const [start_bid, set_start_bid] = useState(500);

	const {feed_id} = useParams();

	const [bid_list, set_bid_list] = useState("");
	const [loading, setLoading] = useState(true);


	const [bid_val, set_bid_val] = useState("");


	const [user_data, set_user_data] = useState({});

	useEffect(() => {

    const subscriber = firebase.firestore()
    
      .collection('users')
      .doc(firebase.auth().currentUser.email)
      .onSnapshot(doc => {
        

        set_user_data(doc.data());
      });
  
    // Unsubscribe from blogs when no longer in use
    return () => subscriber();
  }, []); 

	useEffect(() => {

    const subscriber = firebase.firestore()
    
      .collection('feed')
      .doc(feed_id)
      .collection('bid_list')
      .orderBy('timestamp','desc')
      .onSnapshot(querySnapshot => {
        
        const bid_list_ = [];
  
        querySnapshot.forEach(doc => {

        		bid_list_.push({
        		  	...doc.data(),
          	 		 key: doc.id
        		});
        					
        
        });
    
        set_bid_list(bid_list_);
        setLoading(false);
      });
  
    // Unsubscribe from blogs when no longer in use
    return () => subscriber();
  }, []); 


const add_bid  = ()=>{
	firebase.firestore()
		.collection('feed')
		.doc(feed_id)
		.collection('bid_list')
		.add({img,desc,timestamp:Date.now(),bid_val,user_data});


		set_bid_val("");
		alert("Bid has been posted");

		

		
}


if(loading){
	return <Loading />
}

	return (
		<div className="feed_view">
			
			<div className="feed_view_image">
 				
 				<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>

 				
 				<div className="feed_bottom">
 				

 										<div className="feed_bottom_left">

 												<IconButton>
													 <FavoriteRoundedIcon color="error" />
												</IconButton>	
												<IconButton>
													<ModeCommentRoundedIcon />
												</IconButton>	
												<IconButton>
													<ShareRoundedIcon />
												</IconButton>	

 											</div>
 											<div className="feed_bottom_right">
 												<IconButton>
													<BookmarkBorderRoundedIcon />
												</IconButton>	
 											</div>

										</div>

										<div className="feed_content">

											<h6>Start Bid : {start_bid}</h6>
											 <h5>56 Likes</h5>
										 	
										 	 <p> <h5>{moment(Date.now()).fromNow()}</h5> sgsitscoders Happy teacher's day 💖
												#sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes 
												#codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders
												 #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher

											 </p>
										 </div>

										 <div className="bottom_bid">

										 	 <div className="bid_image">
											 	<img src={bid} alt=""/>
											 </div>
										 	<IconButton>
										 		<InsertEmoticonIcon />
										 	</IconButton>



										 	<input type="number" value={bid_val}onChange={(e)=>set_bid_val(e.target.value)}placeholder="Post your Bid now"/>

										 	<IconButton onClick={()=>add_bid()}>
												<SendIcon />
											</IconButton>

										 </div>




			</div>
			<div className="feed_view_bid_list">
 				


				{
					bid_list.map((item,index)=>(

						<div className="feed_view_bid_comp" key={item.key}>
		 					<div className="user_bid">
		 						<img src={item.user_data.avatar} alt=""/>
		 						<p>{item.user_data.name}</p>

		 					</div>

		 					<div className="feed_view_bid">
		 						<p>{moment(item.timestamp).fromNow()}</p>
		 						<h4>{item.bid_val}$ Bid</h4>
		 						<p>what you need. But also if you are using react router you might find useful checking out useLocation and useHistory hooks</p>
		 					</div>
		 					

		 				</div>
					))
				}
 				

			</div>



			
		</div>
	)
}

export default FeedView