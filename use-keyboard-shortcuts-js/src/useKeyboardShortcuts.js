import useKeyPress from "./useKeyPress";
import useMultiKeyPress from "./useMultiKeyPress";

const useKeyboardShortcuts = (keys = {}) => {
  for (let [key, value] of Object.entries(keys)) {
    if (key.includes(", ")) {
      let splitKeys = key.split(", ");

      useMultiKeyPress(splitKeys, value);
    } else {
      useKeyPress(key, value);
    }
  }
};

export default useKeyboardShortcuts;
