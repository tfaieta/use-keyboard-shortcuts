import { useState } from "react";
import { useKeyboardShortcuts } from '../../use-keyboard-shortcuts';

import { toCamel } from '../lib/util';

import hookConfig from '../../use-keyboard-shortcuts/package.json';

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;
  const [message, setMessage] = useState();
  

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

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
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: .9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }
      `}</style>

      <section>

        <h1>{ toCamel(name) }</h1>

        <p>{ description }</p>

        { repositoryExists && (
          <p>
            <a href={repositoryUrl}>
              { repositoryUrlDisplay }
            </a>
          </p>
        )}

        <h2>How to use</h2>

        <p>
          `useKeyboardShortcuts` takes in an object where each key is the key that you'd like pressed and the value being the function you'd like to fire
          on press of that key. It handles more than one key if you seperate values with a comma. It all happens on mount so no need to mess up your render statement 
          with functions or truthy checks. 
        </p>

        <h2>Examples</h2>

        <p>
          <strong>Input:</strong>
        </p>
        <pre>
          <code>
{`  
  import React, { useState } from "react" 
  const [message, setMessage] = useState();
  
  const Example = () => {

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
  `}
          </code>
        </pre>
        <p>
          <strong>Output:</strong>
        </p>
        <p>
          { message }
        </p>
      </section>

      <footer>
        <p>
          Made by <a href={authorUrl}>{ authorName }</a>
        </p>
      </footer>
    </main>
  );

}