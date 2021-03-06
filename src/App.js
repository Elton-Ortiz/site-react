import Header from './components/header/header.js'
import Home   from './pages/home/home'
import WorkProgress from './pages/workProgress/workProgress.js'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PageAbout from './components/page-about/page-about.js';

function App() {
  return(
    <div>
  <PageAbout></PageAbout>
  <Header></Header>
  <Switch>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/work">
        <WorkProgress />
      </Route>
  </Switch>
   </div>
 ) 
} 
 
export default App;
