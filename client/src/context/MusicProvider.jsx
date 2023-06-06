import React, { useState, createContext } from 'react';

export const MusicContext = createContext();

const MusicProvider = ({children}) => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  
  const addArtist = (artist) => {
    setArtists([...artists, artist]);
  };
  const addAlbum = (album) => {
    setAlbums([...albums, album]);
  };
  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  return (
    <MusicContext.Provider value={{
      artists,
      setArtists,
      addArtist,
      selectedArtist,
      setSelectedArtist,
      albums,
      setAlbums,
      addAlbum,
      selectedAlbum,
      setSelectedAlbum,
      songs,
      setSongs,
      addSong,
      selectedSong,
      setSelectedSong,
    }}>
      {children}
    </MusicContext.Provider>
  )
};

export default MusicProvider;