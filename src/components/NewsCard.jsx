import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function NewsCard({ news }) {
  return (
    <Card style={{ marginBottom: "16px" }}>
      <CardMedia
        component="img"
        height="200"
        image={news.image}
        alt="news"
      />
      <CardContent>
        <Typography variant="h6">{news.title}</Typography>
        <Typography variant="body2">{news.description}</Typography>
        <Typography variant="caption">{news.source}</Typography>
      </CardContent>
    </Card>
  );
}

export default NewsCard;