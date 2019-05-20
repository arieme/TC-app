import React, {Component} from 'react';
import '../css/headerLogin.css';
import '../css/rubik.css';
import '../externals/css/uikit.css'
import CardLogin from './cardLogin';

class Login extends Component {

    

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

                <CardLogin/>

            </div>

        )
    }
}


export default Login;