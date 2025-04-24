import MagicPenTitle from "../elements/magic-pen-title";
export function AnimatedBringYourIdeas() {
  return (
    <div className="grid md:grid-cols-[42%_13%_45%] absolute w-full h-full  top-0 left-0 ">
      <div className="flex items-center justify-center">
        <div className="flex-col max-md:top-0 top-[2%] flex text-end max-md:items-center items-end justify-end w-full relative z-50">
          <div>
            <div className="w-60 h-40 bg-[#001C31] animate-pulse absolute blur-3xl -right-12 -z-20 rounded-full" />
            <div>
              <MagicPenTitle
                title="Create detailed 3D models"
                className="text-end max-md:text-center max-md:justify-center justify-end  z-20 relative"
              />
            </div>
            <h2 className="font-medium hero-gradient-text max-md:text-center   text-4xl lg:text-5xl xl:text-6xl max-md:mt-2 mt-6">
              Bring Your Ideas
              <br />
              to Life in 3D
            </h2>
          </div>
        </div>
      </div>
      <div  />
      <div className="relative flex justify-start  md:justify-center">
        <div className="absolute md:bottom-[15%] z-[50]">
          <div className="relative">
            <div className="w-60 h-40 bg-[#111111]  absolute blur-2xl -left-5 -z-20 -top-10 rounded-full" />
            <p className="max-w-md w-full max-md:p-2">
              BUU.FUN offers a seamless platform to create stunning 3D objects
              from text prompts or images. With features like auto-rigging,
              texture remeshing, and animation, your creations are ready for any
              project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
