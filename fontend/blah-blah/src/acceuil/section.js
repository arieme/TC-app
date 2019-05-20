import React ,{Component} from 'react';
import '../acceuil/montesrrat.css';
import '../acceuil/section.css';
import '../acceuil/toolbar.css';
import landing from '../acceuil/landing.jpg'
class Section extends Component
{
    render(){
    
  
        return(
            
            <div >   
               <div id="parag" className=" mydiv">
                <div id="part2">
                  <h1 > "It’s not what we do once in a while that shapes our lives. It’s what we do consistently." -Tony Robbins</h1>
                       
                             <p>Improve will help you track your progress to achieve your goals and share them with people with the same interest.</p>
                           
                 </div>  
                   <div className="div_bas">
                      <p id="p4"> What are you waiting for?</p>
                   
                      <button  id="p3" className="uk-button mybtn signup" > Signup</button>
                   </div>

                   <div className="div_bas">     
                     
                      <p id="p1" >     You already have an acount ? </p>
                      <a id="p2" href="#">Sign in!</a>
                   
                   
                   </div>
               </div>

               <div id="img">
               <img  src="landing.jpg" width="700" height="700" alt="" uk-img/>
               </div>


         </div>          
                  
               );
            }
}
export default Section;