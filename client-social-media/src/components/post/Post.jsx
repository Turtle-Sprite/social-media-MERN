import "./post.css"
import { MdOutlineMoreVert } from "react-icons/md"
import {FcLike} from "react-icons/fc"
import {AiTwotoneLike} from "react-icons/ai"
import { useState } from "react"

import {Users} from '../../dummyData'

function Post({post}) {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={
                        Users.filter((u) => u.id === post.userId)[0].profilePicture
                    } alt="" />
                    <span className="postUsername">{
                        Users.filter((u) => u.id === post.userId)[0].username
                    }</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MdOutlineMoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FcLike className="likeIcon" onClick={likeHandler} />
                    <AiTwotoneLike className="likeIcon"  onClick={likeHandler}/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}


export default Post;