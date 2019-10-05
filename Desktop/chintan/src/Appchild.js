import React, { Component } from 'react';


import Footer from './footer/footer'
import Header from './header/header'
import Bread from './breadcrum/breadcrum'
import Formone from './formone/formone'
import Formtwo from './formtwo/formtwo'
import Formthree from './formthree/formthree'
import $ from "jquery" ;
import { BrowserRouter, Route, Switch,NavLink , Redirect } from 'react-router-dom';



class Appchild extends Component {
  state ={
  
  }


render(){

return(

  <BrowserRouter>
   <Header />
    <Bread />
    <Switch>
    
      <Route path="/" exact strict component={Formone}/>
      <Route path="/formtwo" exact strict component={Formtwo}/>
      <Route path="/formthree" exact strict component={Formthree}/>
     
    </Switch>
    <Footer />

  </BrowserRouter>
)
}

}


export default Appchild

