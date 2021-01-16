import { Provider } from 'react-redux';
import './App.scss';
import AppBody from './components/layout/AppBody';
import Login from './components/login/Login';
import store from './dataStore/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBody>
          <h1>Hello World</h1>
        </AppBody>
        <Login />
      </div>
    </Provider>
  );
}

export default App;
