import Header from './components/header/header.js'
import Home   from './pages/home/home'
import WorkProgress from './pages/workProgress/workProgress.js'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProjectsMenu from './components/projects-menu/projects-menu.js';

function App() {
  return(
    <div>
     
  <ProjectsMenu></ProjectsMenu>
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
