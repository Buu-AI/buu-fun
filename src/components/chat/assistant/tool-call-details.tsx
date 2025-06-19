"use client";
import { TToolRequest } from "@/types/chat/chat-types";
import GenerateModelsFromPrompt from "./tool-calls/generate-models-from-prompt";

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
      default: {
        return null;
      }
    }
  }

  return <div className="">{renderToolCallDetails()}</div>;
}
