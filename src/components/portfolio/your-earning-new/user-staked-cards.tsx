import React from "react";
import UserStakedCard from "./user-staked-card";
import { useUserStakingData } from "@/hooks/use-staking-data";
import { formatUnits } from "@/lib/utils";

export default function UserStakedCards() {
  const {
    userStaking: { data: userStakingData },
  } = useUserStakingData();

  const earnings = formatUnits(
    userStakingData?.yourEarnings ?? "0",
    userStakingData?.decimals ?? 0
  );
  return (
    <div className="w-full space-y-3">
      <UserStakedCard />
      <UserStakedCard />
      <UserStakedCard />
    </div>
  );
}
