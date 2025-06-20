import CreateNFTIcon from "@/assets/icons/create-nft-icon";

import { DownloadIcon } from "@/assets/icons";
import ShareIcon from "@/assets/icons/utility/share-icon";
import { Model } from "@/gql/types/graphql";
import useToolBar from "@/hooks/use-tool-bar";
import { Maybe, MaybeString } from "@/types";
import { TToolRequest } from "@/types/chat/chat-types";
import TooltipWrapper from "./tooltip-wrapper";

type TViewModelToolbar = {
  modelId: MaybeString;
  toolCallId: MaybeString;
  selectedModelUrl: MaybeString;
  model: Maybe<Model>;
  toolCall: Maybe<TToolRequest>;
};

export default function ViewModelToolbar({
  modelId,
  selectedModelUrl,
  toolCallId,
}: TViewModelToolbar) {
  const tokenized = true;
  const { downloadModel, shareModel, handleGenerateNFT } = useToolBar({
    modelId,
    selectedModelUrl,
    toolCallId,
  });
  return (
    <div className="flex items-center justify-between gap-3  px-4 md:px-6 w-full h-full">
      <div className="flex gap-3 items-center">
        {/* <TooltipWrapper
          align="start"
          content="Edit Texture"
          buttonIcon={<EditTextureIcon />}
          btnClassName="p-0.5"
          hoverState={tokenized}
          onClickCallback={() => {
            toast.success("hello");
          }}
        />
        <TooltipWrapper
          align="start"
          content="Edit Mesh"
          buttonIcon={<EditMeshIcon />}
          btnClassName="p-0.5"
          hoverState={tokenized}
          onClickCallback={() => {
            toast.success("hello");
          }}
        /> */}

        <TooltipWrapper
          align="start"
          content="Generate Collectible"
          buttonIcon={<CreateNFTIcon />}
          hoverState={tokenized}
          onClickCallback={handleGenerateNFT}
        />
      </div>
      <div className="flex items-center gap-3">
        <TooltipWrapper
          align="center"
          content="Download"
          buttonIcon={<DownloadIcon />}
          hoverState={tokenized}
          onClickCallback={downloadModel}
        />
        <TooltipWrapper
          align="end"
          content="Share"
          buttonIcon={<ShareIcon />}
          hoverState={tokenized}
          onClickCallback={shareModel}
        />
      </div>
    </div>
  );
}
