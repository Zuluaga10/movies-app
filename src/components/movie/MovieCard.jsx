import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const MovieCard = ({ Poster, Title, Year }) => {
  return (
    <Card sx={{ maxWidth: 345, justifyContent: "center" }}>
      <CardMedia component="img" alt="movies" height="500" image={Poster} />

      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Year}
        </Typography>
      </CardContent>

      <CardActions sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
