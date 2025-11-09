import ShareableBoardsButton from "@/components/boards/shareable-boards-button";
import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import ViewModelModal from "@/components/chat/assistant/view-model-modal";
import ChatContainer from "@/components/chat/chat-container";
import ChatMessageInitializer from "@/components/chat/chat-initializer";
import ChatMessageEventProvider from "@/components/chat/chat-message-event-provider";
import MaximizeViewModel from "@/components/chat/toolbar/maximize-view-model";
import ModelGenerationModal from "@/components/chat/toolbar/model-generation-modal";
import { constructMetadata } from "@/lib/construct-metadata";
// import RetryImageModal from "@/components/chat/toolbar/retry-image-modal";
import { DndKitProvider } from "@/providers/dnd-kit-provider";

export type TChatPage = {
  params: Promise<{ id: string }>;
};
export const metadata = constructMetadata({});
export default async function ChatPage({ params }: TChatPage) {
  const param = await params;
  const sessionId = param.id;

  return (
    <DndKitProvider>
      <main className="flex flex-col relative h-full w-full   max-h-[calc(100dvh-80px)]  overflow-hidden">
        <ChatMessageInitializer sessionId={sessionId} />

        <ChatMessageEventProvider sessionId={sessionId} />

        <ChatContainer sessionId={sessionId} />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl z-[50]    lg:mr-[0.15vw]">
          <BottomBarContainer action={{ sessionId }} />
        </div>
      </main>

      {/* <GenerateNFTModal /> */}
      <MaximizeViewModel />
      <ModelGenerationModal />
      <ShareableBoardsButton />
      <ViewModelModal />
    </DndKitProvider>
  );
}
