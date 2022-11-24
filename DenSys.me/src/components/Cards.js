import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
const StyledCard = styled(Card)(({}) => ({
  display: "flex",
  borderRadius: 30,
  margin: 120,
  // border
}));

function Cards() {
  return (
    <StyledCard>
      <CardMedia
        padding="50"
        component="img"
        height="500"
        image="https://i.postimg.cc/7YdLGhgz/image.png"
        alt="mrt image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dr. Andras
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default Cards;
