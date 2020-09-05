import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import { Grid } from '@material-ui/core';

const Home = () => {
    const [posts,setPosts] = useState([]);
  useEffect(()=>{
      const url ='https://jsonplaceholder.typicode.com/posts';
   fetch(url)
   .then(res => res.json())
   .then(data =>setPosts(data))
  },[]);
  return (
    <div>
    <h1> Posts : {posts.length}</h1>

      {
        posts.map(post => <Posts post={post}></Posts>)
      }

    
</div>
  );
};

export default Home;