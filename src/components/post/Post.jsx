import { MoreVert } from '@material-ui/icons'
import './post.css'
import { User } from '../../Dummydata';
import { useState } from 'react';
const Post = ({ pos }) => {
    const [like,setlike]=useState(pos.like);
    const [isliked,setisliked]=useState(false);
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img className='postprofileimg' src={User.filter(u => u.id === pos.userid)[0].profilepic} alt="" />
                        <span className="postusername">{User.filter(u => u.id === pos.userid)[0].username}</span> 
                        <span className="postdate">{pos.date}</span>
                    </div>
                    <div className="posttopright">
                        <MoreVert />
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttext">{pos?.desc}</span>
                    <img className='postimg' src={pos.photo} alt="" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img className='likeicon' src="assets/like.png" alt="" onClick={()=>{
                            if(isliked==false){
                                setlike(like+1);
                                setisliked(true);}
                            else{
                                setisliked(like-1);
                                setisliked(false);
                            }
                        }} />
                        {isliked?<img className='likeicon' src="assets/heart.png" alt="" />:null} 
                        <span className="likecounter">{like} People Like it</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">{pos.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
