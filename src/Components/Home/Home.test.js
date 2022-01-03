import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, screen, mount } from "@testing-library/react";

import Home from "./Home";
import VideoPlayer from '../VideoPlayer/VideoPlayer'

describe("Home", () => {
    let wrapper
    const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(() => {})

    const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, 'pause')
    .mockImplementation(() => {})
    const props  = {
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4",
    };
    const handleProgress = jest.fn();
    const playButtonClicked = jest.fn();
    const videoProgress = jest.fn()
    const playClicked = jest.fn()
    
  beforeEach(() => {
  });

  it("Component should be render", () => {
    const { container } = render(<Home />);
    expect(container.querySelector(".home-page")).toBeInTheDocument();
  });

  it("Component should be render", () => {
    wrapper = render(
      <Home>
        <VideoPlayer
          videoUrl = {props.videoUrl}
          playButtonClicked={playButtonClicked} 
          handleProgress={handleProgress('2.0')} 
          play
        />
      </Home>
    )
    // const mockTracking = { playButtonClicked: jest.fn() };
    // jest.spyOn(playButtonClicked, 'track').mockReturnValue(mockTracking);
    fireEvent.click(screen.getByTestId('video-player'))
    expect(handleProgress).toHaveBeenCalled();
    // expect(container.querySelector(".home-page__video-player")).toBeInTheDocument();
    // const button = container.querySelector('.react-player video')
    // expect(button).toBeInTheDocument();

    // button.play();

  });

  it("Componet should have media player, checking play and pause", async () => {
    
    const { container } = render(<Home />);
    expect(container.querySelector(".home-page__video-player")).toBeInTheDocument();
    const button = container.querySelector('video')
    let playPromise = button.play;
    await act(async () => {
        await fireEvent.click(button);
    });
  })
});
