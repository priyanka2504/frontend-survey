import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div class="login">
                <div class="container">
                    <div class="row">
                        <div class="col-sm">

                        </div>
                        <div class="col-sm">
                            <form>
                                <div class="form-group row">
                                    <div class="col-sm-16">
                                        <h4 class="text-primary"> Login to take the Frontend Survey </h4> <br />
                                    </div>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="inputPassword" placeholder="Your name" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputPassword" placeholder="Your Email ID" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-10" align="center">
                                        <a href="/survey" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Start Survey</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm">
                        </div>
                    </div>
                </div>
</div>
            </div>
        )
    }
}

export default Login;