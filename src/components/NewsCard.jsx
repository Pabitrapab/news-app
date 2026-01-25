import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";

function NewsCard({ news }) {
  return (
    <Card
      style={{
        height: "100vh",
        width: "100vw",
        borderRadius: 0,
        boxShadow: "none",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* IMAGE */}
      <CardMedia
        component="img"
        image={news.image}
        alt={news.title}
        style={{
          height: "55vh",
          width: "100%",
          objectFit: "cover"
        }}
      />

      {/* CONTENT */}
      <CardContent
        style={{
          flex: 1,
          overflowY: "auto"
        }}
      >
        <Typography variant="h5" gutterBottom>
          {news.title}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {news.description}
        </Typography>

        {news.source && (
          <Typography
            variant="caption"
            display="block"
            style={{ marginTop: "12px" }}
          >
            {news.source}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default NewsCard;
