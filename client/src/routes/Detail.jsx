import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AxiosApi from '../apis/AxiosApi';
import styled from 'styled-components';

const Detail = () => {
  const navigate = useNavigate();
  const { id, type } = useParams();
  const [ selectedContent, setSelectedContent ] = useState(null);
  const [ currentAlbums, setCurrentAlbums ] = useState(null);
  const location = useLocation();
  console.log(type);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosApi.get(`/${type}s/${id}`);
        setSelectedContent(response.data.data[type]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      let response; 

      try {
        switch (type) {
          case 'artist':
            response = await AxiosApi.get(`/albumsbyartist/${id}`)
            // console.log(response.data.data.albums_by_artist);
            setCurrentAlbums(response.data.data.albums_by_artist)            
            break;
          case 'album':
            response = await AxiosApi.get(`/albumsbyartist/${selectedContent.artist_id}`)
            setCurrentAlbums(response.data.data.albums_by_artist.filter((album) => {
              return album.id !== selectedContent.id;
            }));            
            break;
          default:
            break;
        }

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[selectedContent])



  return (
    <Wrapper>
      {selectedContent && (
        <>
          <Header>
            <Image src={selectedContent.image_url} alt="" />
            <Details>
              {type === 'artist' ? <Title>{selectedContent.name}</Title>:<Title>{selectedContent.title}</Title>}
              <Genre>{selectedContent.genre}</Genre>
            </Details>
          </Header>
          <Body>
            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              necessitatibus hic modi dicta, reprehenderit iste ratione
              expedita nesciunt vitae sunt esse sapiente. Iste adipisci
              consequatur repudiandae, in possimus enim cumque.
            </Description>
            <ContentContainer>
              <Reviews>
                <ReviewHeading>Reviews</ReviewHeading>
                <ReviewCards>
                  <ReviewCard>
                    <ReviewCardTitle>Review 1</ReviewCardTitle>
                    <ReviewCardBody>
                      Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Ex ipsam voluptas aut maiores perspiciatis omnis
                      velit voluptatibus tempore animi architecto?
                    </ReviewCardBody>
                  </ReviewCard>
                  <ReviewCard>
                    <ReviewCardTitle>Review 2</ReviewCardTitle>
                    <ReviewCardBody>
                      Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Ex ipsam voluptas aut maiores perspiciatis omnis
                      velit voluptatibus tempore animi architecto?
                    </ReviewCardBody>
                  </ReviewCard>
                  <ReviewCard>
                    <ReviewCardTitle>Review 3</ReviewCardTitle>
                    <ReviewCardBody>
                      Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Ex ipsam voluptas aut maiores perspiciatis omnis
                      velit voluptatibus tempore animi architecto?
                    </ReviewCardBody>
                  </ReviewCard>
                </ReviewCards>
              </Reviews>
              <Albums>
                <AlbumsHeading>{type === 'artist' ? `Albums by ${selectedContent.name}` : `Other Albums by${selectedContent.title}`}</AlbumsHeading>
                <AlbumCards>
                {currentAlbums && currentAlbums.map((currentAlbum) => {
              return (
                <AlbumCard key={currentAlbum.id} onClick={()=> navigate(`/detail/album/${currentAlbum.id}`)}>
                <AlbumCardTitle>{currentAlbum.title}</AlbumCardTitle>
                {currentAlbum.image_url && <AlbumCover src={currentAlbum.image_url} alt="" />}
                <AlbumCardBody>
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Ex ipsam voluptas aut maiores perspiciatis omnis
                  velit voluptatibus tempore animi architecto?
                </AlbumCardBody>
              </AlbumCard>
              )
              
            })}
                </AlbumCards>
              </Albums>
            </ContentContainer>

          </Body>
        </>
      )}
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 40px;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr;
    grid-gap: 20px;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    border-radius: 0;
    grid-row: 1 / 3;
  }
`;



const Details = styled.div``;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const Genre = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Body = styled.div``;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ContentContainer = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-gap: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

const Reviews = styled.div``;

const ReviewHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const ReviewCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  padding: 20px;
  width: calc((100% / 3) - 20px);
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ReviewCardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2f80ed;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ReviewCardBody = styled.div`
  font-size: 16px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Albums = styled.div``;

const AlbumsHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const AlbumCards = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 20px;
cursor: pointer;
`;

const AlbumCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  padding: 20px;
  // width: calc((100% / 2) );
  // background: gray;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const AlbumCardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2f80ed;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const AlbumCardBody = styled.div`
  font-size: 16px;
  line-height: 1.5;

}`;

const AlbumCover = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    border-radius: 0;
    grid-row: 1 / 3;
  }
`;