import React from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id, type } = useParams();
  return (
    <div>{id} for {type}</div>
  )
}

export default Detail