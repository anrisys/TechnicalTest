import PropTypes from "prop-types";

function LocationName({ location }) {
  return <p className="text-s font-semibold mt-2">{location}</p>;
}

LocationName.propTypes = {
  location: PropTypes.string,
};

export default LocationName;
