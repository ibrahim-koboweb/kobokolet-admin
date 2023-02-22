import { createContext, useContext, useEffect, useState } from "react";
const FarmerContext = createContext({});

const FarmerContextProvider = ({ children }) => {
  const [farmers, setFarmers] = useState([]);
  const getAllFarmers = async () => {};
  useEffect(() => {}, []);
  return (
    <FarmerContext.Provider
      value={{
        farmers,
        setFarmers,
        getAllFarmers,
      }}
    >
      {children}
    </FarmerContext.Provider>
  );
};

export default FarmerContextProvider;

export const useFarmerContext = () => useContext(FarmerContext);
