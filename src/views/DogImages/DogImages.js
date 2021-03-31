import React from "react";
import { useParams } from "react-router-dom";
/* service */
import { getImages } from "../../services/infoDog.service";
/* components */
import Suspense from "../../components/Suspense/Suspense";

import ImageList from "../../components/ImageList/ImageList";
import Button from "../../components/Button/Button";

function DogImages() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [images, setImages] = React.useState([]);

  const { breed } = useParams();

  const getDogsImages = React.useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { message: dogImages },
      } = await getImages(breed);
      setImages(dogImages);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }, [breed, setImages, getImages, setError]);

  React.useEffect(() => {
    getDogsImages();
  }, [getDogsImages]);

  return (
    <Suspense
      error={error}
      loading={loading}
      errorFallback={<ErrorMessage />}
      loadingFallback={<LoadingMessage />}
    >
      <>
        <Button path="/" />
        <ImageList images={images} breed={breed} />
      </>
    </Suspense>
  );
}

function ErrorMessage() {
  return <p>An error ocurred, refresh the page</p>;
}
function LoadingMessage() {
  return <p>Loading images...</p>;
}

export default DogImages;
