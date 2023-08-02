import './profile.css'
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img src="assets/galaxy.jpg" alt="" className="profilecoverimg" />
              <img src="assets/person/1.jpeg" alt="" className="profileuserimg" />

            </div>
            <div className="profileinfo">
              <h4 className='profileinfoname'>Naveen Kumar</h4>
              <h4 className='profileinfodesc'>
                Engage, Enlighten, Encourage and especially... just be yourself!.
              </h4>
            </div>
          </div>
          <div className="profilerightbottom">
             <Feed />
           <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
