import AddPropertiesContainer from "./add-properties-container";
import ModelToggleTransformation from "./model-toggle-transformation";
import StagePropertiesViewer from "./stage-properties-viewer";

export default function StageNavigationTopbar() {
  return (
    <div className="absolute w-full mt-2 px-3 top-0 left-0  z-40">
      <div className="flex justify-between relative w-full">
        {/* <div>
          <NameSaveContainer />
        </div> */}
        <div>
          <ModelToggleTransformation />
        </div>
        <div className="bg-stage-navigation relative rounded-xl">
          <AddPropertiesContainer />
        </div>
        <StagePropertiesViewer />
      </div>
    </div>
  );
}
