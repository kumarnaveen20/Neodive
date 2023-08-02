import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {Posts}  from '../../Dummydata';
const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share />
        {Posts.map((p)=>(
         <Post key={p.id} pos={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
