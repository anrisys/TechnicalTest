import PropTypes from "prop-types";

function LocationDetails({ detail }) {
  return <p className="text-xs font-light mt-1 mb-0.5">{detail}</p>;
}

LocationDetails.propTypes = {
  detail: PropTypes.string,
};

export default LocationDetails;
