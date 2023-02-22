import { createContext, useContext, useEffect, useState } from "react";
const FieldAgentContext = createContext({});

const FieldAgentContextProvider = ({ children }) => {
  const [fieldAgent, setFieldAgents] = useState([]);
  const getAllFieldAgents = async () => {};
  useEffect(() => {}, []);
  return (
    <FieldAgentContext.Provider
      value={{
        fieldAgent,
        setFieldAgents,
        getAllFieldAgents,
      }}
    >
      {children}
    </FieldAgentContext.Provider>
  );
};

export default FieldAgentContextProvider;

export const useFieldAgentContext = () => useContext(FieldAgentContext);
