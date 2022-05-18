import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { CardActionArea } from '@mui/material';


const MovieCards= ({ movie }) =>{
  return(
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={movie.img}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {movie.description}
          </Typography>
          <div>
          <Typography gutterBottom variant="h6" component="div">
            {movie.year}
          </Typography>
          <Rating name="half-rating-read" defaultValue={movie.rate} precision={0.5} readOnly /></div>

        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MovieCards;