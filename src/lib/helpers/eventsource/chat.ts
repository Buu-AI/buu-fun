import { TChatEventHandler } from "@/types/chat/event-source";

type TExtendedParams = {
  "message-updated": {
    invalidate: () => void;
  };
  "message-new-token": {
    message: string;
  };
  // "message-new-token" doesn't have extended params
};

export const handleEventSource: TChatEventHandler<TExtendedParams> = {
  "message-new-token": () => {},
  "message-updated": (data) => {
    data.invalidate();
  },
};
