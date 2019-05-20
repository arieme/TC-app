import React, {Component} from 'react';
import '../externals/css/uikit.css'
import '../css/montserrat.css'
import '../css/login.css'

class CardSignUp extends Component{
    
    render(){
        return(
            <div className="uk-card-default uk-card-body uk-width-1-2@m uk-align-center card" >
                <div>
                    <h5 className="headLogin uk-align-center">Create a new account</h5>
                </div>
                <form method="post" action="">
                    <div className="uk-margin">
                        
                            <label className="uk-form-label uk-align-left label-login" htmlFor="sign-name">Name</label>
                            <div className="uk-form-controls">
                                <input name="sign-name" className="uk-input input-Login" id="sign-name" type='text' placeholder="Your Full Name"/>
                            </div>
                    </div>
                
                    <div className="uk-margin">
                    <label className="uk-form-label uk-align-left label-login" htmlFor="sign-username">Username</label>
                        <div className="uk-form-controls">
                            <input name="sign-username" className="uk-input input-Login" id="sign-username" type='text' placeholder="Choose your username"/>
                        </div>
                    </div>

                    <div className="uk-margin">
                        
                            <label className="uk-form-label uk-align-left label-login" htmlFor="sign-mail">Email</label>
                            <div className="uk-form-controls">
                                <input name="sign-mail" className="uk-input input-Login" id="sign-mail" type='email' placeholder="pleaseemailme@gmail.com"/>
                            </div>
                    </div>

                    <div className="uk-margin">
                        
                            <label className="uk-form-label uk-align-left label-login" htmlFor="sign-passwd">Password</label>
                            <div className="uk-form-controls">
                                <input name="sign-passwd" className="uk-input input-Login" id="sign-passwd" type='password' placeholder="Password (at least 6 caracters)"/>
                            </div>
                    </div>

                    <div className="uk-margin">
                        <p className="accept">By clicking below you agree to <a href="#">terms of service</a> and <a href="#">privacy statement</a></p>
                    </div>

                    <button className="uk-button btn-login">Create your account</button>

                </form>
            </div>
        )
    }
}

export default CardSignUp;