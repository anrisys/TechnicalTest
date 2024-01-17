import MoreOption from "../atoms/MoreOption";
import LocationGallery from "../molecules/LocationGallery";
import LocationTop from "../molecules/LocationTop";

function Locations() {
  return (
    <div className="p-2 mx-3 w-100">
      <LocationTop />
      <LocationGallery />
      <MoreOption name={"SEE ALL"} marginVer={3} />
    </div>
  );
}

export default Locations;
