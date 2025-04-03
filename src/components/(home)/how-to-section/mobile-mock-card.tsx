import { ArrowUp, ImageIcon } from "@/assets/icons";
import FlashIcon from "@/assets/icons/flash-icon";
import logo from "@/assets/icons/logo-no-gradient.png";
import Pill from "@/components/elements/pill";
import SettingsBarSelectedDisplay from "@/components/settings/settings-bar-selected-display";
import { iconByTitle } from "@/components/settings/styles-data";
import { profilePicture } from "@/lib/dice-bear";
import { cn, getFixedCredits } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import DevilWomen from "./DevilWomen.png";
import Mock3DCard from "./mock-3d-card";
export default function MobileMockCard({ showModel }: { showModel: boolean }) {
  return (
    <div className="border-2  border-muted-foreground/20 flex flex-col bg-background rounded-[30px]  w-full h-full px-2 py-2">
      <div className="flex  w-full justify-between px-1 py-2">
        <div className="">
          <Image
            className="w-10 h-10 "
            src={logo}
            width={250}
            height={250}
            alt="Bunn.fun logo"
          />
        </div>

        <div className="flex gap-1  justify-center items-start">
          <button className="flex gap-1  max-h-[40px] items-center justify-center bg-buu shadow-buu-secondary border-buu py-2 px-1 rounded-xl">
            <div className="w-5 h-5 flex">
              <FlashIcon />
            </div>
            <p className="text-white text-[11px]">${getFixedCredits(1.9)}</p>
            <p className="text-[11px]"> Credits used </p>
          </button>

          <div className="flex max-h-[40px] items-center gap-0.5 text-sm  group py-1 px-1  bg-white text-black rounded-md">
            <div className="relative flex w-6 h-6  border-profile shadow-inner rounded-md overflow-hidden">
              <Image
                src={profilePicture("")}
                width={100}
                alt="sample profile Icon "
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="w-0.5 h-[90%] my-auto bg-muted-foreground/60 hidden " />
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="flex items-center justify-center w-full">
          <Pill>
            <span className="text-[10px] font-medium text-muted-foreground/60">
              4:20 PM
            </span>
          </Pill>
        </div>
        <div className="px-1 mt-2">
          <Mock3DCard
            isCurrent={true}
            modelUrl={showModel ? "/women-3d-devil.glb" : undefined}
            isGenerating={showModel ? false : true}
            imageUrl={DevilWomen.src}
          />
        </div>
        <div className="w-full mt-4">
          <div className="w-full px-1 py-1 mb-1  max-w-2xl mx-auto ">
            <div className="flex group relative  items-center justify-between mb-3">
              <div className="ml-3 pb-0 px-2 flex  self-end"></div>
              <div className="px-2  rounded-2xl py-1 mt-4  border items-center relative justify-center mr-1 flex gap-1 bg-buu shadow-buu-inner">
                <SettingsBarSelectedDisplay
                  title={<span className="text-[12px]">3D Object</span>}
                />
                <div className="px-1 py-1 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center">
                  <div className="w-4 h-4 flex items-center justify-center p-0.5 shadow-buu-inner rounded-none bg-buu  ">
                    {iconByTitle["Cute"].Icon}
                  </div>
                </div>
                <div className="flex items-center  justify-center">
                  <div className="h-4  my-auto  bg-white w-[2px] bg-buu shadow-buu-inner " />
                  <button className="flex items-center justify-center ml-1 ">
                    <ChevronUp
                      className={cn(
                        "-rotate-180 w-4 h-4 transition-transform duration-300 ease-in-out"
                      )}
                    />
                  </button>{" "}
                </div>
              </div>
            </div>
            <div className="relative w-full px-4  flex-col gap-1 flex items-start  pt-2 rounded-2xl  shadow-buu-inner bg-buu">
              <textarea
                value={"Create a 3d devil"}
                onChange={() => {}}
                rows={1}
                className="w-full  text-muted-foreground/40 text-sm  py-1 scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded  bg-transparent rounded-md resize-none  placeholder:text-muted-foreground/40 focus:outline-none scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100"
              ></textarea>
              <div className="w-full pb-2  flex justify-between">
                <label htmlFor="file-input" className="cursor-pointer">
                  <div className="w-5 h-5">
                    <ImageIcon />
                  </div>
                </label>

                <button
                  type="submit"
                  className={cn("bg-[#737984]  rounded-full border p-0.5")}
                >
                  <ArrowUp className="w-4 h-4 " />
                  <span className="sr-only"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
