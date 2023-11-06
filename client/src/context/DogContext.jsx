import { createContext } from "react";

const DogContext = createContext();
console.log("jaja");

const DogContextProvider = ({ children }) => {
    return <DogContext.Provider>{children}</DogContext.Provider>
}