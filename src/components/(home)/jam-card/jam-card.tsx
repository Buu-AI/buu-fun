import InfiniteMenu, { MenuItem } from "@/components/ui/infinity-menu";
import { LostCivilization } from "@/constants/home/jam/lost-civilization";

const items: MenuItem[] = [
  LostCivilization.submission_5,
  LostCivilization.submission_2,
  LostCivilization.winner_3,
  LostCivilization.submission_1,
  LostCivilization.winner_3,
  LostCivilization.winner_2,
  LostCivilization.submission_4,
  LostCivilization.winner_3,
  LostCivilization.winner_1,
  LostCivilization.submission_2,
  LostCivilization.submission_1,
  LostCivilization.winner_2,
  LostCivilization.submission_5,
  LostCivilization.winner_2,
  LostCivilization.winner_1,
  LostCivilization.submission_4,
  LostCivilization.submission_3,
  LostCivilization.winner_3,
  LostCivilization.submission_3,
  LostCivilization.winner_1,
];

export default function JamCard() {
  return (
    <div className="h-screen relative">
      {/* <div className=" w-[200px] h-[100px]  bg-overlay-secondary  bg-[#69CCD5]  rounded-full right-[20%] absolute bottom-[-140px] z-50 blur-[100px]  rotate-[-10deg]" /> */}
      <div className="w-[176px] h-[334px] violet-gradient left-[45%]  rounded-full  absolute top-[5%] z-50   md:block hidden  rotate-[-10deg]" />
      <InfiniteMenu items={items} />
    </div>
  );
}
