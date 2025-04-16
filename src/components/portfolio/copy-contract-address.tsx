import React from "react";
import OverviewTilesContainer from "./overview-tiles";
import toast from "react-hot-toast";

export default function CopyContractAddress({ address }: { address: string }) {
  function handleCopy() {
    if (!address) return;
    window.navigator.clipboard.writeText(address);
    toast.success("Address Copied to clipboard");
  }

  return (
    <button
      className="w-full"
      onClick={() => {
        handleCopy();
      }}
    >
      <OverviewTilesContainer title="Contract" value={address?.slice(0, 6)} />
    </button>
  );
}
