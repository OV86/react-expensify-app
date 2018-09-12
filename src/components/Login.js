import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ onStartLogin }) => (
    <div>
        <button onClick={onStartLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    onStartLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
