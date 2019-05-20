import React , {Component } from 'react'
class Login extends Component{
    constructor(props)
    {   
        super(props);
        this.state={
            name:'etic',
            username:'',
            password:''

        };
        
    }
    render(){
        return (
            <div>
                   <h1> {"mu club " + (this.state.name=== "etic" ? "the best" : this.state.name)}</h1>
                   {this.state.name==="etic" ? <div></div> :
                    <input type="text" value={this.state.username} placeholder="username" onChange={this.state.name} />}

                    <input  type="password" value={this.state.password} placeholder="password"/>
                    <button> onClick={() => this.setState({name:"traning camp"})} </button>
        


                   
            </div>
        
        );
    }
}
export default Login;