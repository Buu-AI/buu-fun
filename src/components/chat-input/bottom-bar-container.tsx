import SettingsBar from "../settings/settings-bar";
import ChatForm from "./chat-form";
// import SettingsBar from "../settings/settings-bar";
export type TBottomBarContainer = {
  action: "new_chat" | { sessionId: string };
};
export default function BottomBarContainer({ action }: TBottomBarContainer) {
  return (
    <div className="w-full px-1 py-0 mb-0     mx-auto  ">
      {/* <div className="absolute h-24 left-0 bottom-0 px-1 w-full">
        <div className="  w-full bg-buu-secondary h-full  backdrop-blur-3xl rounded-b-2xl   " />
      </div> */}
      <div className=" relative ">
        <SettingsBar />
      </div>
      <div className=" relative  border-white">
        <ChatForm action={action} />
      </div>
      {/* <div className="flex  items-center justify-center ">
        <p className="text-[12px] font-medium text-muted-foreground/60">
          Each 3D creation will cost
          <span className=" text-white/70"> 1 credit</span>
        </p>
      </div> */}
    </div>
  );
}
