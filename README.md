# useKeyboardShortcuts
One hook for all your keyboard shortcuts

useKeyboardShortcuts` takes in an object where each key is the key that you'd like pressed and the value being the function you'd like to fire on press of that key. It handles more than one key if you seperate values with a comma. It all happens on mount so no need to mess up your render statement with functions or truthy checks. 

API: 
`useKeyboardShortcuts(keys: Object)`

```
    useKeyboardShortcuts({
        'targetKey': () => callback
    })
```

Example Usage:
```
import React, { useState } from "react" 
import { useKeyboardShortcuts } from "use-keyboard-shortcuts";


const Example = () => {
    const [message, setMessage] = useState();

    useKeyboardShortcuts({
    'a': () => setMessage('pressed a'),
    'b': () => setMessage('pressed b'),
    'c': () => setMessage('pressed c'),
    'd': () => setMessage('pressed d'),
    'e': () => setMessage('pressed e'),
    'backspace': () => setMessage('pressed backspace'),
    'shift, z': () => setMessage('pressed shift and z'),
    });

    return (
        <p>{message}</p>
    )
}

export default Example;
```

