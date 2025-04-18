import React from "react";
import UserStakedCard from "./user-staked-card";

export default function UserStakedCards() {
  
  return (
    <div className="w-full space-y-3">
      <UserStakedCard />
      <UserStakedCard />
      <UserStakedCard />
    </div>
  );
}
