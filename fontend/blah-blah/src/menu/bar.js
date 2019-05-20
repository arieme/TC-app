import React ,{Component} from 'react';
import '../acceuil/toolbar.css';
import '../acceuil/montesrrat.css';
import '../acceuil/rubik.css';


class Bar extends Component
{ 
   render(){
       return(
<nav    class="uk-navbar-container uk-margin" uk-navbar={'true'} > 
<div  class="uk-navbar-left mynav">
<button id="logo"></button>
   <h2>Improve.</h2>
   </div>
   </nav>
   );
   }
   }
   export default Bar;