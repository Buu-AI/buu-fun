import SettingsBar from "../settings/settings-bar";
import ChatForm from "./chat-form";
import ImageDragAndDrop from "./image-drag-n-dropper";
// import SettingsBar from "../settings/settings-bar";
export type TBottomBarContainer = {
  action: "new_chat" | { sessionId: string };
};
export default function BottomBarContainer({ action }: TBottomBarContainer) {
  return (
    <div className="w-full px-1 py-1 mb-1  max-w-2xl mx-auto ">
      <div className="relative z-50">
        <SettingsBar />
      </div>
      <div className="relative">
        <ChatForm action={action} />
        <ImageDragAndDrop />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-[12px] font-medium text-muted-foreground/60">
          Each 3D creation will cost
          <span className=" text-white/70"> 1 credit</span>
        </p>
      </div>
    </div>
  );
}
