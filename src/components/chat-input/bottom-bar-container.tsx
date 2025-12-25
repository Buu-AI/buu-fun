import SettingsBar from "../settings/settings-bar";
import ChatForm from "./chat-form";
// import SettingsBar from "../settings/settings-bar";
export type TBottomBarContainer = {
  action: "new_chat" | { sessionId: string };
};
export default function BottomBarContainer({ action }: TBottomBarContainer) {
  return (
    // <PersistProvider Loader={<BottomBarSkeleton />}>
      <div className="w-full px-1 py-0 mb-0     mx-auto  ">
        <div className=" relative ">
          <SettingsBar />
        </div>
        <div className=" relative  border-white">
          <ChatForm action={action} />
        </div>
      </div>
  );
}
