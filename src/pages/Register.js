import React, { Component } from 'react';
import superagent from '../libraries/Superagent';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      password: ''
    }
  }

  fullNameChange(event) {
    this.setState({fullName: event.target.value});
  }

  emailChange(event) {
    this.setState({email: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();

    superagent
      .post('/api/users/register')
      .send({
        user: {
          full_name: this.state.fullName,
          email: this.state.email,
          password: this.state.password
        }
      })
      .end((err, res) => {
        if (res.body.result === 'successful') {
          window.location = '/login';
        } else {

        }
      });
  }

  render() {
    return (
      <main className='container' id='account'>
        <div className='row justify-content-md-center'>
          <div className='col-md-4'>
            <h1>Register</h1>
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text"
                       className="form-control"
                       id="fullname"
                       placeholder="Enter Full Name"
                       value={this.state.fullName}
                       onChange={(event) => this.fullNameChange(event)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       aria-describedby="emailHelp"
                       placeholder="Enter Email"
                       value={this.state.email}
                       onChange={(event) => this.emailChange(event)}
                />
                <small id="emailHelp" className="form-text text-muted">"We'll never share your email with anyone else."</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                       className="form-control"
                       id="password"
                       placeholder="Enter Password"
                       value={this.state.password}
                       onChange={(event) => this.passwordChange(event)}
                />
              </div>
              <a href='/login'>Have an Account?</a>
              <p className='text-right'>
                <button type="submit" className="btn btn-primary">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Register;
