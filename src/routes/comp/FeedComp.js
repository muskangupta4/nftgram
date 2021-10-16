import React ,{useState,useEffect}from 'react';
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
import {useHistory,useLocation } from "react-router-dom";
import firebase from "../../base.js";
import Loading from "../../Loading";

function FeedComp() {

	const history  = useHistory();

	const [feed_list, set_feed_list] = useState("");
	const [loading, setLoading] = useState(true);




	useEffect(() => {

    const subscriber = firebase.firestore()
    
      .collection('feed')
      .orderBy('timestamp','desc')
      .onSnapshot(querySnapshot => {
        
        const feed_list_ = [];
  
        querySnapshot.forEach(doc => {

        		feed_list_.push({
        		  	...doc.data(),
          	 		 key: doc.id
        		});
        					
        
        });
    
        set_feed_list(feed_list_);
        setLoading(false);
      });
  
    // Unsubscribe from blogs when no longer in use
    return () => subscriber();
  }, []); 


if(loading){
	return <Loading />
}

	return (
		<div className="feed">
			
			<div className="feed_list">
				{
								feed_list.map((item,index)=>(
									<div className="feed_comp" key={item.key} >


										<div className="feed_comp_user_head">


											<div className="feed_comp_user">
												<img  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>

												<div className="user">
													<h6>Shivam Namdeo</h6>
													<p>Shri Govindram Seksaria Institute of Technology and Science</p>
												</div>
											</div>

											<IconButton>
												<MoreVertRoundedIcon />
											</IconButton>

										</div>


										<div className="feed_image" onClick={()=>history.push("/feed/"+`${item.key}`)}>
											<img src={item.img} alt=""/>
										</div>


										<div className="feed_bottom">
 											<div className="feed_bottom_left">

 												<IconButton>
													{index % 2 != 0 ? <FavoriteBorderRoundedIcon /> :  <FavoriteRoundedIcon color="error" />}
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
											 <h5>56 Likes</h5>
										 	
										 	 <p> <h5>{moment(item.timestamp).fromNow()}</h5> sgsitscoders Happy teacher's day 💖
												#sgsitsindore #sgsitscoders #coding #programming #programingmeme #programingmemes #codingmemes 
												#codingmeme #sgsits_indore #sgsits_clg #gsits #sgsitsmeme #codingisfun #programmer #coder #coders
												 #indore #sgsits #teachersday #sgsitsteachers #teacher #guru #teaxhersofinstagram #instateacher

											 </p>
										 </div>

										

										 <div className="bottom_bid"  onClick={()=>history.push("/feed/"+`${item.key}`)}>

										 	 <div className="bid_image" >
											 	<img src={bid} alt="" />
											 </div>
										 	<IconButton>
										 		<InsertEmoticonIcon />
										 	</IconButton>



										 	<input type="number" disabled placeholder="How much do you want to bid ...?"/>

										 	<IconButton>
												<SendIcon />
											</IconButton>

										 </div>

									</div>
								))
				}
			</div>

		</div>
	)
}

export default FeedComp