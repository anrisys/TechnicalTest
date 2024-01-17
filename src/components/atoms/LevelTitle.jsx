import PropTypes from "prop-types";
function LevelTitle({ levelName }) {
  return <p className="text-xs">{levelName}</p>;
}

LevelTitle.propTypes = {
  levelName: PropTypes.string,
};

export default LevelTitle;
