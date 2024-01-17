import PropTypes from "prop-types";

function MenuName({ name }) {
  return <p className="text-xs">{name}</p>;
}

MenuName.propTypes = {
  name: PropTypes.string,
};

export default MenuName;
