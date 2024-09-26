import { createContext, useReducer } from 'react';

export const DegreeContext = createContext();

export const degreeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DEGREE':
      return {
        degrees: action.payload,
      };
    case 'CREATE_DEGREE':
      return {
        degrees: [action.payload, ...state.degrees],
      };
    default:
      return state;
  }
};

export const DegreeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(degreeReducer, {
    degrees: null,
  });

  return (
    <DegreeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DegreeContext.Provider>
  );
};
