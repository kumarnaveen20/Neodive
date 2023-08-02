import './rightbar.css'
import {User} from '../../Dummydata';
import Onlinefr from '../online/Onlinefr';

const Rightbar = ({profile}) => {
  const Homerightbar=()=>{
   return ( <>
       <div className="birthdaycontainer">
          <img className='birthdayimg' src="assets/gift.png" alt="" />
          <span className="birthdaytext">
            <b>Pola Foster</b> and <b>other friends</b> have birthday a today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarad" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className='rightbarfriendlist'>
          {User.map(u=>(
            <Onlinefr key={u.id} user={u}/>
          ))
          
          }
          
        </ul>
    </>)
  }
  const Profilerightbar=()=>{
    return (
      <>
        <h4 className='rightbartitle '>User Information </h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">Pune</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">Maharashtra</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfovalue">Single</span>
          </div>
        </div>
        <h4 className='rightbartitle '>User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Deathstroke</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Deathstroke</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Deathstroke</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Deathstroke</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/9.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Deathstroke</span>
          </div>
          <div className="rightbarfollowing">
            <img src="assets/person/8.jpeg" alt="" className="rightbarfollowingimg" />
            <span className="rightbarfollowingname">Deathstroke</span>
          </div>
        </div>
      </>
    )

  }
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
       {profile?<Profilerightbar/>:<Homerightbar/>}
      </div>
    </div>
  )
}

export default Rightbar
