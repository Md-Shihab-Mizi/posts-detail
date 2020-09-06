import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PostDetail = (props) => {



  //Comments API
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);


  //Posts API
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Card style={{ margin: 'auto' }} className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <p>This is post Detail {postId}</p>
              <p>{post.title}</p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>{post.body}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography variant="body2" color="textSecondary" component="p">
          <h3>All Comments :</h3>
          {
            comments.map(comment => <Comment comment={comment}></Comment>)
          }

        </Typography>
      </Card>
    </div>
  );
};

export default PostDetail;