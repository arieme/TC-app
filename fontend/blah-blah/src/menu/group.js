import React ,{Component} from 'react';
import '../menu/menu.css';
class Group extends Component{
    render(){
        return(

    <div >
    
          <div className="uk-card uk-card-default uk-card-large uk-card-body card_div card_divdown">
             <div id="title  ">
             <button  uk-icon="icon: plus-circle"class="uk-button uk-button-default uk-button-small ajt_btn"></button>
               <h4>GROUPS</h4>
               
               
            </div>
            <div id="list">
            <p>Stay Healthy Group</p>
            <p>Stay fit always</p>
            <p>Hello world</p>
            <p>Nerds group</p>
            </div>
            
         </div>
    </div>
        );

    }
}
export default Group 