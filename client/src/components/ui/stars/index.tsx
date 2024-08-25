import React, { useState } from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { StarsProps } from '../../../interfaces/ui';

interface InteractiveStarsProps extends StarsProps {
  onRatingChange?: (rating: number) => void;
}

const Stars: React.FC<InteractiveStarsProps> = ({ stars, reviews, onRatingChange }) => {
  const [hoveredStars, setHoveredStars] = useState<number>(0);
  const [selectedStars, setSelectedStars] = useState<number>(stars);

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 1;
    return (
      <span
        key={index}
        onMouseEnter={() => setHoveredStars(number)}
        onMouseLeave={() => setHoveredStars(0)}
        onClick={() => handleRating(number)}
      >
        {hoveredStars >= number || (selectedStars >= number && hoveredStars === 0) ? (
          <BsStarFill />
        ) : (selectedStars >= index + 0.5 && hoveredStars === 0) ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  const handleRating = (rating: number) => {
    setSelectedStars(rating);
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
    cursor: pointer; 
    transition: transform 0.2s ease-in-out;
  }
  span:hover {
    transform: scale(1.2); 
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

export default Stars;