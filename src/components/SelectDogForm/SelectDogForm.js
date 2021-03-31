import React from "react";
import { getAllDogs } from "../../services/infoDog.service";
import { useHistory } from "react-router-dom";
import DogOptions from "../DogOptions/DogOptions";
import { useDogs } from "../../context/DogContext";
import "./SelectDogForm.css";

export default function SelectDogForm() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { dogs, setDogs } = useDogs();
  const [selection, setSelection] = React.useState("select a dog breed");

  const dogBreeds = Object.keys(dogs);
  let history = useHistory();

  const handleChange = ({ target }) => {
    setSelection(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selection !== "select a dog breed") {
      history.push(`/images/${selection}`);
    }
  };

  const getDogs = React.useCallback(async () => {
    try {
      const {
        data: { message: dogs }
      } = await getAllDogs();

      setDogs(dogs);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  }, [setDogs]);

  React.useEffect(() => getDogs(), [getDogs]);

  return (
    <>
      {error ? (
        <p>An error ocurred, refresh the page</p>
      ) : loading ? (
        <p>Loading data...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Pick your favorite Dog:
            <select value={selection} onChange={handleChange}>
              <DogOptions dogs={dogBreeds} />
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
}
