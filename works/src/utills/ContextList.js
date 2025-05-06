import React, { createContext, useState, useContext } from "react";

// Context 생성
const HoveredContext = createContext();

// Context Provider
export const ContextList = ({ children }) => {
  const [isHovered, setIsHovered] = useState({});

  return (
    <HoveredContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </HoveredContext.Provider>
  );
};

// Context 값을 가져오는 커스텀 훅
export const useHovered = () => useContext(HoveredContext);
