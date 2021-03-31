import React from "react";

/* styles */
import "./ImageList.css";

function ImageList({ images, breed }) {
  return (
    <>
      <h1 style={{ paddingTop: "20px", color: "grey" }}>
        Chosen Dog Breed: {breed}
      </h1>
      <div className="image-container">
        {images.map((image) => (
          <ImageComponent image={image} key={image} />
        ))}
      </div>
    </>
  );
}

function ImageComponent({ image }) {
  // https://www.npmjs.com/package/react-intersection-observer
  // const { ref, inView } = useInView(options);
  // if(!inView) return null
  return (
    <div
      //ref={ref}
      style={{
        backgroundImage: `url("${image}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        width: "300px",
        borderRadius: "25px",
        margin: "20px",
      }}
    ></div>
  );
}

export default ImageList;
