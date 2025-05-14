import { cn } from "@/lib/utils";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

type TAssistantMessage = {
  prompt?: string | null;
};

export default function AssistantMessage({ prompt }: TAssistantMessage) {
  return (
    <div className="">
      <ReactMarkdown
        unwrapDisallowed={true}
        disallowedElements={["pre", "code"]}
        className={cn("prose prose-base prose-blue text-white")}
        remarkPlugins={[remarkGfm]}
      >
        {prompt ?? ""}
      </ReactMarkdown>
    </div>
  );
}
