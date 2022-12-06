import React from 'react';
import { useParams, useLocation } from 'react-router-dom';


const PostPage = () => {

  const Location = useLocation();
  console.log(Location);
  const {id} = useParams();

  return(
    <div>
      <h3>POST ID = {id}</h3>
    </div>
  )
}

export default PostPage;