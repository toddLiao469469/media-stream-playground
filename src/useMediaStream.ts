import React, { useEffect, useState } from "react";

const useMediaStream = (
  setErrorText: React.Dispatch<React.SetStateAction<string>>
) => {
  const [mediaStream, setMediaStream] = useState<any>();

  useEffect(() => {
    const getMediaStream = async () => {
      try {
        const mediaStream =
          (await navigator.mediaDevices?.getUserMedia({
            audio: false,
            video: true
          })) ?? "default";
        setMediaStream(mediaStream);
      } catch (e) {
        setErrorText(String(e));
      }
    };
    getMediaStream();
  });

  return mediaStream;
};

export { useMediaStream }