import { useContext } from 'react';
import { AppContext } from './AppContex';

const Button = () => {
  const { toggledLoggedState } = useContext(AppContext);
  return <button onClick={toggledLoggedState}>Switch user state</button>;
};

export default Button;
