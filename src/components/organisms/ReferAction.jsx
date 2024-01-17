import ReferDetail from "../molecules/ReferDetail";

function ReferAction() {
  return (
    <div className=" flex justify-between items-center my-2 mx-3 bg-blue-300 rounded-md p-3 w-100">
      <div>
        <img src="images/people.jpg" alt="refer" className="w-20 mr-5" />
      </div>
      <ReferDetail />
    </div>
  );
}

export default ReferAction;
