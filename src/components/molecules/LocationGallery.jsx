import LocationDetails from "../atoms/LocationDetail";
import LocationDistance from "../atoms/LocationDistance";
import LocationName from "../atoms/LocationName";

function LocationGallery() {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="border-b border-gray-300">
        <LocationName location={"Citra Garden 6"} />
        <LocationDetails
          detail={"Food Junction Citra 8 Block L.12 Jakarta Barat"}
        />
        <LocationDistance distance={"2,4"} />
      </div>
      <div className="border-b border-gray-300">
        <LocationName location={"Citra Garden 6"} />
        <LocationDetails
          detail={"Food Junction Citra 8 Block L.12 Jakarta Barat"}
        />
        <LocationDistance distance={"2,4"} />
      </div>
      <div className="border-b border-gray-300">
        <LocationName location={"Citra Garden 6"} />
        <LocationDetails
          detail={"Food Junction Citra 8 Block L.12 Jakarta Barat"}
        />
        <LocationDistance distance={"2,4"} />
      </div>
      <div className="border-b border-gray-300">
        <LocationName location={"Citra Garden 6"} />
        <LocationDetails
          detail={"Food Junction Citra 8 Block L.12 Jakarta Barat"}
        />
        <LocationDistance distance={"2,4"} />
      </div>
    </div>
  );
}

export default LocationGallery;
