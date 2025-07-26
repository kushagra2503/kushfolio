"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type SwitchContextType = {
  isSwitchOn: boolean;
  toggleSwitch: () => void;
};

const SwitchContext = createContext<SwitchContextType | undefined>(undefined);

export const SwitchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false); //Client side rendering

  useEffect(() => {
    //Fetch initial value from local storage after the components mounts
    const storedValue = localStorage.getItem("isSwitchOn");
    if (storedValue !== null) {
      setIsSwitchOn(JSON.parse(storedValue));
    }
    setIsLoaded(true); // Indicate that the component has mounted
  }, []);

  const toggleSwitch = () => {
    setIsSwitchOn((prev) => {
      const newValue = !prev;
      localStorage.setItem("isSwitchOn", JSON.stringify(newValue));
      return newValue;
    });
  };

  return (
    <SwitchContext.Provider value={{ isSwitchOn, toggleSwitch }}>
      {isLoaded ? children : null}{" "}
      {/* Render children only after the component has mounted */}
    </SwitchContext.Provider>
  );
};

export const useSwitch = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitch is used within a SwitchProvider");
  }
  return context;
};
