import { useContext } from 'react';
import { NavigationContext } from '../context/navigationContext.tsx';

const useNavigation = () => {
  return useContext(NavigationContext);
}

export default useNavigation;
