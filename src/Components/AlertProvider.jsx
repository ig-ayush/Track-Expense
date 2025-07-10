import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="mb-4">
          <p className="text-lg font-medium">{message}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-red-500 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && <Alert message={alert} onClose={hideAlert} />}
    </AlertContext.Provider>
  );
};