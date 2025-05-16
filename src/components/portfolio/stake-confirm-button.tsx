import { CoinStackIcon } from "@/assets/icons";
import { Button } from "../ui/button";
type TStakeConfirmButton = {
  disabled?: boolean;
};
export default function StakeConfirmButton({}: TStakeConfirmButton) {
  return (
    <Button className="w-full">
      <CoinStackIcon />
      Stake $BUU
    </Button>
  );
}
