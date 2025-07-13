"use client";
import { DiscordIcon } from "@/assets/icons";
import CodeIcon from "@/assets/icons/code-icon";
import DocumentationIcon from "@/assets/icons/documenation-icon";
import MailIcon from "@/assets/icons/mail-icon";
import TelegramIconWhite from "@/assets/icons/Telegram-icon-white";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import YoutubePlayIcon from "@/assets/icons/youtube-play";
import { LINKS } from "@/constants/social-links";
import Link from "next/link";

export default function KnowMoreContent() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-1  items-start ">
        <h4 className=" font-bold leading-none mb-1">Help</h4>
        <Link
          href={LINKS.DOCS}
          target="_blank"
          className="flex items-center w-full gap-2 group/link"
        >
          <div className="w-5 h-5 ">
            <DocumentationIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            Documentation
          </p>
        </Link>
        <Link
          href={LINKS.API_REFERENCE}
          target="_blank"
          className="flex items-center w-full gap-2 group/link"
        >
          <div className="w-5 h-5 ">
            <CodeIcon />
          </div>{" "}
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            API Reference
          </p>
        </Link>
        <Link
          href={LINKS.YT_TUTORIALS}
          target="_blank"
          className="flex items-center w-full gap-2 group/link"
        >
          <div className="w-5 h-5 ">
            <YoutubePlayIcon />
          </div>{" "}
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            Video Tutorial
          </p>
        </Link>
        <Link
          href={LINKS.CONTACT_SUPPORT_MAIL}
          target="_blank"
          className="flex items-center w-full gap-2 group/link"
        >
          <div className="w-5 h-5 ">
            <MailIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            Contact Support
          </p>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-muted-foreground/40 my-3 " />
      <div className="flex flex-col gap-1  items-start ">
        <h4 className=" font-bold leading-none  mb-1">Communities</h4>
        <Link
          href={LINKS.DISCORD}
          target="_blank"
          className="flex items-center w-full gap-2 group/link"
        >
          <div className="w-5 h-5 ">
            <DiscordIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            Discord
          </p>
        </Link>
        <Link
          href={LINKS.TWITTER}
          target="_blank"
          className="flex items-center w-full gap-2 group/link"
        >
          <div className="w-5 h-5 ">
            <TwitterIcon />
          </div>{" "}
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            X
          </p>
        </Link>
        <Link
          href={LINKS.TELEGRAM}
          target="_blank"
          className="flex items-center w-full gap-2 group/link"
        >
          <div className="w-5 h-5 ">
            <TelegramIconWhite />
          </div>
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            Telegram
          </p>
        </Link>
        {/* <Link
          href={"https://docs.buu.fun/"}
          target="_blank"
          className="flex items-center w-full gap-2 group"
        >
          <div className="w-5 h-5 ">
            <TikTokIcon />
          </div>
          <p className="leading-none text-gray-400 group-hover/link:text-white font-medium">
            TikTok
          </p>
        </Link> */}
      </div>
    </div>
  );
}
