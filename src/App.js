import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Redeem from './components/pages/Redeem';
import Features from './components/pages/Features';
import HowWeWork from './components/pages/HowWeWork';
import Blog from './components/pages/Blog';
import FAQ from './components/pages/Faq';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about-us' exact component={AboutUs}/>
          <Route path='/features' exact component={Features}/>
          <Route path='/redeem' exact component={Redeem}/>
          <Route path='/howwework' exact component={HowWeWork }/>
          <Route path='/blog' exact component={Blog }/>
          <Route path='/faq' exact component={FAQ }/>
          <Route path='/login' exact component={Login }/>
        </Switch>
      </Router>
        
    </>
   
  );
}

export default App;
