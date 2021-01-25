import './App.css';
import AppProvider from './AppContex';
import Button from './Button';
import UserInfo from './UserInfo';

const App = () => (
  <div className="container">
    <AppProvider>
      <UserInfo />
      <Button />
    </AppProvider>
  </div>
);

export default App;
