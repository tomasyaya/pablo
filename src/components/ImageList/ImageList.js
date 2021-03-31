import React from "react";
import "./ImageList.css";

export default function ImageList({ images, breed }) {
  return (
    <>
      <h1 style={{ paddingTop: "20px", color: "grey" }}>
        Chosen Dog Breed: {breed}
      </h1>
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url("${image}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "300px",
              borderRadius: "25px",
              margin: "20px"
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
