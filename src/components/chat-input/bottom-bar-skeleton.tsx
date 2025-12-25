import { Skeleton } from "@/components/ui/skeleton";

export default function BottomBarSkeleton() {
  return (
    <div className="w-full  px-1 py-0 mb-0 mx-auto">
      {/* Settings Bar Skeleton */}
      <div className="relative mb-2">
        <div className="flex items-center justify-between mb-2">
          {/* Left side - Suggestion and Recent Chat buttons */}
          <div className="ml-0 pb-0 px-2 flex self-end gap-2">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <Skeleton className="w-8 h-8 rounded-lg" />
          </div>

          {/* Right side - Settings bar */}
          <div className="px-4 self-end max-w-max md:w-full rounded-2xl py-2 border items-center relative justify-end mr-1 flex gap-2 bg-buu shadow-buu-inner">
            <Skeleton className="w-32 h-5 rounded-md" />
            <div className="h-6 my-auto bg-white w-[2px] bg-buu shadow-buu-inner" />
            <Skeleton className="w-6 h-6 rounded-md" />
          </div>
        </div>
      </div>

      {/* Chat Form Skeleton */}
      <div className="relative flex-col gap-1 flex items-start w-full p-4 mb-2 rounded-[20px] shadow-buu-inner bg-buu">
        {/* Text Area Skeleton */}
        <div className="w-full">
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>

        {/* Bottom row - Image upload and Submit button */}
        <div className="w-full flex justify-between items-center">
          <Skeleton className="w-6 h-6 rounded-md" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
