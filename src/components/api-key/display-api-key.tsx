import { useAppSelector } from "@/hooks/redux";
import React, { useState } from "react";
import { Button } from "../ui/button";
import CopyBlackIcon from "@/assets/icons/copy-black-icon";
import { BorderBeam } from "../ui/border-beam";
import { Check } from "lucide-react";

export default function DisplayAPIKey() {
  const apiKey = useAppSelector((state) => state?.apiKey?.key);
  const apiKeyName = useAppSelector((state) => state?.apiKey?.name);
  const [isCopy, setIsCopied] = useState(false);

  function handleCopy() {
    if (!apiKey) return;

    window.navigator.clipboard.writeText(apiKey);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }
  return (
    <div>
      <div className="bg-api-key-display flex flex-col gap-0.5 py-3 rounded-xl overflow-hidden px-3">
        <p className="text-xs font-medium uppercase leading-normal  ">
          {apiKeyName}
        </p>
        <p className="max-w-lg px-2 break-all">{apiKey}</p>
        <BorderBeam
          initialOffset={0}
          size={70}
          colorFrom="rgba(119, 217, 253,1)"
          colorTo="rgba(119, 217, 253,1)"
          className="border-2 rounded-2xl z-50 relative"
        />{" "}
      </div>
      <div className="w-full pt-4">
        <Button
          onClick={() => {
            handleCopy();
          }}
          size="special"
          className="w-full"
        >
          {isCopy ? (
            <>
              <Check className="w-5 h-5" />
              <p>Copied</p>
            </>
          ) : (
            <>
              <CopyBlackIcon />
              Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
