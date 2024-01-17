import { Crown, Lock } from "../../assets/Icons";
import LevelTitle from "../atoms/LevelTitle";

function LevelCategories() {
  return (
    <div className="flex justify-around my-2 mx-auto w-60 items-center">
      <div className="flex justify-center flex-col">
        <Crown />
        <LevelTitle levelName={"Silver"} />
      </div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nO3QMQ0AMAwDQfOHlQBrAXRvMtxJP1tyAgAbdZLzuZ4arum3ASCPC9y9OtSFKIwSAAAAAElFTkSuQmCC"></img>
      <div className="flex justify-center flex-col">
        <Lock />
        <LevelTitle levelName={"Gold"} />
      </div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nO3QMQ0AMAwDQfOHlQBrAXRvMtxJP1tyAgAbdZLzuZ4arum3ASCPC9y9OtSFKIwSAAAAAElFTkSuQmCC"></img>
      <div className="flex justify-center flex-col">
        <Lock />
        <LevelTitle levelName={"Platinum"} />
      </div>
    </div>
  );
}

export default LevelCategories;
