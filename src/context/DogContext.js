import React from "react";

const DogContext = React.createContext({});

function DogProvider({ children }) {
  const [dogs, setDogs] = React.useState({});

  return (
    <DogContext.Provider value={{ dogs, setDogs }}>
      {children}
    </DogContext.Provider>
  );
}

export default DogProvider;

export function useDogs() {
  return React.useContext(DogContext);
}
