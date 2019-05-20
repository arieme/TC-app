import React, {Component} from 'react';
import '../css/headerLogin.css';
import '../css/rubik.css';
import '../external/css/uikit.css'
import CardSignUp from './cardSignUp';

class SignUp extends Component {

    

    render(){
        
        return(
            <div className="login-page">
                <nav className=" uk-margin rect-header" >
                    <div className="uk-navbar">
                        <div className="logo-name uk-align-center">
                            <ul >
                                <li className="logo"></li>
                                <li className="Improve">Improve.</li>
                            </ul>
                        </div>

                    </div>
                </nav>

                <CardSignUp/>

            </div>

        )
    }
}


export default SignUp;