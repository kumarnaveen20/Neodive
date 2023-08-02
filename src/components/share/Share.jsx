import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import './share.css'
const Share = () => {
  


  return (
    <div className='share'>
      <div className="sharewrapper">
        <div className="sharetop">
           <Link to='/profile'><img src="/assets/person/1.jpeg" alt="" className="shareprofileimg" /></Link>
            <input placeholder="what's in your mind Naveen?" className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
            <div className="shareoptions">
                <div className="shareoption">
                <PermMedia htmlColor='tomato' className='shareicon' />
                    <span className="shareoptiontext">Photo or video</span>
                </div>
                <div className="shareoption">
                <Label htmlColor='blue' className='shareicon' />
                    <span className="shareoptiontext">Tag</span>
                </div>
                <div className="shareoption">
                <Room htmlColor='green' className='shareicon' />
                    <span className="shareoptiontext">Location</span>
                </div>
                <div className="shareoption">
                <EmojiEmotions htmlColor='orange' className='shareicon' />
                    <span className="shareoptiontext">Feeling</span>
                </div>
            </div>
            <button className="sharebutton">Share</button>
        </div>

      </div>
    </div>
  )
}

export default Share
