import React from 'react';
import BoxScore from './components/BoxScore';
import { sports } from './constants/sports';

function App() {
  return (
    <div>
      <BoxScore sport={sports.NBA} />
      <BoxScore sport={sports.MLB} />
    </div>
  );
}

export default App;
