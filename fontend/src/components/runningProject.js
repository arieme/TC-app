import React, {Component} from 'react';
import '../css/runningProject.css'
import '../css/rubik.css';
import '../css/montserrat.css'
import '../externals/css/uikit.css'

class RunningProject extends Component{
    render(){
        return(
            <div className="uk-card-default uk-card-body uk-width-1-2@m card" >
                <h3 className="head-project">Running Project</h3>
                <div class="uk-margin">
                    <textarea class="uk-textarea area-text" rows="5" placeholder="Voila la description du texte k, ce projet est un projet."></textarea>
                </div>
                <progress id="js-progressbar" class="uk-progress progress-bar" value="10" max="100"><span className="val">70% Completed</span></progress>
            </div>
            
        )
    }


}


export default RunningProject;