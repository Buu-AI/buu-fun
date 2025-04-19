"use client";

import { useAuthentication } from "@/providers/account.context";
import { Fingerprint } from "lucide-react";
import { Button } from "../ui/button";
import CreditUsedIcon from "./credit-used-icon";
import DesktopProfileNavigation from "./desktop-profile-navigation";
import MobileProfileNavigation from "./mobile-profile-navigation";
import RecentChats from "./recent-chats";
import ShareableBoardsButton from "../boards/shareable-boards-button";
import ShareButtonWrapper from "../boards/share-button-wrapper";

export default function Topbar() {
  const { address, isAuthenticated, loading, login } = useAuthentication();
  const shouldConnect = !isAuthenticated || !address;

  return (
    <div className="flex items-center justify-end lg:gap-0 gap-2  lg:justify-between pr-1 lg:pr-10 py-4 lg:py-6">
      <div className="flex items-center gap-4">
        {!shouldConnect ? <RecentChats /> : null}
        {!shouldConnect ? <ShareButtonWrapper /> : null}
        <ShareableBoardsButton />
      </div>
      {loading ? (
        <div className="w-8 h-8 rounded-full border-2 border-buu-secondary border-t-transparent animate-spin" />
      ) : shouldConnect ? (
        <div className="w-full flex justify-end">
          <Button
            onClick={() => {
              login();
            }}
            className="border-buu font-medium shadow-buu"
          >
            <Fingerprint className="text-buu-button animate-pulse" />
            Sign In
          </Button>
        </div>
      ) : (
        <div className="flex items-center self-end justify-center gap-2">
          <CreditUsedIcon />
          <DesktopProfileNavigation />
          <MobileProfileNavigation />
        </div>
      )}
    </div>
  );
}
