import React, {useContext, useEffect} from 'react';
import AxiosApi from '../apis/AxiosApi';
import { MusicContext } from '../context/MusicProvider';

const Explore = () => {
  const { artists, setArtists } = useContext(MusicContext);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await AxiosApi.get(`/artists`);
        console.log(response.data.data.artists);
        setArtists(response.data.data.artists);
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
        <div className="">
        <div>{artist.id}</div>
        <div className="">{artist.name}</div>
        </div>
      )
    }

      )}
    </>
    
  )
};

export default Explore;