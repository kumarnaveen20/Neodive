import './topbar.css'
import { Search,Person, Chat, Notifications } from '@material-ui/icons'
import './topbar.css'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
  <div className="topbarcontainer">
    <div className="topbarleft">
       <Link className='spacebooklink' to='/home'> <span className="logo">Neodive</span></Link>
    </div>
    <div className="topbarcenter">
        <div className="searchbar">
            <Search className='searchicon'/>
            <input placeholder='Search for' className="searchinput" />
        </div>
    </div>
    <div className="topbarright">
        <div className="topbarlinks">
            <Link className='homepagelink' to='/home'><span className="topbarlink">Homepage</span></Link>
            <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
            <div className="topbariconitem">
            <Person/>
            <span className="topbariconbadge">1</span>
            </div>
            <div className="topbariconitem">
            <Chat/>
            <span className="topbariconbadge">1</span>
            </div>
            <div className="topbariconitem">
            <Notifications/>
            <span className="topbariconbadge">1</span>
            </div>
        </div>
        <Link to="/profile"><img src="./assets/person/1.jpeg" alt="" className="topbarimg" /></Link>
    </div>
  </div>
  )
}

export default Topbar
