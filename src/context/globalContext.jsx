import React, { useContext, useState } from "react";

export function useGlobalInfo() {
  return useContext(GlobalContext);
}

export default function GlobalContext({ childern }) {
  const [userName, setUserName] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        userName,
        updateUserName: (new_State) => {
          setUserName(new_State);
        },
      }}
    >
      {childern}
    </GlobalContext.Provider>
  );
}
