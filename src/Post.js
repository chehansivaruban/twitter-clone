import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Chehan Sivaruban{" "}
              <span>
                <VerifiedIcon className="post__badge" /> @chehansivaruban
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Hi this is a dummy text that i put in. This is a twitter React js
              clone
            </p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
