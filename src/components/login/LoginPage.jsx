import React from 'react';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        var username = this.refs.username.value;
        var password = this.refs.password.value;

        //move up the data

    }

    render() {

        return (
            <div className="container">

                <div className="row align-center">
                    <div className="column large-10">
                        <h1>Login</h1>
                        <form method="post" onSubmit={this.handleSubmit}>
                            <div class="row">
                                <div class="small-3 columns">
                                    <label for="username" class="text-right middle">Username</label>
                                </div>
                                <div class="small-9 columns">
                                    <input type="text" id="username" ref="username" placeholder="Username"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="small-3 columns">
                                    <label for="password" class="text-right middle">Password</label>
                                </div>
                                <div class="small-9 columns">
                                    <input type="password" id="password" ref="password" placeholder="password"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="small-3 columns">
                                    &nbsp;
                                </div>
                                <div class="small-9 columns">
                                    <input type="submit" className="button" value="Login"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default LoginPage;