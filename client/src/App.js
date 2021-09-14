import { useState } from 'react';
import './App.css';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import CodeMirror from '@uiw/react-codemirror';

function App() {
  const [code, setCode] = useState("print('hello world!')");

  return (
    <div className="App">
      <header className="App-header">
        <div className="absolute top-40 bottom-40 left-40 right-40 text-left">
          <CodeMirror
            value={code}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              mode: 'python',
            }}
            onChange={(editor, data, value) => {
              setCode(editor.getValue());
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
