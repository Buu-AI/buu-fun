"use client";
import { TToolRequest } from "@/types/chat/chat-types";
import GenerateImageFromReference from "./tool-calls/generate-image-from-reference";
import GenerateModelByEdit from "./tool-calls/generate-model-by-edit";
import GenerateModelDetails from "./tool-calls/generate-model-details";
import GenerateModelsFromImage from "./tool-calls/generate-models-from-image";
import GenerateModelsFromPrompt from "./tool-calls/generate-models-from-prompt";
import GenerateNftDetails from "./tool-calls/generate-nft-details";

type TToolCallDetails = {
  toolRequest: TToolRequest;
};

export default function ToolCallDetails({ toolRequest }: TToolCallDetails) {
  const { details } = toolRequest;
  if (!details) return;
  function renderToolCallDetails() {
    switch (details?.__typename) {
      case "GenerateModelsFromPromptDetails": {
        return <GenerateModelsFromPrompt details={details} />;
      }
      case "GenerateModelsFromImageDetails": {
        return <GenerateModelsFromImage details={details} />;
      }
      case "GenerateModelsFromReferencesDetails": {
        return <GenerateImageFromReference details={details} />;
      }
      case "GenerateModelsDetails": {
        return <GenerateModelDetails details={details} />;
      }
      case "GenerateModelsFromEditDetails": {
        return <GenerateModelByEdit details={details} />;
      }
      case "GenerateNftDetails": {
        return <GenerateNftDetails details={details} />;
      }
      default: {
        return null;
      }
    }
  }

  return <div className="">{renderToolCallDetails()}</div>;
}
