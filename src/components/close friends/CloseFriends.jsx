import './closefriends.css';

const CloseFriends = ({user}) => {
  return (
    <li className="sidebarfriend">
    <img src={user.profilepic} alt="" className="sidebarfriendimg" />
    <span className="sidebarfriendname">{user.username}</span>
  </li>
  )
}

export default CloseFriends
