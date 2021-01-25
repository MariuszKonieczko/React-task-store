import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isUserLogged, setisUserLogged] = useState(false);

  const toggledLoggedState = () => {
    setisUserLogged((prevValue) => !prevValue);
  };

  return (
    <AppContext.Provider
      value={{
        isUserLogged,
        toggledLoggedState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
