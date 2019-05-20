import React, {Component} from 'react';
import '../externals/css/uikit.css'
import '../css/montserrat.css'
import '../css/login.css'

class CardLogin extends Component{
    
    render(){
        return(
            <div className="uk-card-default uk-card-body uk-width-1-2@m uk-align-center card" >
                <div>
                    <h5 className="headLogin uk-align-center">Log in to your account</h5>
                </div>
                <form>
                    <div className="uk-margin">
                        
                            <label className="uk-form-label uk-align-left label-login" htmlFor="form-name">Username</label>
                            <div className="uk-form-controls">
                                <input name="login-name" className="uk-input input-Login" id="form-name" type='text' placeholder="Choose your username"/>
                            </div>
                        </div>
                
                    <div className="uk-margin">
                    <label className="uk-form-label uk-align-left label-login" htmlFor="form-passwd">Password</label>
                        <div className="uk-form-controls">
                            <input name="login-passwd" className="uk-input input-Login" id="form-passwd" type='password' placeholder="Password (at least 6 caracters)"/>
                        </div>
                    </div>

                    <button className="uk-button btn-login">Log in</button>

                </form>
            </div>
        )
    }
}

export default CardLogin;