import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    projectInformation: {},
    regions: [],
    specifications: {},
    devices: {},
    filterOptions: {},
  });

  // Function to update form data
  const updateFormData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  return (
    <AppContext.Provider value={{ formData, updateFormData }}>
      {children}
    </AppContext.Provider>
  );
};
