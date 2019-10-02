import React from 'react';
import { connect } from 'react-redux';
import { Col, Form, Button } from 'react-bootstrap';
import '../../index.scss';
import { userActions } from './actions/login';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  };

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <Col md={4} className={'ml-auto mr-auto'}>
        {' '}
        <h2>Panel Login</h2>
        <Form name="form" onSubmit={this.handleSubmit}>
          {' '}
          <Form.Group
            controlId="username"
            className={submitted && !username ? ' has-error' : ''}
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </Form.Group>
          <Form.Group
            controlId="password"
            className={submitted && !password ? ' has-error' : ''}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          {loggingIn && <span>logging in...</span>}
        </Form>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLogin = connect(mapStateToProps)(LoginContainer);
export { connectedLogin as LoginContainer };
