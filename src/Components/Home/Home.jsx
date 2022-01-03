import React, { useState } from "react";

import Title from "./Title/Title"
import NameSuper from "./NameSuper/NameSuper"

import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { ADD_TITLE, HOME_COPY, LINE1_OBJECT, LINE2_OBJECT, REMOVE_TITLE, REMOVE_LINE1, REMOVE_LINE2 } from "../../constants/const"
import Logo from "../../logo/blq-orbit-blocks_grey.svg";

import "./style.scss";

export const mainClass = "home-page";

const Home = () => {

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [title, setTitle] = useState("");
  const [playVideo, setPlayVideo] = useState(true);

  const videoProgress = (timePlayed) => {
    console.log("Ee")
    const removeExtra = timePlayed.toFixed(2);

    if(removeExtra in LINE1_OBJECT) {
      setLine1(LINE1_OBJECT[removeExtra]);
      setPlayVideo(false);
    } 
    if(removeExtra in LINE2_OBJECT) {
      setLine2(LINE2_OBJECT[removeExtra]);
    } 
    if(removeExtra in REMOVE_LINE1) {
      setLine1(REMOVE_LINE1[removeExtra]);
    } 
    if(removeExtra in REMOVE_LINE2) {
      setLine2(REMOVE_LINE2[removeExtra]);
    }
    if (removeExtra in ADD_TITLE) {
      setTitle(ADD_TITLE[removeExtra]);
      setPlayVideo(false);
    } 
    if (removeExtra in REMOVE_TITLE) {
      setTitle(REMOVE_TITLE[removeExtra]);
    }
  };

  const playClicked = () => {
    if (line1 !== "" || line2 !== "" || title !== "") {
      setPlayVideo(!playVideo);
    }
  };

  return (
    <div className={mainClass}>
      <div className={`${mainClass}__video-player`}>
        <VideoPlayer
          handleProgress={videoProgress}
          videoUrl={HOME_COPY.URL}
          play={playVideo}
          playButtonClicked={playClicked}
        />
      </div>
      <div className={`${mainClass}__text-container`}>
        <div className={`${mainClass}__logo`}>
          <img alt="Logo" src={Logo} width="100" height="30" />
        </div>
        <Title 
          titleText={title}
        />
        <NameSuper 
          line1Text={line1}
          line2Text={line2}
        />
      </div>
    </div>
  );
};

Home.displayName = "Home";
export default Home;
