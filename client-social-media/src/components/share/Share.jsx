import "./share.css"
import { MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions } from "react-icons/md"

function Share() {
  return (
    <div className="share">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
            <input placeholder="What's on your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom"></div>
            <div className="shareOptions">
                <div className="shareOption">
                    <MdPermMedia htmlColor="tomato" className="shareOptionImg" />
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <MdLabel htmlColor="blue" className="shareOptionImg" />
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <MdRoom htmlColor="green" className="shareOptionImg" />
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <MdEmojiEmotions htmlColor="goldenrod" className="shareOptionImg" />
                    <span className="shareOptionText">Feelings</span>
                </div>
                <button className="shareButton">Share</button>
            </div>
    </div>
  )
}

export default Share
