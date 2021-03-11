import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Componants/Home/Home';
import Header from './Componants/Header/Header';
import NotFound from './Componants/NotFound/NotFound';
import TeamDtls from './Componants/TeamDtls/TeamDtls';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Componants/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
          
          <Switch>
            <Route path="/home">
            <Navigation></Navigation>
              <Header></Header>
              <Home></Home>
            </Route>
            <Route exact path="/">
            <Navigation></Navigation>
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/details/:teamId">
              <TeamDtls></TeamDtls>  
            </Route>   
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
