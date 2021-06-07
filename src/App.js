//Components and pages
import Home from './pages/home'
import GlobalStyles from './components/GlobalStyles'
//React Route
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
