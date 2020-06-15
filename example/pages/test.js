import React, { useState } from "react" 
import { useKeyboardShortcuts } from '../../use-keyboard-shortcuts';


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