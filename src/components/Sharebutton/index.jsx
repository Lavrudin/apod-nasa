import { ShareNetwork } from "phosphor-react";
import { useState } from "react";

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

export default function ShareButton() {
  const [show, setShow] = useState(false);

  let sizeIcon = 30;
  const shareUrl = "https://apod-nasa-delta.vercel.app/details";

  return (
    <>
      <button
        title="Share"
        onClick={() => setShow(!show)}
        className="p-2 bg-[#6F79C4] enabled:brightness-75 hover:brightness-75 transition-all duration-700"
      >
        <ShareNetwork />
      </button>
      {show ? (
        <div className="flex flex-col gap-2 mt-9 p-4 -ml-[11.3rem] bg-[#6F79C4] absolute">
          <div className="flex justify-between items-center">
            <p className="text-xs">Share</p>
          </div>
          <div className="flex gap-2">
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon
                className="hover:brightness-75 transition-all duration-700"
                size={sizeIcon}
              />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon
                className="hover:brightness-75 transition-all duration-700"
                size={sizeIcon}
              />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon
                className="hover:brightness-75 transition-all duration-700"
                size={sizeIcon}
              />
            </WhatsappShareButton>
            <LinkedinShareButton url={shareUrl}>
              <LinkedinIcon
                className="hover:brightness-75 transition-all duration-700"
                size={sizeIcon}
              />
            </LinkedinShareButton>
            <TelegramShareButton url={shareUrl}>
              <TelegramIcon
                className="hover:brightness-75 transition-all duration-700"
                size={sizeIcon}
              />
            </TelegramShareButton>
          </div>
        </div>
      ) : null}
    </>
  );
}
