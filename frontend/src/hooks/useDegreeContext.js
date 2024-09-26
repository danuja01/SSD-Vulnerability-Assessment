import { DegreeContext } from '../Context/DegreeContext';
import { useContext } from 'react';

export const useDegreeContext = () => {
  const context = useContext(DegreeContext);

  if (!context) {
    throw new Error(
      'useDegreeContext must be used within a DegreeContextProvider'
    );
  }

  return context;
};
