import PropTypes from "prop-types";

function MoreOption({ name, marginVer }) {
  return (
    <h2
      className={`font-bold text-1rem text-orange-500 ${
        marginVer ? `my-${marginVer}` : ""
      }`}
    >
      {name}
    </h2>
  );
}

MoreOption.propTypes = {
  name: PropTypes.string,
  marginVer: PropTypes.number,
};

export default MoreOption;
