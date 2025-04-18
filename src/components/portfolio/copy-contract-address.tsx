import React from "react";
import OverviewTilesContainer from "./overview-tiles";
import toast from "react-hot-toast";

export default function CopyContractAddress({ address }: { address: string }) {
  function handleCopy() {
    if (!address) return;
    window.navigator.clipboard.writeText(address);
    toast.success("Address Copied to clipboard");
  }

  const shortedAddress = `${address.slice(0, 4)}...
                ${address.slice(address.length - 5, address.length - 1)}`


  return (
    <button
      className="w-full"
      onClick={() => {
        handleCopy();
      }}
    >
      <OverviewTilesContainer title="Contract" value={shortedAddress} />
    </button>
  );
}
