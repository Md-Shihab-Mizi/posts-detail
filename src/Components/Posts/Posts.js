import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  


const Posts = (props) => {
const {title,body} = props.post;

const classes = useStyles();


    return (
        <div>


          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
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
      <Button variant="outlined" color="secondary">
 Read More
</Button>
      </CardActions>
    </Card>


        </div>
    );
};

export default Posts;