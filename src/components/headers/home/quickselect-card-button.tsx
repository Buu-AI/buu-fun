import {
  gradientBluePurpleImage,
  gradientBlueyRedImage,
  gradientRainbowImage,
} from "@/assets/Image/gradients";
import {
  Create3DLayout,
  CreateComicLayout,
  CreateVideoLayout,
} from "./image-layouts";
import QuickSelectCard from "./quick-select-card";
export default function HeaderQuickSelectButton() {
  return (
    <section className="hidden lg:block">
      <div className="flex items-center justify-center gap-2 mt-4">
        <QuickSelectCard
          key={"quick-select-card-3d-layout"}
          backgroundImage={<Create3DLayout />}
          gradient={gradientBluePurpleImage.src}
          title={
            <>
              Help me to create <br /> 3D object
            </>
          }
        />
        <QuickSelectCard
          key={"quick-select-card-comic"}
          released={false}
          backgroundImage={<CreateComicLayout />}
          gradient={gradientBlueyRedImage.src}
          title={
            <>
              Make a 3D model <br />
              game-production <br />
              ready
            </>
          }
        />
        <QuickSelectCard
          key={"quick-select-card-video"}
          released={false}
          backgroundImage={<CreateVideoLayout />}
          gradient={gradientRainbowImage.src}
          title={"Help me Rig & Animate a 3D model"}
        />
      </div>
    </section>
  );
}
