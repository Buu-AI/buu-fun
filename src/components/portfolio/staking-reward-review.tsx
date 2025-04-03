import React from "react";

export default function StakingRewardReview() {
  return (
    <div className="mt-6">
      <h4 className="uppercase text-sm">you will get</h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 bg-buu-opacity-100 rounded-xl">
          <h4 className="text-2xl">0</h4>
          <p className="text-xs font-semibold text-muted-foreground/50 uppercase">$BUU Token</p>
        </div>
        <div className="p-4 bg-buu-opacity-100 rounded-xl">
          <h4 className="text-2xl">0</h4>
          <p className="text-xs font-semibold text-muted-foreground/50 uppercase">platform credits</p>
        </div>
      </div>
    </div>
  );
}
