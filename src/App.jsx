import { useState } from 'react';

import Tags from './Tags';
import './App.css';

function App() {
  // Array von den aktuell bestehenden Tags
  const [tags, setTags] = useState(['ONE', 'TWO']);

  // Füge dem aktuell bestehenden Tags Array einen neuen Tag hinzu
  function updateTags(tag) {
    setTags([...tags, tag]);
  }

  return (
    <div className="App">
      <form>
        <Tags label="Product Tags" tags={tags} onUpdateTags={updateTags} />
      </form>
    </div>
  );
}

export default App;
