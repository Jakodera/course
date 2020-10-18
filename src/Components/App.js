import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetails'

const App =()=> {
  return (
    <div>
    <div>
      <SongList />
    </div>

    <div>
      <SongDetail />
    </div>

    </div>
  );
}

export default App;
