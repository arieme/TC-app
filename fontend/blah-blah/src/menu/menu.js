import React ,{Component} from 'react';
import '../menu/menu.css';
class Menu extends Component{
    render(){
        return(
        <div >
    
          <div className="uk-card uk-card-default uk-card-large uk-card-body card_div ">
            <div >
            <div className="inline">
                  <p className="home1" id="home2">Home</p>
              </div>
              <span className="home1" id="home1" class="uk-margin-small-right" uk-icon="home"></span>
             
            </div>
            <div >
              <span class="uk-margin-small-right" uk-icon="file-edit"></span>
              <p >Habbits</p>
            </div>
            <div >
              <span class="uk-margin-small-right" uk-icon="calendar"></span>
              <p >calendar</p>
            </div>
            <div >
              <span class="uk-margin-small-right" uk-icon="comments"></span>
              <p >Chat</p>
            </div>
            <div>
              <span class="uk-margin-small-right" uk-icon="user"></span>
              <p >Profile</p>
            </div>
            <div>
              <span class="uk-margin-small-right" uk-icon="cog"></span>
              <p >Settings</p>
            </div>
         </div>
        </div>
              );
    }
}
export default Menu;