import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import ModalTemplate from "./modals/ModalTemplate";
import { XCircleIcon } from "@heroicons/react/24/solid";
import YoutubePlayer from "./YoutubePlayer";

type PropsType = {
  isOpen: boolean;
  videoUrl: string;
  onDismiss: () => void;
};
export default function VideoModal({ isOpen, videoUrl, onDismiss }: PropsType) {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <ModalTemplate
        isOpen={isOpen}
        videoUrl={videoUrl}
        onDismiss={onDismiss}
        size="xl"
      >
        <div
          className="flex justify-center"
          onClick={() => {
            onDismiss();
          }}
        >
          <XCircleIcon width={50} color="white" className="mb-3" />
        </div>
        <div>
          <YoutubePlayer />
        </div>
      </ModalTemplate>
    </>
  );
}
