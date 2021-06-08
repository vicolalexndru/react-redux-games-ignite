//Components and pages
import Home from './pages/home';
import Nav from './components/nav';
//Global Styles
import GlobalStyles from './components/GlobalStyles'
//React Route
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav/>
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
