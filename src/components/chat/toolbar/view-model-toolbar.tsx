
import { DownloadIcon } from "@/assets/icons";
import SelectObjectIcon from "@/assets/icons/select-object-icon";
import Animator from "@/assets/icons/utility/animator";
import Pen from "@/assets/icons/utility/pen";
import ShareIcon from "@/assets/icons/utility/share-icon";
import useToolBar from "@/hooks/use-tool-bar";
import { MaybeString } from "@/types";
import TooltipWrapper from "./tooltip-wrapper";
type TViewModelToolbar = {
  modelId: MaybeString;
  toolCallId: MaybeString;
  selectedModelUrl: MaybeString;
};

export default function ViewModelToolbar({
  modelId,
  selectedModelUrl,
  toolCallId,
}: Readonly<TViewModelToolbar>) {
  const {
    downloadModel,
    shareModel,
    addModelToPlayground,
    addToAnimator,
    addToEditor,
    // handleGenerateNFT,
    // tokenized
  } = useToolBar({
    modelId,
    selectedModelUrl,
    toolCallId,
  });
  return (
    <div className="flex items-center justify-between gap-3  px-4 md:px-6 w-full h-full">
      <div className="flex gap-3 items-center">
        {/* <TooltipWrapper
          align="start"
          content="Generate Collectible"
          buttonIcon={<CreateNFTIcon />}
          hoverState={tokenized}
          disabled={tokenized}
          onClickCallback={handleGenerateNFT}
        /> */}
        <TooltipWrapper
          align="start"
          content="Add to Playground"
          IconClassName="w-7 h-7"
          buttonIcon={
            <div className="w-7 flex h-7">
              <SelectObjectIcon height={"100%"} width={"100%"} />
            </div>
          }
          btnClassName="p-0.5 hidden md:flex"
          hoverState={false}
          onClickCallback={() => {
            addModelToPlayground();
          }}
        />
        <TooltipWrapper
          align="start"
          content="Rig & Animate"
          IconClassName="w-7 h-7"
          buttonIcon={
            <div className="w-7 h-7 p-1">
              <Animator />
            </div>
          }
          btnClassName="p-0.5 hidden md:flex"
          hoverState={false}
          onClickCallback={() => {
            addToAnimator();
          }}
        />
        <TooltipWrapper
          align="start"
          IconClassName="w-7 h-7"
          content="Edit Mesh"
          buttonIcon={
            <div className="w-7 h-7 p-1">
              <Pen />
            </div>
          }
          btnClassName="p-0.5 hidden md:flex"
          hoverState={false}
          onClickCallback={() => {
            addToEditor();
          }}
        />
      </div>
      <div className="flex items-center gap-3">
        <TooltipWrapper
          align="center"
          content="Download"
          buttonIcon={<DownloadIcon />}
          hoverState={false}
          onClickCallback={downloadModel}
        />
        <TooltipWrapper
          align="end"
          content="Share"
          buttonIcon={<ShareIcon />}
          hoverState={false}
          onClickCallback={shareModel}
        />
      </div>
    </div>
  );
}
