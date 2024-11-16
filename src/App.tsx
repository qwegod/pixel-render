import { useEffect, useState } from "react";

import useRender from "./render/useRender";
import move from "./render/methods/move";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const playerPosX = useSelector((state: RootState) => state.playerPosX.value);
  const playerPosY = useSelector((state: RootState) => state.playerPosY.value);
  const playerDirection = useSelector(
    (state: RootState) => state.playerDirection.value
  );
  const dispatch = useDispatch();
  const { mapRender, getBorder, render } = useRender();

  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setLastKey(e.key);
      setTimeout(() => setLastKey(""), 0);
    };

    window.addEventListener("keypress", handleKeyPress);
  }, []);

  useEffect(() => {
    move(
      getBorder(),
      lastKey,
      playerPosX,
      playerPosY,
      playerDirection,
      dispatch
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastKey]);

  return (
    <div className="flex flex-col justify-center gap-y-5 p-16 h-screen items-center">
      <div className="flex  flex-wrap w-[512px] h-[256px]">
        {mapRender(playerPosX, playerPosY)}
      </div>
      <div className="border-2 border-black">
        <div className="flex flex-wrap w-[512px] h-[256px]">{render()}</div>
      </div>
    </div>
  );
}

export default App;
