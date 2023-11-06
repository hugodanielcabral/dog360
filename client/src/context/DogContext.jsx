import { createContext } from "react";

const DogContext = createContext();


const DogContextProvider = ({ children }) => {
    return <DogContext.Provider>{children}</DogContext.Provider>
}