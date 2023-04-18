import "./post.css"
import { MdOutlineMoreVert } from "react-icons/md"
import {FcLike} from "react-icons/fc"
import {AiTwotoneLike} from "react-icons/ai"

function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <span className="postUsername">C Sheeley</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MdOutlineMoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
                <img className="postImg" src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FcLike className="likeIcon" />
                    <AiTwotoneLike className="likeIcon" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">32 comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Post
