import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Posts = (props) => {
  const { title, body, id } = props.post;


  const history = useHistory();
  const handleClick = (postId) => {
    const url = `/post/${postId}`
    history.push(url);
  }

  const classes = useStyles();

  return (

    <Card style={{ margin: 'auto', marginBottom: '30px', padding: '10px' }} className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => handleClick(id)} variant="outlined" color="secondary">
          Show Details
        </Button>
      </CardActions>
    </Card>




  );
};

export default Posts;