import LevelProgress from "../atoms/LevelProgress";
import LevelCategories from "../molecules/LevelCategories";
import LevelTop from "../molecules/LevelTop";

function Level() {
  return (
    <div className="border border-gray-300 p-2 w-100 mx-3">
      <LevelTop />
      <LevelCategories />
      <LevelProgress />
    </div>
  );
}

export default Level;
