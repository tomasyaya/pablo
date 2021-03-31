import React from "react";

export default function DogOptions({ dogs }) {
  return (
    <>
      <option value={"select a dog breed"} disabled={true}>
        -- select a dog breed --
      </option>
      {dogs.map((dog, index) => (
        <option key={index} value={dog}>
          {dog}
        </option>
      ))}
    </>
  );
}
