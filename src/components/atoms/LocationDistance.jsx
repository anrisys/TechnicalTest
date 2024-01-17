import PropTypes from "prop-types";
import { LocationPin } from "../../assets/Icons";

function LocationDistance({ distance }) {
  return (
    <div className="flex items-center">
      <LocationPin />
      <p className="text-xs font-light ml-3 pb-1.5">{distance} km</p>
    </div>
  );
}

LocationDistance.propTypes = {
  distance: PropTypes.string,
};

export default LocationDistance;
