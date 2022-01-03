import React from "react";
import PropTypes from "prop-types";

import ReactPlayer from "react-player";

const VideoPlayer = ({ handleProgress, play, videoUrl, playButtonClicked }) => (
      <ReactPlayer
        data-testid="video-player"
        url={videoUrl}
        onPlay={playButtonClicked}
        className="react-player"
        playing
        width="100%"
        progressInterval={5}
        height="100%"
        controls
        onProgress={(e) => handleProgress(e.playedSeconds)}
      />
);

VideoPlayer.propTypes = {
  handleProgress: PropTypes.func,
  videoUrl: PropTypes.string.isRequired,
  play: PropTypes.bool.isRequired,
  playButtonClicked: PropTypes.func,
};

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
