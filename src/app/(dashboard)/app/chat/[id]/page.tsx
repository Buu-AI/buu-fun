import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import ChatContainer from "@/components/chat/chat-container";
import GenerateNFTModal from "@/components/generation/generate-nft-modal";
import { DndKitProvider } from "@/providers/dnd-kit-provider";

export type TChatPage = {
  params: Promise<{ id: string }>;
};

export default async function ChatPage({ params }: TChatPage) {
  const param = await params;
  const sessionId = param.id;

  return (
    <DndKitProvider>
      <main className="flex flex-col relative h-full w-full   max-h-[calc(100vh-100px)]  overflow-hidden">
        {/* <ThreadsChatInitializer threadId={threadId} /> */}
        <ChatContainer sessionId={sessionId} />
        {/* Bottom input section */}
        <div className="lg:mr-[0.15vw]">
          <BottomBarContainer action={{ sessionId }} />
        </div>
      </main>
      {/* <RetryConfirmationDialog /> */}
      <GenerateNFTModal />
    </DndKitProvider>
  );
}
