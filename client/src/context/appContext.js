import React, { useReducer, useContext } from 'react';
import reducer from '../context/reducer'
import { CLEAR_ALERT, DISPLAY_ALERT } from './actions';

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}

const AppContext = React.createContext(initialState);

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch(DISPLAY_ALERT);
    setTimeout(clearAlert, 3000);
  }

  const clearAlert = () => {
    dispatch(CLEAR_ALERT);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext);
}
