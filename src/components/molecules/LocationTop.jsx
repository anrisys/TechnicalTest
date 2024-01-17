import SectionSubtitle from "../atoms/SectionSubtitle";
import SectionTitle from "../atoms/SectionTitle";

function LocationTop() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <SectionTitle sectionName={"Our Location"} />
        <SectionSubtitle subtitle={"Explore your options"} />
      </div>
    </div>
  );
}

export default LocationTop;
