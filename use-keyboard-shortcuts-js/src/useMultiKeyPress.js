import { useEffect, useState } from "react";
import keycode from "keycode";

const useMultiKeyPress = (keys, callback) => {
  const [pressed_keys, setPressedKeys] = useState(new Set());

  function downHandler(e) {
    const key = keycode(e);

    setPressedKeys(pressed_keys.add(key));
    if (pressed_keys.size === keys.length && keys.every(key => pressed_keys.has(key))) {
      callback({ keys, pressed_keys });
    }
  }

  function upHandler(e) {
    const key = keycode(e);

    key === "Meta" ? pressed_keys.clear() : pressed_keys.delete(key);
    setPressedKeys(pressed_keys);
  }

  useEffect(() => {
    window.addEventListener("keydown", e => downHandler(e));

    window.addEventListener("keyup", e => upHandler(e));

    return () => {
      window.removeEventListener("keydown", downHandler);

      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return pressed_keys;
};

export default useMultiKeyPress;
