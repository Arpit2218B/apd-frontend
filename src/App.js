import { Provider } from 'react-redux';
import './App.scss';
import AppBody from './components/layout/AppBody';
import Login from './components/login/Login';
import store from './dataStore/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoutes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <ProtectedRoute path="/app">
              <AppBody>
                <Route path="/app/dashboard">
                  <h1>dashboard</h1>
                </Route>
                <Route path="/app/current">
                  <h1>current tasks</h1>
                </Route>
                <Route path="/app/completed">
                  <h1>completed tasks</h1>
                </Route>
                <Route path="/app/reports">
                  <h1>reports</h1>
                </Route>
              </AppBody>
            </ProtectedRoute>
            <Route path ="/" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
