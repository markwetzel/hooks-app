import React, { useEffect, useState } from 'react';

import NewSongForm from './NewSongForm';
import uuid from 'uuid/v1';

const SongList = () => {
  const [songs, setSongs] = useState([
    {
      title: 'absolution',
      id: 1,
    },
    {
      title: 'hysteria',
      id: 2,
    },
    {
      title: 'comfortably number',
      id: 3,
    },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => console.log('Run once'), []);

  useEffect(() => {
    console.log('useEffect', songs);
  }, [songs]);

  useEffect(() => {
    console.log('useEffect', age);
  }, [age]);

  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={() => setAge(age + 1)}>Age++ {age}</button>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
