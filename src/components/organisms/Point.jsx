import PointNumber from "../atoms/PointNumber";
import PointDescription from "../molecules/PointDescription";

function Point() {
  return (
    <div className=" flex justify-between items-center border border-gray-300 p-1.5 my-2 mx-3 w-100">
      <PointDescription />
      <PointNumber />
    </div>
  );
}

export default Point;
