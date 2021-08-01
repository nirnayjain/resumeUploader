import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Screens/Home'
import Login from './Screens/Login'
import UserDetails from './Screens/UserDetails'
import Nav from './Components/Nav'
 
function App() {
   return (
   <>
 
     <Nav />
      <Switch>
         <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/employer/login">
             <Login isEmployer={true} />
             </Route>
             <Route exact  path="/employer" component={UserDetails} />
           
            
      </Switch>
  
   </>
  );
}

export default App;