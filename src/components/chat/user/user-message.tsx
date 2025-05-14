import { cn } from "@/lib/utils";

type TMessages = {
  text?: string;
};
export default function UserChatMessage({
  text = "Create a 3D model of a cube",
}: TMessages) {
  return (
    <div className={cn("flex flex-col items-end w-full first-of-type:pt-[0%]")}>
      <p
        className={cn(
          " max-w-max p-2  px-3 max-md:text-sm bg-user-chat-message text-white font-medium  md:w-1/2 rounded-lg",
        )}
      >
        {text}
      </p>
    </div>
  );
}
