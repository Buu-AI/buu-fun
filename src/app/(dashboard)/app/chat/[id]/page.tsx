import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import ChatContainer from "@/components/chat/chat-container";
import ChatMessageInitializer from "@/components/chat/chat-initializer";
import GenerateNFTModal from "@/components/chat/toolbar/generate-nft-modal";
import MaximizeViewModel from "@/components/chat/toolbar/maximize-view-model";
import ModelGenerationModal from "@/components/chat/toolbar/model-generation-modal";
import RetryImageModal from "@/components/chat/toolbar/retry-image-modal";
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
        <ChatMessageInitializer sessionId={sessionId} />
        <ChatContainer sessionId={sessionId} />
        <div className="lg:mr-[0.15vw]">
          <BottomBarContainer action={{ sessionId }} />
        </div>
      </main>
      <GenerateNFTModal />
      <ModelGenerationModal />
      <MaximizeViewModel />
      <RetryImageModal />
    </DndKitProvider>
  );
}
