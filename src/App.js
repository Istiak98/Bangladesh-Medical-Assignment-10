import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from '../src/components/Home/Home/Home'
import Navbar from '../src/components/Shared/Navbar/Navbar'
import Footer from '../src/components/Shared/Footer/Footer'
import Gallary from './components/Home/Gallary/Gallary';
import NotFound from '../src/components/Shared/NotFound/NotFound'
import About from './components/Home/AboutUs/About';
import ContactUs from './components/Home/Contact/ContactUs';
import Appoinment from './components/Home/Appoinment/Appoinment';
import ServiceInfo from './components/ServiceInfo/ServiceInfo';
import Login from './components/Shared/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path='/'>
          <Home/>
         </Route>
         <Route  path='/home'>
          <Home/>
         </Route>
         <PrivateRoute  path='/gallary'>
          <Gallary/>
         </PrivateRoute>
         <PrivateRoute  path='/about'>
          <About></About>
         </PrivateRoute>
         <PrivateRoute  path='/contact'>
         <ContactUs></ContactUs>
         </PrivateRoute>
         <PrivateRoute  path='/appointment'>
         <Appoinment></Appoinment>
         </PrivateRoute>
         <Route  path='/login'>
         <Login></Login>
         </Route>
         <PrivateRoute  path='/detailService/:id'>
           <ServiceInfo></ServiceInfo>
         </PrivateRoute>
         <Route  path='*'>
          <NotFound></NotFound>
         </Route>
      
       </Switch>
       <Footer/>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
