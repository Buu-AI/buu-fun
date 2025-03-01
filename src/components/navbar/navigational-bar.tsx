// import CoinStackIcon from "@/assets/icons/coin";
import QuestionIcon from "@/assets/icons/Icon.png";
import logo from "@/assets/icons/logo-no-gradient.png";
import MagicPenIcon from "@/assets/icons/magicpen";
import SizePenIcon from "@/assets/icons/size";
import Image from "next/image";
import Link from "next/link";
export default function NavigationalBar() {
  return (
    <nav className="px-3 py-4   w-full h-full">
      <div className="lg:bg-buu lg:py-4  flex flex-col items-center justify-between lg:rounded-[20px] overflow-hidden lg:h-full lg:w-[72px]">
        <div className="flex items-center justify-center">
          <Link
            href={"/"}
            className="flex items-center justify-center h-10 w-10 lg:w-12 lg:h-12   rounded-lg "
          >
            <Image
              className="w-full h-full "
              src={logo}
              width={250}
              height={250}
              alt="Bunn.fun logo"
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-col gap-4 items-center justify-center">
          <Link
            href={"/boards"}
            // group bg-buu-button  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5
            className="w-10 flex  items-center group   justify-center    h-10  text-black"
          >
            <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-gray-500">
              <SizePenIcon />
            </div>
          </Link>
          <Link
            href={"/"}
            className="w-10 flex  items-center group   justify-center    h-10 "
          >
            <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-gray-500">
              <MagicPenIcon />
            </div>
          </Link>
          {/* <Link
            href={"/"}
            className="w-10 flex group items-center justify-center px-2 py-3 h-10 "
          >
            <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-gray-500" >
              <CoinStackIcon />
            </div>
          </Link> */}
        </div>
        <div className="hidden lg:flex">
          <Image
            className="w-6 h-6"
            src={QuestionIcon}
            alt="Question Help"
            width={100}
            height={100}
          />
        </div>
      </div>
    </nav>
  );
}
