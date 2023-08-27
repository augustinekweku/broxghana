/* eslint-disable @next/next/no-img-element */
import { useState, useTransition } from "react";
import YouTube from "react-youtube";
import FadeLoader from "react-spinners/FadeLoader";

const Player = ({
  setHasLoaded,
  videoId,
}: {
  setHasLoaded: (hasLoaded: boolean) => void;
  videoId: string;
}) => {
  // Once the YouTube package (react-youtube) has loaded
  // tell the thumbnail it is no longer needed.
  // Play the video.
  const _onReady = (event: any) => {
    setHasLoaded(true);
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={_onReady}
      className={"videoInner"}
      iframeClassName={"videoInner"}
    />
  );
};

export default function YoutubePlayer() {
  // useTransition is used to let React know there will be a
  // rerender when the button is pressed.
  const [, startTransition] = useTransition();

  // These two states handle the button press, and
  // the loading of the YouTube iframe.
  const [showVideo, setShowVideo] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div className={"youtube_container"}>
      <div className={"videoRatio"}>
        {
          // If the button has not been pressed, and the YouTube
          // video is not loading - keep the button rendered.
        }
        {!hasLoaded && (
          <button
            className={"thumbnailButton"}
            onClick={() => {
              startTransition(() => {
                setShowVideo(true);
              });
            }}
          >
            <div className={"videoInner flex justify-center items-center"}>
              <FadeLoader color="#bfccea" className="z-10" />
            </div>
          </button>
        )}
        {showVideo && (
          <Player videoId="Ow35nfF3PfU" setHasLoaded={setHasLoaded} />
        )}
      </div>
    </div>
  );
}
