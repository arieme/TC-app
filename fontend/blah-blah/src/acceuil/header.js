import React ,{Component} from 'react';
import '../acceuil/toolbar.css';
import '../acceuil/montesrrat.css';
import '../acceuil/rubik.css';


class Header extends Component
{
   render(){
   
    
   
       return ( 
       <nav    class="uk-navbar-container uk-margin" uk-navbar={'true'} > 
        <div  class="uk-navbar-left mynav">
      <button id="logo"></button>
           <h2>Improve.</h2>
            <ul  >
            <li ><a href="#">Home</a></li>
              <li > <a href="#">About</a> </li>
              <li > <a href="#">Help</a></li>
              </ul>
           
              <div class="uk-navbar-item">
            <form class="divbtn"> 
                <button class="uk-button btn-inscrire " >Sign in   </button> 
                <button class="uk-button  mybtn" >Sign up</button>
                
            </form>
               </div>
            
        </div>
       </nav>

              );
           }
        
   
}
export default Header;