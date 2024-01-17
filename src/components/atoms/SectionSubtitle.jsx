import PropTypes from "prop-types";

function SectionSubtitle({ subtitle }) {
  return <p className="text-xs">{subtitle}</p>;
}

SectionSubtitle.propTypes = {
  subtitle: PropTypes.string,
};

export default SectionSubtitle;
