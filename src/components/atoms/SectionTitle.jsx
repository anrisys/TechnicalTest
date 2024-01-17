import PropTypes from "prop-types";

function SectionTitle({ sectionName }) {
  return <p className="font-bold text-lg">{sectionName}</p>;
}

SectionTitle.propTypes = {
  sectionName: PropTypes.string,
};

export default SectionTitle;
