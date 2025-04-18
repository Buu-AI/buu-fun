import { useUserStakingData } from "@/hooks/use-staking-data";
import UserStakedCard from "./user-staked-card";

export default function UserStakedCards() {
  const {
    userStaking: { data: userStakingData },
  } = useUserStakingData();

  return (
    <div className="w-full space-y-3">
      {userStakingData?.userStakes.map((item, index) => {
        return (
          <UserStakedCard
            staking={item}
            key={`user-staking-card${index}`}
            decimals={userStakingData.decimals}
          />
        );
      })}
    </div>
  );
}
