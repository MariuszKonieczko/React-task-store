import { useContext } from 'react';
import { AppContext } from './AppContex';

const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);
  const userInfo = isUserLogged ? 'logged' : 'logged out';
  return (
    <div className="userInfoContainer">
      <p>User is {userInfo}</p>
    </div>
  );
};

export default UserInfo;
