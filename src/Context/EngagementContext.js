import { createContext, useContext, useEffect, useState } from "react";
const EngagementContext = createContext({});

const EngagementContextProvider = ({ children }) => {
  const [enagements, setEngagements] = useState([]);
  const getAllEngagements = async () => {};
  useEffect(() => {}, []);
  return (
    <EngagementContext.Provider
      value={{
        enagements,
        setEngagements,
        getAllEngagements,
      }}
    >
      {children}
    </EngagementContext.Provider>
  );
};

export default EngagementContextProvider;

export const useEngagementContext = () => useContext(EngagementContext);
