import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from './pages/Services';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';


function App() {
  return (
   <>

   <BrowserRouter>
   <Header/>

<Switch>
<Route path="/" exact component={Home}/>
<Route path="/blog" component={Blog}/>
<Route path="/services" component={Services}/>
<Route path="/case-study" component={CaseStudy}/>
<Route path="/contact" component={Contact}/>


</Switch>

<Footer/>
</BrowserRouter>

   </>
  );
}

export default App;
