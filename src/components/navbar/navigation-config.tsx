import { MagicPenIcon, SizePenIcon } from "@/assets/icons";
import ApiKeyHeaderIcon from "@/assets/icons/api-key-header-icon";
import LogoutIcon from "@/assets/icons/log-out-Icon";
import SettingsIcon from "@/assets/icons/settings-icon";
import { ReactNode } from "react";

export type NavigationItem = {
  label: string;
  href?: string;
  icon: ReactNode;
  textClassName?: string;
  onClick?: () => void | Promise<void>;
};

export const createNavigationConfig = (
  logout: () => Promise<void>
): NavigationItem[] => [
  {
    label: "Home",
    href: "/app",
    icon: <MagicPenIcon className="text-[#78DBFF]" />,
  },
  // {
  //   label: "Referral Program",
  //   href: "/app/referral",
  //   icon: <ReferralIcon />,
  //   textClassName: "rainbow-text",
  // },
  // {
  //   label: "$BUU Token",
  //   href: "/app/portfolio",
  //   icon: <WalletIcon2 />,
  // },
  // {
  //   label: "NFT's",
  //   href: "/app/nfts",
  //   icon: <NFTSideBarIcon />,
  // },
  {
    label: "Boards",
    href: "/app/boards",
    icon: <SizePenIcon />,
  },
  {
    label: "API Keys",
    href: "/app/api-key",
    icon: <ApiKeyHeaderIcon />,
  },
  {
    label: "Settings",
    href: "/app/profile",
    icon: <SettingsIcon />,
  },
  {
    label: "Logout",
    icon: <LogoutIcon />,
    onClick: logout,
  },
];
