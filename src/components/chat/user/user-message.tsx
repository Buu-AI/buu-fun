import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
type TMessages = {
  text?: string;
  imageUrls?: string[];
};
export default function UserChatMessage({
  text = "Create a 3D model of a cube",
  imageUrls,
}: TMessages) {
  return (
    <div className={cn("flex flex-col items-end w-full first-of-type:pt-[0%]")}>
      <p
        className={cn(
          " max-w-max p-2  px-3 max-md:text-sm bg-user-chat-message text-white font-medium  md:w-1/2 rounded-lg"
        )}
      >
        {text}
      </p>
      <AnimatePresence mode="popLayout">
        <motion.div className="flex mt-2 items-end justify-end gap-2 flex-wrap ">
          {imageUrls && imageUrls.length > 0
            ? imageUrls.map((item, index) => {
                return (
                  <motion.div
                    key={`${text}-${item}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.1,
                      },
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    layout
                    className="w-20 rounded-md overflow-hidden gap-2 "
                  >
                    <Image
                      src={item}
                      alt={`${text}-${item}`}
                      width={250}
                      height={250}
                      className="object-cover w-20 aspect-square"
                    />
                  </motion.div>
                );
              })
            : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
