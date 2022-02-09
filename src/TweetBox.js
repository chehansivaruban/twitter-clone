import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="What's happening?" type="text" />
          {/* <input placeholder="What's happening?" type="text" /> */}
        </div>
        <input
          // value={tweetImage}
          // onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
