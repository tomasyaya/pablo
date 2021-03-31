import React from "react";
import { getImages } from "../../../services/infoDog.service";
import { useParams } from "react-router-dom";
import ImageList from "../../ImageList/ImageList";
import Button from "../../Button/Button";

export default function DogImages() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const { breed } = useParams();

  const getDogsImages = React.useCallback(async () => {
    try {
      const {
        data: { message: dogImages }
      } = await getImages(breed);

      setImages(dogImages);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  }, [breed, setImages]);

  React.useEffect(() => getDogsImages(), [getDogsImages]);

  return (
    <>
      {error ? (
        <p>An error ocurred, refresh the page</p>
      ) : loading ? (
        <p>Loading images...</p>
      ) : (
        <>
          <Button path={"/"} />
          <ImageList images={images} breed={breed} />
        </>
      )}
    </>
  );
}
