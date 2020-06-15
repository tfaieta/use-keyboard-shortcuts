import { useEffect, useState } from "react";
import keycode from "keycode";

const useKeyPress = (targetKey, callback) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(e) {
    if (keycode(e) === targetKey) {
      setKeyPressed(true);
      callback && callback();
    }
  }

  function upHandler(e) {
    if (keycode(e) === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);

      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
