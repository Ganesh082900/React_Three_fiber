import React, { useContext, useState } from "react";
const GlobalContext = React.createContext();

export function useGlobalInfo() {
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }) {
  const [index, setIndex] = useState(0);
  const [camera, setCamera] = useState([-100, -200, -300, -420]);
  return (
    <GlobalContext.Provider
      value={{
        index,
        updateIndex: (new_state) => {
          setIndex(new_state);
        },
        camera,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
