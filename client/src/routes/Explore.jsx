import React, {useContext, useEffect, useState} from 'react';
import AxiosApi from '../apis/AxiosApi';
import { MusicContext } from '../context/MusicProvider';

const Explore = () => {
  const { artists, setArtists } = useContext(MusicContext);
  const [coverImageUrl, setCoverImageUrl] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await AxiosApi.get(`/artists`);
        console.log(response.data.data.artists);
        setArtists(response.data.data.artists);
        setCoverImageUrl(response.data.data.artists.coverImageUrl)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[])
  return (
    <>
    {artists.map((artist) => {
      return (
        <div className="" key={artist.id}>
        <div>{artist.id}</div>
        <div className="">{artist.name}</div>
        <div className="">{artist.genre}</div>
        <img src={`${artist.image_url}`} alt="couldn't load image" />
        </div>
      )
    }

      )}
    </>
    
  )
};

export default Explore;